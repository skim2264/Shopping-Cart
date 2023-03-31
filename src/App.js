import { React, useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Store Name</h1>
        <Navbar></Navbar>
      </div>
      
    </div>
  );
}

export default App;
