import React from 'react';
import ProductCarousel from './ProductCarousel';
import Navbar from './Navbar';
import  '../styles/Home.css';
import Layout from './Layout';
import data from '../database/data'; // Assuming your product data is stored in 'data.js'

const Home = () => {
    return (

                <div className="product-carousel">
                    <ProductCarousel products={data.slice(0, 5)} /> {/* Displaying first 5 products */}
                </div>

    );
};

export default Home;
