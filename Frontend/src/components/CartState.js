import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartState = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const updateCartItem = (itemId, updatedItem) => {
    // Find the item by itemId in the cartItems array
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        // Update the item's properties
        return {
          ...item,
          ...updatedItem,
        };
      }
      return item;
    });

    // Update the cart state with the updated cart items
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart, // Add removeFromCart function to the context
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartState };
