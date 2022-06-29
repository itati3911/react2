import React from "react"
import { Card, Button } from 'react-bootstrap';
import { useContext } from "react"
import { CartContext } from "../CartContext"
import { Link } from "react-router-dom"
import FormatNumber from "../utils/FormatNumber";



export default function Cart() {

    const test = useContext(CartContext);

    return (

        <>
            <h1>ADDED TO CART</h1>
            <div>
                <Link to='/'><button>CONTINUE SHOPPING</button></Link>
                {
                    (test.cart.length > 0)
                        ? <button type="filled" onClick={test.emptyCart}>DELETE ALL PRODUCTS</button>
                        : <h2>Your cart is empty</h2>
                }
            </div>

            <div>
                {
                    test.cart.length > 0 &&
                    test.cart.map(item =>
                        <div key={item.id}>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.qty} item(s)</Card.Text>
                                    <Card.Text>Price: $ {item.price} each</Card.Text>
                                    <Card.Text>Subtotal items cost $ {test.calcTotalPerItem(item.id)}</Card.Text>
                                    <Button variant="primary" type="filled" onClick={() => test.deleteItem(item.id)}>DELETE</Button>
                                </Card.Body>
                            </Card>

                        </div>
                    )
                }
            </div>

            {
                test.cart.length > 0 &&
                <div>
                    <h2>ORDER SUMMARY</h2>
                    <div>
                        <h3>Subtotal</h3>
                        <div><FormatNumber number={test.calcSubTotal()} /></div>
                    </div>
                    <div>
                        <h3>Taxes</h3>
                        <div><FormatNumber number={test.calcTaxes()} /></div>
                    </div>

                    <div type="total">
                        <h3>Total</h3>
                        <div><FormatNumber number={test.calcTotal()} /></div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            }



        </>
    )
}


