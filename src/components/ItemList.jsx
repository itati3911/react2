import React, { useEffect } from "react"
import Item from "./Item"
import "../style/ItemListContainer.css"


const ItemList = ({ items }) => {

    //to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="containerList">
            {
                items.length > 0
                    ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} stock={item.stock} image={item.image} />)
                    : <p>Loading...</p>
            }
        </div>
    );
}

export default ItemList;