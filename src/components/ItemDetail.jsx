import React from "react"
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {useState} from "react";

export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState(0);
    const onAdd = (count) => {
        alert(`Tu total de productos es ${count}`);
      }
      
    return (
        <div className="mostrador">
            <Card border="secondary" style={{ width: '15rem', margin: "20" }}>
                <Card.Img variant="top" src={item.image} />

                <Card.Body>
                    <Card.Title><strong>{item.name}</strong></Card.Title>
                    <Card.Text>
                        Description: {item.description}
                        <br />
                        Price: ${item.cost}
                        <br />
                        <br />
                    </Card.Text>

                    <Button variant="outline-primary" style={{textDecoration:"none"}}>Ampliar info</Button>
                </Card.Body>
                {itemCount === 0
                ?<ItemCount inicial={itemCount} max={10} onAdd={onAdd}/>
                : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                }
            </Card>
        </div>
    )
}

