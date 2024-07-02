import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/">logout</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
