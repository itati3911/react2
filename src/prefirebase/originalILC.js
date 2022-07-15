{/* <div className="cart-empty">
<h1>YOUR CART</h1>
<br/>
<br/>

    {
        (test.cart.length > 0)
        ? <Button variant="outline-secondary" color="danger" type="filled" onClick={test.emptyCart}>DELETE ALL PRODUCTS</Button>
        : 
        <h2>Is empty!!! Let´s fix this...</h2>
        
    }
    
    <Link to='/'><Button variant="outline-secondary" color="danger">CONTINUE SHOPPING</Button></Link>

</div>

<div>
    {
        test.cart.length > 0 &&
        test.cart.map(item =>
            <div key={item.id}>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.qty} item(s)</Card.Text>
                        <Card.Text>Price: $ {item.price} each</Card.Text>
                        <Card.Text>Subtotal items cost $ {test.calcTotalPerItem(item.id)}</Card.Text>
                        <Button Button variant="outline-secondary" color="danger" onClick={() => test.deleteItem(item.id)}>DELETE</Button>
                    </Card.Body>
                </Card>

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

        <div type="total">
            <h3>Total</h3>
            <div><FormatNumber number={test.calcTotal()} /></div>
        </div>
        <Link to='/checkout'><Button variant="outline-secondary" color="danger">PROCEED TO CHECKOUT</Button></Link>
    </div>
}



</> */}






















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