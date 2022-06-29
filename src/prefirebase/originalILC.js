//@ts-check
/* import React, { useEffect, useState } from "react"
//import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import {collection, doc, getDocs, getFirestore} from  "firebase/firestore"
*/ 

//const { products } = require("../utils/products");


 //const ItemListContainer = () => {
    /*const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();
 */
/* 
const [products, setProducts] = useState([]);

const coleccion = "items";
const db = getFirestore();
 */

//PARA TRAER TODA LA INFO SIN FILTRO
/* const itemsCollection = collection(db,coleccion);





    useEffect(() => {
        
        getDocs(itemsCollection).then((res) => {
            console.log(res.docs)
        })

            
        },[])
        
         */
        
        
        
        
        
        
        /*customFetch(500, products.filter(item => {
             if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]); */

/* 
    return (
        <>
            <ItemList items={} />
        </>

    );
}

export default ItemListContainer; */




//va copia de vuelta

/* import React, { useEffect, useState } from "react"
import customFetch from "../utils/customFetch";
import ItemList from "./ItemList";
import { useParams } from "react-router";

 */
/* const { products } = require("../utils/products");


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
} */

//export default ItemListContainer;