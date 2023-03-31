import React from "react";

const Cart = () => {
    return (
    <div className="cartDiv">
        <h2>Shopping Cart</h2>
        <div className="productsInCart">
            Nothing in cart if no products exist in state.
        </div>
        <button>Checkout and Pay</button>
    </div>
    )
};

export default Cart;