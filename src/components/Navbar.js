import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbarDiv">
            <div className="navPages">
                <NavLink to="/"><button>Home Page</button></NavLink>
                <NavLink to="/shop"><button>Shop Page</button></NavLink>
            </div>
            <div className="navCart">
                <button>Shopping Cart-use icon</button>
            </div>
            
        </div>
    )
};

export default Navbar;