import React from "react";

const Product = (props) => {
    const {name, imgSrc, submitHandler, increment, decrement} = props;
    return(
        <div className="productCardDiv">
            <h3>{name}</h3>
            <img src={imgSrc} alt={name}></img>
            <form onSubmit={submitHandler}>
                <input name="numofproduct" placeholder="# of items"></input>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
};

export default Product;