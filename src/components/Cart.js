import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
//import {  removeFromCart } from './utils/cart';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from localStorage on component mount
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return (
        <div className="layout">
            <header className="header">
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <main className="container">
                <div className="cart-container">
                    <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div className="cart-item-image">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h3>{item.title}</h3>
                                        <p>Price: ${item.newPrice}</p>
                                        <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                            {/*<AiFillDelete />*/}
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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

export default Cart;
