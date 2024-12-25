import React from 'react';

const ProductDetails= () => {
  return (
    <div className="flex flex-wrap bg-platinum p-6">
      {/* Image Gallery */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center mb-4">
          <img
            src="/path-to-main-image.jpg"
            alt="Pink Chiffon Flared Dress"
            className="h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center space-x-2">
          <img
            src="/path-to-thumbnail1.jpg"
            alt="Thumbnail 1"
            className="h-24 w-24 object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-pink-500"
          />
          <img
            src="/path-to-thumbnail2.jpg"
            alt="Thumbnail 2"
            className="h-24 w-24 object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-pink-500"
          />
          <img
            src="/path-to-thumbnail3.jpg"
            alt="Thumbnail 3"
            className="h-24 w-24 object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-pink-500"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-semibold text-gray-800">Pink Chiffon Flared Dress</h1>
        <p className="text-xl text-pink-500 mt-2">$8.99 - $14.39</p>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
        </p>
        <div className="flex items-center mt-4">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-gray-500 text-sm ml-2">(10 Customer reviews)</span>
        </div>

        {/* Color Options */}
        <div className="mt-6">
          <p className="font-medium text-gray-700">Color:</p>
          <div className="flex space-x-2 mt-2">
            <button className="w-8 h-8 bg-pink-300 rounded-full border-2 border-pink-500"></button>
          </div>
        </div>

        {/* Size Options */}
        <div className="mt-6">
          <p className="font-medium text-gray-700">Size:</p>
          <div className="flex space-x-2 mt-2">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded-md text-gray-700 border-gray-300 hover:bg-pink-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="flex items-center mt-6 space-x-4">
          <div className="flex items-center border rounded-md">
            <button className="px-4 py-2 text-gray-700 border-r">-</button>
            <span className="px-4 py-2">1</span>
            <button className="px-4 py-2 text-gray-700 border-l">+</button>
          </div>
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
