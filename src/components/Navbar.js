import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = (props) => {
    const {toggleCart, cart} = props;
    return (
        <div className="navbarDiv">
            <NavLink to="/shop"><button id="shopButton" className="navButton">Shop</button></NavLink>
            <button onClick={toggleCart} id="cartButton" className="navButton shopButton">
                <FontAwesomeIcon icon={icon({name:"cart-shopping"})} />
                <p>{cart.length}</p>
            </button>
        </div>
    )
};

export default Navbar;