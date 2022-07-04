import React from 'react'
import './App.css';
import BsNavBar from './components/BsNavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyProvider } from './CartContext';
import { initializeApp } from "firebase/app";



function App() {
  

const firebaseConfig = {
  apiKey: "AIzaSyD7Qpd0rQ9pqOxuz-WP1GEy_mkA9I3DzRA",
  authDomain: "react2-317bc.firebaseapp.com",
  projectId: "react2-317bc",
  storageBucket: "react2-317bc.appspot.com",
  messagingSenderId: "447549068250",
  appId: "1:447549068250:web:9019b9b5d4ce61fa44e6e3"
};


initializeApp(firebaseConfig);

  return (

    <BrowserRouter>
      <MyProvider>
        <BsNavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  )
}

export default App;

