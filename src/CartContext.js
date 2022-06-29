import { createContext, useState } from 'react';
export const CartContext = createContext();



const { Provider } = CartContext;

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    //METODO SOME, EN ITEM DETAIL, BOLEANO, DETECTA SI EL PROD YA ESTA EN EL CART
    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    //EN ITEM DETAIL, AGREGA PROD A CART SIN PISARLOS Y AUMENTA SI DUPLICADO


    const addItem = (item, qty) => {
        const newItem = { ...item, qty };

        console.log(newItem)

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(item => item.id === newItem.id);
            const productIndex = cart.indexOf(findProduct);
            const auxArray = [...cart];
            auxArray[productIndex].qty += qty;
            setCart(auxArray);

        } else {
            setCart([...cart, newItem]);
        }
    }

    //EN CART EN BOTON, VACIA CARRITO
    const emptyCart = () => {
        setCart([]);
    }

    //METODO FILTER, EN CART, FILTRA POR ID DANDO ARRAY NUEVO SIN EL PROD SELECCIONADO
    const deleteItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }


    //METODO REDUCE, EN CARTWIDGET, RETORNA TOTAL DE UNIDADES EN STATE CART
    const getItemQty = () => {
        return cart.reduce((acc, item) => acc += item.qty, 0);
    }

    //METODO REDUCE, EN CARTWIDGET, RETORNA TOTAL DE PRECIO EN CARRITO
    const getItemPrice = () => {
        return cart.reduce((acc, item) => acc += item.price * item.qty, 0);
    }

    //CALCULOS
    const calcTotalPerItem = (id) => {
        let index = cart.map(item => item.id).indexOf(id);
        return cart[index].price * cart[index].qty;
    }

    const calcSubTotal = () => {
        let totalPerItem = cart.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcTaxes();
    }

    const calcItemsQty = () => {
        let qtys = cart.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }



    return <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice, calcTotalPerItem, calcSubTotal, calcTaxes, calcTotal, calcItemsQty }}>{children} </Provider>

}
