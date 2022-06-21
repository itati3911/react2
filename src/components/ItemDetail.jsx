import React from "react"
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {useState} from "react";

export default function ItemDetail({ item }) {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    

    
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
                        Stock= {item.stock}
                        <br />
                    </Card.Text>

                    <Button variant="outline-primary" style={{textDecoration:"none"}}>Ampliar info</Button>
                </Card.Body>
                {itemCount === 0
                ?<ItemCount stock ={item.stock} inicial={itemCount}  onAdd={onAdd}/>
                : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="outline-primary" color="secondary">CheckOut</Button></Link>
                }
            </Card>
        </div>
    )
}

