import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItemIndex > -1) {
                // If the product is already in the cart, increase its quantity
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingItemIndex].quantity += 1;
                return updatedCartItems;
            } else {
                // If the product is not in the cart, add it with quantity 1
                return [...prevCartItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItemFromCart = (item) => {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex(
                (cartItem) => cartItem.id === item.id
            );

            if (existingItemIndex > -1) {
                const updatedCartItems = [...prevCartItems];
                const existingItem = updatedCartItems[existingItemIndex];

                // If the item quantity is greater than 1, just decrease the quantity
                if (existingItem.quantity > 1) {
                    updatedCartItems[existingItemIndex].quantity -= 1;
                } else {
                    // If quantity is 1, remove the item completely
                    updatedCartItems.splice(existingItemIndex, 1);
                }

                return updatedCartItems;
            }

            return prevCartItems;
        });
    };

    return (
        <div className="container">
            <h1 className="title">Shopping Cart System</h1>
            <ProductList addItemToCart={addItemToCart} />
            <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />
        </div>
    );
};

export default ShoppingCart;
