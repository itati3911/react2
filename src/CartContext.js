import {createContext, useState} from 'react';

export const CartContext = createContext();

const {Provider} = CartContext;

export const MyProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //METODO SOME, EN ITEM DETAIL, BOLEANO, DETECTA SI EL PROD YA ESTA EN EL CART
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    
    //EN ITEM DETAIL, AGREGA PROD A CART SIN PISARLOS Y AUMENTA SI DUPLICADO
    const addItem = (item, qty) => {
        const newItem = {...item, qty};

        console.log (newItem)

        if (isInCart(newItem.id)) {
            const findProduct = cart.find (x => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].qty += qty; 
            setCart(auxArray);

    }else {
        setCart([...cart, newItem]);
    }
}

    //EN CART EN BOTON, VACIA CARRITO
    const emptyCart = () => {
        setCart([]);
    }

    //METODO FILTER, EN CART, FILTRA POR ID DANDO ARRAY NUEVO SIN EL PROD SELECCIONADO
    const deleteItem = (id) => {
        return cart.filter(item => item.id !== id);
    }

    //METODO REDUCE, EN CARTWIDGET, RETORNA TOTAL DE UNIDADES EN STATE CART
    const getItemQty = () => {
        return cart.reduce((acc,item) => acc += item.qty, 0);
    }

    //METODO REDUCE, EN CARTWIDGET, RETORNA TOTAL DE PRECIO EN CARRITO
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.price *item.qty, 0);
    }
    




    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children} </Provider> 

}
