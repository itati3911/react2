import React from "react"
import { Card, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {

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
                <ItemCount inicial={1} max={10} onAdd={onAdd}/>
            </Card>
        </div>
    )
}

