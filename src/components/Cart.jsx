import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import FormatNumber from "../utils/FormatNumber";
import "../style/Cart.css"


export default function Cart() {
    const test = useContext(CartContext);

    return (
        <>
            <div className="cart-empty">
                <br/>
                <br />
                <h1>YOUR CART</h1>
                <br />
                <br />


                {
                    (test.cart.length > 0)
                        ? <Button style={{ margin: "10px" }} variant="outline-secondary" color="danger" type="filled" onClick={test.emptyCart}>DELETE ALL PRODUCTS</Button>
                        :
                        <h2>Is empty!!! Let´s fix this...</h2>

                }

                <Link to='/'><Button style={{ margin: "10px" }} variant="outline-secondary" color="danger">CONTINUE SHOPPING</Button></Link>

            </div>

            <div>
                {
                    test.cart.length > 0 &&
                    test.cart.map(item =>
                        <div key={item.id}>



                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr className="columns">
                                        <th className="columns">Image</th>
                                        <th className="columns">Product</th>
                                        <th className="columns">Quantity</th>
                                        <th className="columns">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="columns">
                                        <td className="columns"><img className="img-table" src={item.image} /></td>
                                        <td className="columns">{item.name}</td>
                                        <td className="columns">{item.qty}</td>
                                        <td className="columns">$ {item.price}</td>
                                        <td className="columns"><Button Button variant="outline-secondary" color="danger" onClick={() => test.deleteItem(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                        </div>


                    )
                }
            </div>

            {
                test.cart.length > 0 &&
                <div className="final-order">
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
                    <Link to='/checkout'><Button style={{ margin: "10px" }} variant="outline-secondary" color="danger">PROCEED TO CHECKOUT</Button></Link>
                </div>
            }
        </>
    
    )
  }
  