import React from "react";

import { useNavigate, useParams } from "react-router-dom";
const OrderComplete = () => {
  
  const { orderId } = useParams(); // Get orderId from URL
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#183d3d] text-white p-6">
      {/* Card Container */}
      <div className="bg-white text-[#183d3d] rounded-lg shadow-lg p-8 max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m9 3a9 9 0 11-9-9 9 9 0 019 9z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-4">Your order has been placed successfully.</p>

        {/* Order Summary (You can customize with actual order details) */}
        <div className="bg-gray-100 p-4 rounded-md text-gray-800 mb-4">
          <p className="font-semibold">Order Number:</p>
          <p className="text-sm">#{orderId}</p>
        </div>

        {/* Back to Shop Button */}
        <button
          onClick={() => navigate("/Shop")}
          className="bg-[#183d3d] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#126060] transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderComplete;
