import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Item({ id, title, price, image }) {
  return (
    <div>
      <Card style={{ width: '200px', heigth:"300px", margin: "20px", border:"2px solid grey"}}>

        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Price: ${price}

          </Card.Text>

          <Button variant="outline-secondary" color="danger" ><Link to={`/item/${id}`} style={{ textDecoration: "none" }}>More info</Link></Button>
        </Card.Body>
      </Card>
    </div>
  )
}

