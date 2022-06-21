import React, { useState, useEffect } from "react"


const ItemCount =({stock=0, initial = 1, onAdd}) =>{
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
     if (count > initial+1) {
        setCount(count - 1);
     }}
     
     return(
<>
        <div className="mostrador">
            <h2>{count}</h2>
        </div>
        <div className="mostrador">
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        {
            stock && count
            ?<button onClick={() => { onAdd(count) }}>Agregar al Carrito</button>
            : <button disabled>No hay stock</button>
        }
        </>




     )}

     export default ItemCount;











