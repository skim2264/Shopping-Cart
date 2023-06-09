import React, {useState} from "react";

const CartItem = (props) => {
    const {item, deleteCartItem} = props;

    const [quantity, setQuantity] = useState(parseInt(item.num));

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

    return (
        <div className="cartItemDiv">
            <div className="cartItemHeader">
                <h3>{item.name}</h3>
                <button onClick={deleteCartItem} type="button" className="deleteButton" name="deleteButton">&times;</button>
            </div>
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} className="prodImg"></img>
            <div className="quantityInputDiv">
                <input type="hidden" value={item.name} className="prodClass" id={item.id}></input>
                <input type="number" name="numofproduct" className="numofproduct" placeholder="# of items" value={quantity} onChange={onChangeHandler}></input>
                <button onClick={increment} className="incButton" name="incButton" type="button">+</button>
                <button onClick={decrement} className="decButton" name="decButton" type="button">-</button>
            </div>
        </div>
    )
};

export default CartItem;