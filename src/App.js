import React from 'react'
import './App.css';
import BsNavBar from './components/BsNavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  

  return (
    
    <BrowserRouter>
    <BsNavBar />
    <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />

    </Routes>
</BrowserRouter>
  )
}

export default App;

