import React, { useState } from "react"

const ItemCount = ({ inicial, max, onAdd }) => {

    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < max) {
            setCount(count + 1)
        } else {
            alert("No hay más productos en stock")
        }
    }

    const restar = () => {
        count > inicial ? setCount(count - 1) : alert("No se puede remover el producto")
    }

    const reset = () => {
        setCount(inicial)
    }

    return (
        <>
        <div className="mostrador">
            <h2>{count}</h2>
        </div>
        <div className="mostrador">
            <button onClick={sumar}>+</button>
            <button onClick={() => { onAdd(count); reset() }}>Agregar al Carrito</button>
            <button onClick={restar}>-</button>
        </div>
        </>
    )

}

export default ItemCount
