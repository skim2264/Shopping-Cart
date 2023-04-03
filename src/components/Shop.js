import React, { useEffect, useState } from "react";
import Product from "./Product";

const Shop = (props) => {

    const {addToCart} = props;

    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState({});
    const [cartUpdate, setCartUpdate] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if(cartUpdate) {
            console.log(cartProduct);
            addToCart(cartProduct);
            setCartUpdate(false);
        }
    },[cartProduct]);

    const fetchProducts = async () => {
        const data = await fetch(
            'https://api.spoonacular.com/food/ingredients/search?query=fruit&apiKey=a132079e1332476c9d13082e4bcd04df'
        );
        const items = await data.json();

        setProducts(items.results);        
    }

    const prodSubmit = (e)  => {
        e.preventDefault();
        const form = e.target;
        const input = form.elements[1].value;
        const prodName = form.elements[0].value;
        const index = products.findIndex((item) => item.name === prodName);
        const product = products[index];

        setCartProduct({...product, num: input});
        setCartUpdate(true);
    }

    return(
        <div className="shopDiv">
            <h1>Shop</h1>
            <div className="productCards">
                {products.map(prod => (
                    <Product name={prod.name} imgSrc={prod.image} submitHandler={prodSubmit} key={prod.id}/>
                ))}
            </div>
        </div>
    )

};

export default Shop;