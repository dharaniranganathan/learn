import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import { getCartItems, addToCart, removeFromCart } from './components/utils/cart';
import Navbar from './components/Navbar';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(1); // State for cart item count

    useEffect(() => {
        // Load cart items from localStorage on component mount
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
        setCartItemCount(storedCartItems.length); // Update cart item count
    }, []);

    const updateCartCount = () => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItemCount(storedCartItems.length); // Update cart item count
    };
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                {/* Logo */}
                {/*<div style={{ marginBottom: '20px' }}>
                    <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Shopping App</span>
                </div>*/}
                <div className="layout">
                    <header className="header">
                        <div className="container">
                            <Navbar cartItemCount={cartItemCount} />
                        </div>
                    </header>
                    <main className="container">
                         {/* Routes */}
                        <Routes>
                            <Route path="/home" element={<Home updateCartCount={updateCartCount} />} />
                            <Route path="/products" element={<Products updateCartCount={updateCartCount} />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </main>
                    <footer className="footer">
                        <div className="container">
                            <p>&copy; 2024 Your Company. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </div>

        </Router>
    );
};

export default App;
