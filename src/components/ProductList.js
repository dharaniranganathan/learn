import React from 'react';
import ProductCard from './ProductCard';
import data from '../database/data'; // Assuming your product data is stored in a file named 'data.js'
import './ProductList.css'; // Import your CSS file for ProductList component

const ProductList = () => {
    return (
        <div className="product-list-container">
            <div className="product-list">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
