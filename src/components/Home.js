import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="homeDiv">
            <h2>Welcome to Earth's Pantry Grocery</h2>
            <p>We are the #1 online grocery store to get your premium organic goods.</p>
            <NavLink to="/shop"><button className="button">Shop Now</button></NavLink>
        </div>
    )
};

export default Home;