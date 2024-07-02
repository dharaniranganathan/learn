// CartNotification.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './CartNotification.css'; // Import your CSS file for styling

const CartNotification = ({ cartItemCount }) => {
    return (
        <div className="cart-notification">
            <Link to="/cart" className="cart-icon">
                <i className="fa fa-shopping-cart"></i>
                <span className="cart-count">{cartItemCount} </span>
            </Link>
        </div>
    );
};

export default CartNotification;
