import React from 'react'
import './App.css';
import BsNavBar from './components/BsNavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {MyProvider} from './CartContext';


function App() {

  

  return (
    
    <BrowserRouter>
    <MyProvider>
    <BsNavBar />
    <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
        </MyProvider>
</BrowserRouter>
  )
}

export default App;

