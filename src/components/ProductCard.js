import React from 'react';
import { addToCart } from './utils/cart';
import  './ProductCard.css';
//import { AiFillStar } from 'react-icons/ai'; // Assuming you are using React Icons for stars

const ProductCard = ({ product }) => {
    const { id, img, title, newPrice, company, color, category } = product;

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart
        alert('Item added to cart!');
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="product-details">
                <h3>{product.title}</h3>
                <div className="product-rating">
                    {/*{product.star} /!* Assuming 'star' is the star rating icon *!/*/}
                    <span>{product.reviews}</span>
                </div>
                <div className="product-price">
                    <span className="prev-price">{product.prevPrice}</span>
                    <span className="new-price">{product.newPrice}</span>
                </div>
                <div className="product-actions">
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
