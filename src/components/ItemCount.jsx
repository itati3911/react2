import React, { useState, useEffect } from "react"


const Qty =({stock=0, initial = 1, onAdd}) =>{
    const [qty, setQty] = useState(0);

    useEffect(() => {
        setQty(initial);
    },[]);

    const increment = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }

    const decrement = () => {
     if (qty > initial) {
        setQty(qty - 1);
     }}
     
     return(
<>
        <div className="mostrador">
            <h2>{qty}</h2>
        </div>
        <div className="mostrador">
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        {
            stock && qty
            ?<button onClick={() => { onAdd(qty) }}>Agregar al Carrito</button>
            : <button disabled>No hay stock</button>
        }
        </>




     )}

     export default Qty;











