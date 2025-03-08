import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set login state based on token

    const fetchCart = async () => {
      setLoading(true);
      setError(null);
      try {
        if (isLoggedIn) {
          // Fetch cart for logged-in user (if needed)
          // You might need to add an endpoint to get the full cart.
          // For now, we'll rely on updates from add/remove
          const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
          if(localCart.length>0){
            syncCart(localCart);
          }
        } else {
          // Load cart from local storage
          const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
          setCartItems(localCart);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isLoggedIn]);

  const syncCart = async (localCart) => {
    //iterate through local storage items, and add to cart via api.
    for(let item of localCart){
      try{
        const response = await fetch(`/cart/add/${item.product.product_id}/?size=${item.size}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), // Add CSRF token
          },
          body: JSON.stringify({ quantity: item.quantity }),
        });
        if (!response.ok) {
          throw new Error('Failed to sync cart');
        }
      }catch(err){
        setError(err);
      }
    }
    localStorage.removeItem('cart');
    window.location.reload();
  }

  const addToCart = async (product, quantity, size) => {
    try {
      const selectedSizeData = product.sizes.find((s) => s.size === size);
      if (!selectedSizeData) {
        throw new Error("Selected size not available.");
      }
      const stockCount = selectedSizeData.stock_count;
      if (isLoggedIn) {

        const existingCartItem = cartItems.find(
          (item) => item.product.product_id === product.product_id && item.size === size
        );
  
        const currentQuantity = existingCartItem ? existingCartItem.quantity : 0;
        if (currentQuantity + quantity > stockCount) {
          alert(`Cannot add more than ${stockCount} items to the cart.`);
          return;
        }
        const response = await fetch(`/cart/add/${product.product_id}/?size=${size}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'), // CSRF token add later
          },
          body: JSON.stringify({ quantity }),
        });
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        setCartItems([...cartItems, { product, quantity, size }]);
        alert(`${product.product_name}} has been added to your cart!`);
      } else {
        // Handle anonymous cart using local storage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = localCart.findIndex(
          (item) => item.product.product_id === product.product_id && item.size === size
          
        );
        const currentQuantity = existingItemIndex !== -1 ? localCart[existingItemIndex].quantity : 0;
        if (currentQuantity + quantity > stockCount) {
         ;
          alert(`You cannot add that amount to the cart — we have ${stockCount} in stock and you already have ${currentQuantity} in your cart.`)
          return;
        }

        if (existingItemIndex !== -1) {
          localCart[existingItemIndex].quantity += quantity; // If the product with the same size exists, update quantity
        } else {
          localCart.push({ product, quantity, size }); // If not, add as a new entry
        }
        localStorage.setItem('cart', JSON.stringify(localCart));
        setCartItems(localCart);
        alert(`${product.product_name} has been added to your cart!`);
      }
    } catch (err) {
      setError(err);
    }
  };

  const updateCartItem = async (item, quantity) => {
    try {
      if (isLoggedIn) {
        const response = await fetch(`/cart/update/${item.id}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
          body: JSON.stringify({ quantity }),
        });
        if (!response.ok) {
          throw new Error('Failed to update cart item');
        }
        // Update cart state
        const updatedCart = cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
        );
        setCartItems(updatedCart);

      } else {
        // Update anonymous cart in local storage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.map((cartItem) =>
          cartItem.product.product_id === item.product.product_id && cartItem.size === item.size ? { ...cartItem, quantity } : cartItem
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      }
    } catch (err) {
      setError(err);
    }
  };

  const removeFromCart = async (item) => {
    try {
      if (isLoggedIn) {
        const response = await fetch(`/cart/remove/${item.id}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken'),
          },
        });
        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }
        // Update cart state
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
      } else {
        // Remove from anonymous cart in local storage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = localCart.filter((cartItem) =>
          !(cartItem.product.product_id === item.product.product_id && cartItem.size === item.size)
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      }
    } catch (err) {
      setError(err);
    }
  };

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const value = {
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    loading,
    error,
    isLoggedIn,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);