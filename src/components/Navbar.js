import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const {toggleCart} = props;
    return (
        <div className="navbarDiv">
            <div className="navPages">
                <NavLink to="/"><button>Home Page</button></NavLink>
                <NavLink to="/shop"><button>Shop Page</button></NavLink>
            </div>
            <div className="navCart">
                <button onClick={toggleCart}>Shopping Cart-use icon</button>
            </div>
        </div>
    )
};

export default Navbar;