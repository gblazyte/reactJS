import React from "react";

const ProductItem = ({ product, addItemToCart }) => {
    return (
        <div className="product-item">
            <h3>{product.name}</h3>
            <p>Price: €{product.price}</p>
            <button className="add-to-cart-button" onClick={() => addItemToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
