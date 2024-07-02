import React from 'react';
import Navbar from './Navbar';
import './Layout.css'; // Optional: Import CSS for layout styling

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Layout;
