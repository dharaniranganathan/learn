import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import  './Navbar.css';
import CartNotification from './CartNotification';

const Navbar = ({ cartItemCount }) => {
    const location = useLocation();

    // Render Navbar only on the home page
    /*if (location.pathname !== '/') {
        return null;
    }*/
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">
                    Cart
                    {cartItemCount > 0 && <CartNotification cartItemCount={cartItemCount} />}
                </Link></li>
                {/*<li><Link to="/profile">Profile</Link></li>*/}
                <li><Link to="/">logout</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
