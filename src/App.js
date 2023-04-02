import { React } from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="Header">
          <h1>Grocery Store</h1>
          <Navbar></Navbar>
        </div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/shop" element={<Shop />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
