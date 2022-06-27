import React from "react"
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item({ id, title, price, image }) {
  return (
    <div>
      <Card style={{ width: '15rem', margin: "20" }}>

        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Price: ${price}

          </Card.Text>

          <Button variant="outline-primary" ><Link to={`/item/${id}`} style={{ textDecoration: "none" }}>More info</Link></Button>
        </Card.Body>
      </Card>
    </div>
  )
}

