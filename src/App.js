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
    const cartItemCount = 3;
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
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
                            <Route path="/" element={<Signup />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/products" element={<ProductList />} />
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
