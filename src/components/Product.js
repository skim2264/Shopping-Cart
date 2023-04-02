import React, { useState } from "react";

const Product = (props) => {
    const {name, imgSrc, submitHandler} = props;

    const [quantity, setQuantity] = useState(0);

    const onChangeHandler = (e) => {
        const value = parseInt(e.target.value);

        setQuantity(value);
    }

    const increment = () => {
        setQuantity(quantity+1);
    }

    const decrement = () => {
        if(quantity > 0) {
            setQuantity(quantity-1);
        }
    }

    return(
        <div className="productCardDiv">
            <h3>{name}</h3>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${imgSrc}`} alt={name}></img>
            <form onSubmit={submitHandler}>
                <input type="number" name="numofproduct" id="numofproduct" placeholder="# of items" value={quantity} onChange={onChangeHandler}></input>
                <button onClick={increment} id="incButton" name="incButton">+</button>
                <button onClick={decrement} id="decButton" name="decButton">-</button>
                <button type="submit">Add to Cart</button>
            </form>
        </div>
    )
};

export default Product;