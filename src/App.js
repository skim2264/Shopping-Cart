import React, { useState } from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  
  const toggleCart = () => [
    setShowCart(!showCart)
  ]

  const addToCart = (newCartProd) => {
    const prodName = newCartProd.name;
    //return false if item is already in cart
    if(cart.length !== 0) {
      for (let i=0; i < cart.length; i++) {
        if (cart[i].name === prodName) {
          alert("this product is already in the cart");
          return false;
        }
      }
    }
    
    setCart([...cart, newCartProd])
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="Header">
          <h1>Earth's Pantry Grocery</h1>
          <Navbar toggleCart={toggleCart}></Navbar>
        </div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
            </Routes>
            <Cart showCart={showCart} cart={cart} setCart={setCart}></Cart>
      </BrowserRouter>
    </div>
  );
}

export default App;
