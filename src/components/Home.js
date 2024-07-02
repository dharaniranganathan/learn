import React from 'react';
import ProductCarousel from './ProductCarousel';
import Navbar from './Navbar';
import  '../styles/Home.css';
import Layout from './Layout';
import data from '../database/data'; // Assuming your product data is stored in 'data.js'

const Home = () => {
    return (
        <div className="layout">
            <header className="header">
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <main className="container">
                <div className="product-carousel">
                    <ProductCarousel products={data.slice(0, 5)} /> {/* Displaying first 5 products */}
                </div>
            </main>
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
