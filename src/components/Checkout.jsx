import React, {useState, useContext} from "react"
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {Link} from "react-router-dom";




export default function Checkout()  {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");


    
    
    
    

    const [validation, setValidation] = useState({
        name: false,
        email: false,
        cel: false
    })

    const [orderId, setOrderId] = useState("");
    
    
    const {cart, getItemPrice, emptyCart} = useContext(CartContext);

    const db = getFirestore();
    const orderCollection = collection (db, "orders");


    
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


    

    function handleClick(){
    
        const order = {
            buyer: {name, email, cel},
            total: getItemPrice(),
            items: cart,
        }
        

        if (validation.name && validation.email && validation.cel) {
        addDoc(orderCollection, order)
        .then(({id}) =>{
            setOrderId(id);

            emptyCart();
            alert ("your order id is" + id)
        
        
    
        })}else{
            alert("Please fill the form so we can complete your purchase")
        }
    }
        



    return(
        <div>
            
            <h1>Complete this form to finish your purchase</h1>
            <br/>
            <input onKeyUp={validateName} onChange={(e) =>setName(e.target.value)} placeholder ="name"></input>
            <br/>
            {validation.name ? <p>The name is valid</p> : name == "" ? "" : <p>Please enter your name</p>}

            <br/>
            <input onKeyUp={validateEmail} onChange={(e) =>setEmail(e.target.value)} placeholder ="email"></input>
            <br/>
            {validation.email ? <p>The mail is valid</p> : email == "" ? "" : <p>Please enter your mail</p>}

            <br/>
            <input onKeyUp={validateCel} onChange={(e) =>setCel(e.target.value)} placeholder ="cellphone"></input>
            <br/>
            {validation.cel ? <p>The cellphone number is valid</p> : cel == "" ? "" : <p>Please enter your cellphone number</p>}

            <br/>
            <button onClick={()=> handleClick()}>Finish your purchase</button>
            <Link to="/"><button>Return to home</button></Link>
        </div>
    )
}












///////*COPIA DEL CHECKOUT ORIFGINAL////////

/* import React, {useState, useContext} from "react"
import { CartContext } from "../CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";





export default function Checkout()  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");

    const [orderId, setOrderId] = useState("");
    
    
    const {cart, getItemPrice} = useContext(CartContext);
    const db = getFirestore();
    const orderCollection = collection (db, "orders");

    

    function handleClick(){
    const order = {
            buyer: {name, email, cel},
            total: getItemPrice(),
            items: cart,
        };
        console.log(order)
        addDoc(orderCollection, order)
        .then(({id}) =>{
            setOrderId(id);
        })
        .catch((error) =>{
            console.log(error);
        });
    }



    return(
        <div>
            <h1><strong>Your order id is: {orderId}</strong></h1>
            
            <h1>Complete this form to finish your purchase</h1>
            <br/>
            <input onChange={(e) =>setName(e.target.value)} placeholder ="name"></input>
            <br/>
            <br/>
            <input onChange={(e) =>setEmail(e.target.value)} placeholder ="email"></input>
            <br/>
            <br/>
            <input onChange={(e) =>setCel(e.target.value)} placeholder ="cel"></input>
            <br/>
            <br/>
            <button onClick={()=> handleClick( )}>Finish your purchase</button>
        
        </div>
    )
    }*/