import React, { useState } from 'react';
import Navbar from './Navbar';
import './Profile.css'; // Import your CSS file for styling


const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        // Other user details
    });

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: 'Home',
            address: '123 Street, City, Country',
        },
        // Other addresses
    ]);

    const [paymentMethods, setPaymentMethods] = useState([
        {
            id: 1,
            type: 'Credit Card',
            lastFourDigits: '1234',
            // Other payment details
        },
        // Other payment methods
    ]);

    return (
        <div className="layout">
            <header className="header">
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <main className="container">

                    <h2>My Profile</h2>
                    <div className="profile-info">
                        <h3>Profile Information</h3>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        {/* Other user details */}
                    </div>

                    <div className="orders-history">
                        <h3>Orders History</h3>
                        {/* Display order history */}
                    </div>

                    <div className="addresses">
                        <h3>My Addresses</h3>
                        <ul>
                            {addresses.map((address) => (
                                <li key={address.id}>
                                    <p>{address.name}</p>
                                    <p>{address.address}</p>
                                    {/* Edit and Delete buttons */}
                                </li>
                            ))}
                        </ul>
                        {/* Add new address form */}
                    </div>

                    <div className="payment-methods">
                        <h3>Payment Methods</h3>
                        <ul>
                            {paymentMethods.map((method) => (
                                <li key={method.id}>
                                    <p>{method.type}</p>
                                    <p>Last 4 Digits: {method.lastFourDigits}</p>
                                    {/* Edit and Delete buttons */}
                                </li>
                            ))}
                        </ul>
                        {/* Add new payment method form */}
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

export default Profile;
