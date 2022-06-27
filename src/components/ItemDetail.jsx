import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import ItemCount from "./ItemCount";



export default function ItemDetail({ item }) {

    const [qty, setQty] = useState(1);

    const { isInCart, addItem } = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");

        isInCart(item.id);
        addItem(item, qty);
        setQty(qty);



    }

    return (
        <div className="mostrador">
            <Card border="secondary" style={{ width: '15rem', margin: "20" }}>
                <Card.Img variant="top" src={item.image} />

                <Card.Body>
                    <Card.Title><strong>{item.name}</strong></Card.Title>
                    <Card.Text>
                        About this item: {item.description}
                        <br />
                        Price: ${item.cost}

                        <br />
                        Stock: {item.stock}
                        <br />
                    </Card.Text>

                    <Button variant="outline-primary" style={{ textDecoration: "none" }}>More info</Button>
                </Card.Body>
                {qty === 1
                    ? <ItemCount stock={item.stock} inicial={qty} onAdd={onAdd} />
                    : <Link to='/cart' style={{ textDecoration: "none" }}><Button variant="outline-primary" color="secondary">CheckOut</Button></Link>
                }
            </Card>
        </div>
    )
}

