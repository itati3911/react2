import React, { useState, useContext, useEffect, useRef } from "react";
import { Button } from 'react-bootstrap';
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../style/Checkout.css"


export default function Checkout() {

    //to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const { cart, getItemPrice, emptyCart, calcTaxes, calcTotal, calcSubTotal } = useContext(CartContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cel, setCel] = useState("")

    const [validation, setValidation] = useState({
        name: false,
        email: false,
        cel: false
    })

    //User id
    const [idBuy, setIdBuy] = useState("")

    function updateStocks(cart) {
        cart.forEach((item) => {
            const stockDoc = doc(db, "items", item.id);
            updateDoc(stockDoc, { stock: item.stock - item.qty });
        });
    }

    //Firestore db
    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    function validateEmail() {
        if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)) {
            setValidation({ ...validation, email: true });
        } else {
            setValidation({ ...validation, email: false });
        }
    }

    function validateName() {
        if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)) {
            setValidation({ ...validation, name: true });
        } else {
            setValidation({ ...validation, name: false });
        }
    }

    function validateCel() {
        if (/^[0-9]+$/.test(cel) && cel.length >= 9) {
            setValidation({ ...validation, cel: true });
        } else {
            setValidation({ ...validation, cel: false });
        }
    }

    //Validation data
    function handleClick() {



        const order = {
            buyer: { name, email, cel },
            items: cart,
            total: getItemPrice()
        }

        if (validation.name && validation.email && validation.cel) {

            addDoc(orderCollection, order).then(({ id }) => {
                setIdBuy(id)
                updateStocks(cart)
            })
        } else {
            Swal.fire('Please fill this form so we can complete your purchase')
        }

    }


    return (

        //succesful transaction
        <div className='checkoutContainer'>

            {idBuy != "" ?

                <div>

                    <h4 className="checkout-title">Thanks for buying!</h4>
                    <div>
                        <br />
                        
                        <strong>Your order id is:</strong> <b>{idBuy}</b>
                    </div>
                    <br />
                    <br />
                    <h5>Your data</h5>
                    <div>
                        <p>Name: <b>{name}</b></p>


                        <p>Email: <b>{email}</b></p>


                        <p>Cellphone: <b>{cel}</b></p>


                    </div>

                    <h6>We´ll contact you to deliver your order!</h6>
                    <p>Your items: <b></b></p>

                </div>
                :
                <>
                    <b>Please fill this form correctly so we can complete your purchase</b>
                    <div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg></span>
                            <input onKeyUp={validateName} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        {validation.name ? <p className="validation">The name you entered is valid</p> : name == "" ? "" : <p className="validationX">Please enter a valid name</p>}


                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">@</span>
                            <input onKeyUp={validateEmail} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email" aria-label="correo" aria-describedby="basic-addon1" />
                        </div>


                        {validation.email ? <p className="validation">The mail you entered is valid</p> : email == "" ? "" : <p className="validationX">Please enter a valid email</p>}

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg></span>

                            <input onKeyUp={validateCel} onChange={(e) => setCel(e.target.value)} type="text" className="form-control" placeholder="Cellphone" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        
                        {validation.cel ? <p className="validation">The number you entered is valid</p> : cel == "" ? "" : <p className="validationX">Please enter a valid cellphone number</p>}

                        <Button onClick={() => handleClick()} type="button" style={{ margin: "10px" }} variant="outline-secondary" color="danger">Finish purchase</Button>
                        <Link to="/"><Button style={{ margin: "10px" }} variant="outline-secondary" color="danger" onClick={emptyCart} >Return to home</Button></Link>

                    </div>
                </>
            }

<div className='containerCheckOut col2'>


                <div className='cartContainerCheck'>
                </div>

                {cart.map(item => (
                    <div key={item.id} className='cartContainerCheck lineCart'>
                        <img className='imgProducto img-fluid' src={item.image} alt={"Producto1"} width="35px" />
                        <p className='cantidadCart textCheckout'>{item.qty} x {item.name}</p>
                        <p className='precioCart textCheckout'>Precio: ${item.price}</p>
                        <p className='subtotalCart textCheckout'>Subtotal: ${item.price} x {item.qty}</p>
                    </div>


                ))}
                <div className='lineCart'>
                    <div className='spaceBet'>
                        <b>Subtotal</b> <b>${getItemPrice()}</b>
                    </div>
                    <div className='spaceBet'>
                        <b>Taxes</b> <b>${calcTaxes()}</b>
                    </div>
                </div>
                <div className='lineCart spaceBet'>
                    <b>Total</b> <b>${calcTotal()}</b>
                </div>
            </div>
            <Link to="/"><Button style={{ margin: "10px" }} variant="outline-secondary" color="danger" onClick={emptyCart} >Return to home</Button></Link>

        </div>






        )
}

