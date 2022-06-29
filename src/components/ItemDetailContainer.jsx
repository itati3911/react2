import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
//const { products } = require('../utils/products');
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState(false); 
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        getDoc(itemRef).then((snapshot) => {
            setResult({...snapshot.data(), id: snapshot.id});
            })
            .catch ((error) => {
                setError(error);
            })
            .finally (() => {
                setLoading(false);
            })
        


    }, [id]);

    return (
        <ItemDetail item={result} />
    );
}

export default ItemDetailContainer;

