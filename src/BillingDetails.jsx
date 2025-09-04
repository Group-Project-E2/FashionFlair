import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BillingDetails = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost] = useState(300);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Billing Form State
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    street_address: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
  });

  // Load Cart Data from LocalStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    const total = storedCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Checkout
  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

  

    try {
      //  Send Billing Details & Cart Data to Backend
      const response = await axios.post("http://localhost:8000/payment/checkout/", {
        billing_details: formData,
        cart_items: cart.map((item) => ({
          product_id: item.product.product_id,
          quantity: item.quantity,
          size: item.size || null,
        })),
      });

      console.log("Checkout Response:", response.data);

      const orderDetails = {
        orderNumber: response.data.order_number,
        orderId: response.data.order_id, 
        total: totalPrice + shippingCost,
      };
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));


      console.log("Order number before navigation:", response.data.order_number);
      navigate("/checkout", { state: { orderDetails } });

    
    } catch (error) {
      console.error("Checkout error:", error.response ? error.response.data : error);
      setError("Checkout failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
        <form onSubmit={handleCheckout} className="space-y-4">
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.replace("_", " ")}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.product.product_id} className="flex justify-between">
              <span>{item.product.product_name} × {item.quantity}</span>
              <span>Rs. {item.product.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between font-semibold">
            <span>Shipping Cost</span>
            <span>Rs. {shippingCost}</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span>Rs. {totalPrice + shippingCost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
