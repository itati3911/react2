import React, { useState, useContext, useRef } from "react";
import { Button } from 'react-bootstrap';
import { CartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "../style/Checkout.css"




export default function Checkout() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");





    const [validation, setValidation] = useState({
        name: false,
        email: false,
        cel: false
    })

    const [orderId, setOrderId] = useState("");


    const { cart, getItemPrice, emptyCart } = useContext(CartContext);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");



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





    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const celRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();


        event.target.reset();
    };



    function handleClick() {

        const order = {
            buyer: { name, email, cel },
            total: getItemPrice(),
            items: cart,
            
        }




        if (validation.name && validation.email && validation.cel) {
            addDoc(orderCollection, order)
                .then(({ id }) => {
                    setOrderId(id);
                    emptyCart();

                    //Swal.fire("Your order id is " + id)
                    Swal.fire({
                        icon: 'success',
                        title: "Your order id is " + id,
                        confirmButton: <a href="/">Return to Home</a>
                        
                      })


                })
        } else {
            
            Swal.fire("Please fill this form so we can complete your purchase")
        }
    }




    return (
        <div className="checkout-form">
            <form onSubmit={handleSubmit} className="checkout-form">

                <h1>Complete this form to finish your purchase</h1>
                <br />
                <input ref={nameRef} onKeyUp={validateName} onChange={(e) => setName(e.target.value)} placeholder="name"></input>
                <br />
                {validation.name ? <p>The name is valid</p> : name == "" ? "" : <p>Please enter your name</p>}

                <br />
                <input ref={emailRef} onKeyUp={validateEmail} onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <br />
                {validation.email ? <p>The mail is valid</p> : email == "" ? "" : <p>Please enter a valid mail</p>}

                <br />
                <input ref={celRef} onKeyUp={validateCel} onChange={(e) => setCel(e.target.value)} placeholder="cellphone"></input>
                <br />
                {validation.cel ? <p>The cellphone number is valid</p> : cel == "" ? "" : <p>Please enter a valid cellphone number</p>}

                <br />
                <Button variant="outline-secondary" type="submit" style={{ margin: "10px" }} color="danger" onClick={() => handleClick()}>Finish your purchase</Button>
                <Link to="/"><Button variant="outline-secondary" style={{ margin: "10px" }} color="danger">Return to home</Button></Link>
            </form>
        </div>
    )
}











