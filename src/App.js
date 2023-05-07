import React, { useState } from "react";
import './styles/App.css';
import './styles/Cart.css';
import './styles/buttons.css';
import './styles/Home.css';
import './styles/Shop.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { NavLink } from "react-router-dom";

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
    <div className="App" id="appDiv">
      <BrowserRouter>
        <div className="Header">
          <NavLink to="/Shopping-Cart" className="headingText"><h1>Earth's Pantry Grocery</h1></NavLink>
          <Navbar toggleCart={toggleCart} cart={cart}></Navbar>
        </div>
            <Routes>
                <Route path="/Shopping-Cart" element={<Home />}/>
                <Route path="/Shopping-Cart/shop" element={<Shop addToCart={addToCart}/>}/>
            </Routes>
            <Cart showCart={showCart} cart={cart} setCart={setCart} toggleCart={toggleCart}></Cart>
      </BrowserRouter>
    </div>
  );
}

export default App;
