/* 

import React from "react"
import {useContext} from "react"
import {CartContext} from "../CartContext"
import {Link} from "react-router-dom"
import FormatNumber from "../utils/FormatNumber";


export default function Cart() {

    const test = useContext(CartContext);

    return(
        
        <div>
        <h1>YOUR CART</h1>
        <div>
            <Link to='/'><button>CONTINUE SHOPPING</button></Link>
            {
                (test.cart.length > 0)
                ? <button type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</button>
                : <h2>Your cart is empty</h2>
            }
        </div>
        <div>
        <div>
            <div>
                {
                    test.cart.length > 0 &&
                        test.cart.map(item => 
                        <div key={item.id}>
                        <div>
                            <div src={item.image} />
                            <div>
                            <span>
                                <b>Product:</b> {item.name}
                            </span>
                            <button type="filled" onClick={() => test.deleteItem(item.id)}>DELETE</button>
                            </div>
                        </div>
                        <div>
                            <div>
                            <div>{item.qtyItem} item(s)</div>
                            /
                            <div>$ {item.cost} each</div>
                            </div>
                            <div>$ {test.calcTotalPerItem(item.id)} </div>
                        </div>
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
                        <div>
                            <h3>Taxes Discount</h3>
                            <div><FormatNumber number={-test.calcTaxes()} /></div>
                        </div>
                        <div type="total">
                            <h3>Total</h3>
                            <div><FormatNumber number={test.calcTotal()}/></div>
                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
            }
        </div>
        </div>
    </div>
        
    
        )
    }
    /* <div>
        <strong>soy el carrito 0_0</strong>
    </div> */ 