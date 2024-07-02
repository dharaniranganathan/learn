import React, { useState, useEffect } from 'react';
import './Cart.css';

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

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.newPrice * item.quantity);
        }, 0).toFixed(2);
    };

    return (
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
                                <div className="quantity-control">
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Total: ${calculateTotal()}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
