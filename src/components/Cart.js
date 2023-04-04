import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const {showCart, cart, setCart} = props;

    const deleteCartItem = (e) => {
        const itemId = e.target.parentElement.children[2].id;
        
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
        <div className="cartDiv">
            <h2>Shopping Cart</h2>
            <div className="productsInCart">
                {(cart.length === 0) 
                    ? <div>Nothing in cart if no products exist in state.</div>
                    : cart.map((item) => {
                    return <CartItem item={item} deleteCartItem={deleteCartItem} key={item.id}></CartItem>
                })}
            </div>
            <button onClick={clearCart}>Checkout and Pay</button>
        </div>
    )
};

export default Cart;