import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard1 from "./ProductCard1";
import { useNavigate } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  const [offers, setOffers] = useState([]); // State for products with offers
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products/");
        const allProducts = response.data;

        setProducts(allProducts);
        setFilteredProducts(allProducts); // Initialize filteredProducts with all products

        // Filter products with offers
        const productsWithOffers = allProducts.filter((product) => product.is_on_offer);
        setOffers(productsWithOffers);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Handle category selection
  const handleCategoryClick = (categoryValue) => {
    setSelectedCategory(categoryValue); // Update selected category
    if (categoryValue) {
      const filtered = products.filter((product) => product.category_id.toString() === categoryValue);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if "All" is selected
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-10 space-y-6 lg:space-y-0 lg:space-x-6 bg-platinum">
      {/* Product Section */}
      <section className="flex-1 p-6 lg:p-10 bg-platinum">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
          {filteredProducts.map((el) => (
            <ProductCard1
             key={el.product_id} 
             id={el.product_id}
             image={el.product_main_image} 
             name={el.product_name} 
             price={el.price} />
          ))}
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="flex-1 p-6 lg:p-10 bg-white shadow-md order-first lg:order-last sm:order-first rounded-md">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Women's Wear", value: "2" },
            { label: "Men's Wear", value: "1" },
            { label: "Kid's Wear", value: "3" },
            { label: "Sport Wear", value: "4" },
            { label: "Foot Wear", value: "5" },
            { label: "All", value: "" },
          ].map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.value)}
              className={`px-4 py-2 border-2 border-[#5C8374] rounded shadow hover:bg-black hover:text-white transition ${
                selectedCategory === category.value ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Offers Section */}
        <div className="mt-10">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
            {offers.map((product, index) => (
              <img
                key={index}
                src={product.product_main_image}
                alt={`Offer Image ${index + 1}`}
                className="w-[200px] h-[200px] object-cover rounded cursor-pointer"
                // onClick={() => setSelectedImage(product.product_main_image)}
                onClick={() => navigate(`/products/${product.product_id}`)} // Navigate to product page
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop;

