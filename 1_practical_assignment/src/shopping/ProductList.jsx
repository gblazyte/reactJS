import React from "react";
import ProductItem from "./ProductItem";

const products = [
    { id: 1, name: "Book1", price: 20 },
    { id: 2, name: "Book2", price: 10 },
    { id: 3, name: "Book3", price: 25 },
];

const ProductList = ({ addItemToCart }) => {
    return (
        <div className="product-list">
            <h2>Product List</h2>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    addItemToCart={addItemToCart}
                />
            ))}
        </div>
    );
};

export default ProductList;
