import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateCartItem, removeFromCart, loading, error } = useCart();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => {
            // Get stock count for the selected size
            const selectedSizeData = item.product.sizes.find((s) => s.size === item.size);
            const stockCount = selectedSizeData ? selectedSizeData.stock_count : 0;

            return(
              <li key={item.product.product_id + item.size} className="flex items-center border p-2">
              <img
                src={item.product.product_main_image}
                alt={item.product.product_name}
                className="w-16 h-16 object-cover mr-4"
              />

              <div className="flex-1">
                <h2 className="font-semibold">{item.product.product_name}</h2>
                {/* <p>Size: {item.size || 'N/A'}</p> */}
                 <p>Size: {item.size ? item.size : 'N/A'}</p> {/* if item.size exists → Show the actual size. */}
                <div className="flex items-center mt-2">
                  <label htmlFor={`quantity-${item.product.product_id}-${item.size}`} className="mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${item.product.product_id}-${item.size}`}
                    value={item.quantity}
                    // onChange={(e) => updateCartItem(item, parseInt(e.target.value))}
                    // min="1"
                    // className="border p-1 w-16"
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      if (newQuantity > stockCount) {
                        alert(`Cannot add more than ${stockCount} items.`);
                        return;
                      }
                      updateCartItem(item, newQuantity);
                    }}
                    min="1"
                    max={stockCount} // Restrict max input value
                    className="border p-1 w-16"
                  
                  />
                  <button
                    onClick={() => removeFromCart(item)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
                <p>Price: ${item.product.price}</p>
                <p>Subtotal: ${item.product.price * item.quantity}</p>
              </div>
            </li>
             ); 
            })}
        </ul>
      )}
      {cartItems.length > 0 && (
          <div className = "mt-4">
            <h3 className = "text-lg font-semibold">Grand Total: ${cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0)}</h3>
            <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => navigate("/billingdetails")}
            >Proceed to Checkout</button>
          </div>
      )}
    </div>
  );
};

export default CartPage;

