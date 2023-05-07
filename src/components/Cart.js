import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {showCart, cart, setCart, toggleCart} = props;

    const deleteCartItem = (e) => {
        const itemId = e.target.parentElement.parentElement.children[2].children[0].id;
        
        if(cart.length===1) {
            setCart([]);
        } else {
            const filtered = cart.filter((item) => parseInt(item.id) !== parseInt(itemId));
            setCart(filtered)
        }
    }

    const clearCart = () => {
        alert("Thank you for ordering! Please shop with us again");
        setCart([]);
    }


    if (showCart) return (
        <div className="cartDiv" data-testid="cart-div">
            <div className="cartHeader">
                <h2>Shopping Cart</h2>
                <button className="exitCartButton" onClick={toggleCart}>X</button>
            </div>
            <div className="productsInCart">
                {(cart.length === 0) 
                    ? <div>Cart is empty.</div>
                    : cart.map((item) => {
                    return <CartItem item={item} deleteCartItem={deleteCartItem} key={item.id}></CartItem>
                })}
            </div>
            <button onClick={clearCart} className="checkoutButton">Checkout and Pay</button>
        </div>
    )
};

export default Cart;