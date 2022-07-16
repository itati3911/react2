import React from "react"
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import Swal from 'sweetalert2';
import "../style/ItemDetail.css"



export default function ItemDetail({ item }) {

    const [qty, setQty] = useState(1);

    const { isInCart, addItem } = useContext(CartContext);

    const onAdd = (qty) => {
       
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been saved to your cart!',
            showConfirmButton: false,
            timer: 1500
          })

        isInCart(item.id);
        addItem(item, qty);
        setQty(qty);

    }

    return (

        <div className="item-det">
            <div className="item-det2">
                <img className="item-det3" src={item.image} alt="imagepr" />
            </div>
            <div className="item-det4">
                <h1><strong>{item.name}</strong></h1>
                <h6>{item.description}</h6>
                <h6> Stock: {item.stock}</h6>
                <h4>$ {item.price}</h4>
                <div>

                    {qty === 1
                        ? 
                        <>
                        <ItemCount stock={item.stock} inicial={qty} onAdd={onAdd} />
                        <Link to='/'><Button variant="outline-secondary" color="danger">CONTINUE SHOPPING</Button></Link>
                        </>
                        :
                        <>
                            <ItemCount stock={item.stock} inicial={qty} onAdd={onAdd} />
                            <Link to='/'><Button  style={{ margin: "10px" }} variant="outline-secondary" color="danger" >CONTINUE SHOPPING</Button></Link>
                            <Link to='/cart' style={{ textDecoration: "none" }}><Button  style={{ margin: "10px" }} variant="outline-secondary" color="danger">CheckOut</Button></Link></>
                    }
                </div>
            </div>
        </div>
    )
}


