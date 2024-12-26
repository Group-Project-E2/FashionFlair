import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details
    axios.get(`http://localhost:8000/products/${product_id}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap bg-pink-50 p-6">
      {/* Image Gallery */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center mb-4">
          <img
            src={product.product_main_image || '/placeholder-image.jpg'}
            alt={product.product_name}
            className="h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-semibold text-gray-800">{product.product_name}</h1>

        {/* Display badges for new arrival or offer */}
        <div className="mt-2 flex space-x-2">
          {product.is_new_arrival && (
            <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full">
              New Arrival
            </span>
          )}
          {product.is_on_offer && (
            <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
              On Offer
            </span>
          )}
        </div>

        <p className="text-xl text-pink-500 mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.product_description}</p>

        {/* Stock Availability */}
        <div className="mt-4">
          <span
            className={`text-sm ${
              product.stock_availability ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product.stock_availability ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Quantity and Actions */}
        <div className="flex items-center mt-6 space-x-4">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600">
            Add to Cart
          </button>
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-md shadow-md hover:bg-gray-200">
            Add to Wishlist
          </button>
        </div>

        {/* Buy Now Button */}
        <div className="mt-6">
          <button className="w-full px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
