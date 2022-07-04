import React, {useState, useContext} from "react"
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


    /* function handleChange(e){
        setForm({...form,[e.target.name] : e.target.value})
    }
 */


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
}