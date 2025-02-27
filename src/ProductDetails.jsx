import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import StarDisplay from "./StarDisplay";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${product_id}/`)
      .then((response) => {
        setProduct(response.data);

        // Set the main product image as the first image
        const images = response.data.photos || [];
        if (response.data.product_main_image) {
          setMainImage(response.data.product_main_image);
          setRelatedImages([response.data.product_main_image, ...images]); // Include main image in list
        } else {
          setRelatedImages(images);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [product_id]);

  // Function to change image manually
  const changeImage = (src, index) => {
    setMainImage(src);
    setCurrentImageIndex(index);
  };

  // Function to navigate images
  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % relatedImages.length;
    setMainImage(relatedImages[nextIndex]?.photo || relatedImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + relatedImages.length) % relatedImages.length;
    setMainImage(relatedImages[prevIndex]?.photo || relatedImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 relative">
            <div className="relative">
              <img
                alt="Product"
                className="w-full h-[350px] md:h-[400px] object-contain rounded-lg shadow-md mb-4"
                src={mainImage}
              />
              {/* Navigation Arrows */}
              {relatedImages.length > 1 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={handlePrevImage}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    onClick={handleNextImage}
                  >
                    <FaArrowRight />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnail Images */}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {relatedImages.length > 0 ? (
                relatedImages.map((img, index) => (
                  <img
                    key={index}
                    alt={`Thumbnail ${index + 1}`}
                    className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300 ${
                      index === currentImageIndex ? "border-2 border-indigo-500 opacity-100" : ""
                    }`}
                    onClick={() =>
                      changeImage(img.photo || img, index)
                    }
                    src={img.photo || img}
                  />
                ))
              ) : (
                <p className="text-gray-500">No additional images available</p>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.product_name}</h2>
            <p className="text-gray-600 mb-4">SKU Number {product.product_id}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
              <span className="text-gray-500 line-through">$399.99</span>
              <div className="flex items-center mb-4">
                <strong>Rating:</strong>{" "}
                {<StarDisplay starCount={product.star_count} />}
                <span className="ml-2 text-gray-600">
                  {product.star_count} ({product.customer_review_count} reviews)
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                {product.product_description}
              </p>

              {/* Add to Cart and Wishlist Buttons */}
              <div className="flex space-x-4 mb-6">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
                  Wishlist
                </button>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Industry-leading noise cancellation</li>
                  <li>30-hour battery life</li>
                  <li>Touch sensor controls</li>
                  <li>Speak-to-chat technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
