import React from "react";

const Cart = ({ cartItems, removeItemFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="cart-empty-message">Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            {item.name} - €{item.price} x {item.quantity}
                            <button
                                className="remove-from-cart-button"
                                onClick={() => removeItemFromCart(item)}
                            >
                                Remove One
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
