import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import  './Products.css';
import  '../styles/Home.css';

const Products = () => {
    return (
        <div>
            <Navbar /> {/* Render Navbar component */}
            <h2>Products Page</h2>
            <ProductList /> {/* Example of rendering product list */}
        </div>
    );
};

export default Products;
