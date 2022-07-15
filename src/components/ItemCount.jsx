import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";


const Qty = ({ stock = 0, initial = 1, onAdd }) => {
    const [qty, setQty] = useState(0);

    useEffect(() => {
        setQty(initial);
    }, []);

    const increment = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }

    const decrement = () => {
        if (qty > initial) {
            setQty(qty - 1);
        }
    }

    return (
        <>
            
            <div>
                <Button style={{ margin: "10px" }} size="sm" variant="outline-secondary" color="danger" onClick={increment}>+</Button>
                {qty}         
                <Button style={{ margin: "10px" }} size="sm" variant="outline-secondary" color="danger" onClick={decrement}>-</Button>
            </div>
            <br/>
            {
                stock && qty
                    ? <Button style={{ margin: "10px" }} variant="outline-secondary" color="danger" onClick={() => { onAdd(qty) }}>Add to cart</Button>
                    : <Button variant="outline-secondary" color="danger" disabled>No stock available</Button>
            }
        </>




    )
}

export default Qty;











