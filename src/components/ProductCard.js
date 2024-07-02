import React, { useState } from 'react';
import { addToCart } from './utils/cart';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, img, title, newPrice } = product;
    const [quantity, setQuantity] = useState(1); // State for quantity

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Add product to cart with quantity
        alert('Item added to cart!');
        setQuantity(1); // Reset quantity after adding to cart
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        addToCart({ ...product, newQuantity });
        setQuantity(newQuantity);

    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img} alt={title} />
            </div>
            <div className="product-details">
                <h3>{title}</h3>
                <div className="product-price">
                    <span className="new-price">${newPrice}</span>
                </div>
                <div className="quantity-control">
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
