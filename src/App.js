import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Profile from './components/Profile';
import ProductList from './components/ProductList';


const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                {/* Logo */}
                {/*<div style={{ marginBottom: '20px' }}>
                    <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Shopping App</span>
                </div>*/}

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products" element={<ProductList />} />
                </Routes>
            </div>

        </Router>
    );
};

export default App;
