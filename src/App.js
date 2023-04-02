import { React, useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import RouteSwitch from "./RouteSwitch";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Grocery Store</h1>
        <Navbar></Navbar>
      </div>
      <RouteSwitch />
    </div>
  );
}

export default App;
