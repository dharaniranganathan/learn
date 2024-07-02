// utils/cart.js

let cart = [];

export const addToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCartItems = [...existingCartItems, product];
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
};

export const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
};

export const getCart = () => cart;

export const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.newPrice * item.quantity), 0);
};
export const getCartItems = () => {
    // Logic to retrieve cart items from local storage or state
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems;
};