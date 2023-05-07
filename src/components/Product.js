import React, { useState } from "react";

const Product = (props) => {
    const {name, imgSrc, submitHandler} = props;

    const [quantity, setQuantity] = useState(0);

    const resetQuantity = () => {
        setQuantity(0);
    }
    
    props.passFunc(resetQuantity);

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
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${imgSrc}`} alt={name} className="prodImg"></img>
            <form className="formDiv" onSubmit={submitHandler}>
                <input type="hidden" value={name} className="prodClass"></input>
                <div className="quantityInputDiv">
                    <input type="number" name="numofproduct" className="numofproduct" placeholder="# of items" value={quantity} onChange={onChangeHandler}></input>
                    <button onClick={increment} className="incButton" name="incButton" type="button">+</button>
                    <button onClick={decrement} className="decButton" name="decButton" type="button">-</button>
                </div>
                <button type="submit" className="addToCartButton">Add to Cart</button>
            </form>
        </div>
    )
};

export default Product;