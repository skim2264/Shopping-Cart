import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = (props) => {
    const {toggleCart} = props;
    return (
        <div className="navbarDiv">
            <NavLink to="/shop"><button id="shopButton" className="navButton">Shop</button></NavLink>
            <button onClick={toggleCart} id="cartButton" className="navButton"><FontAwesomeIcon icon={icon({name:"cart-shopping"})} /></button>
        </div>
    )
};

export default Navbar;