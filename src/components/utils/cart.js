// Function to get cart items from local storage
export const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems;
};

// Function to add item to cart
export const addToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Function to remove item from cart
export const removeFromCart = (itemId) => {
    let cartItems = getCartItems();
    cartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Function to clear cart
export const clearCart = () => {
    localStorage.removeItem('cartItems');
};
