import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router";


const { products } = require("../utils/products");


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();



    useEffect(() => {
        customFetch(500, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);


    return (
        <>
            <ItemList items={datos} />
        </>

    );
}

export default ItemListContainer;