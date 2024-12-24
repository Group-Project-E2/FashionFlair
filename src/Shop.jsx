import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard1 from "./ProductCard1";

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/products/');
      
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const entries = urlParams.entries();
      let isCategoryAvailable = false;
      const categoryType = urlParams.get('type');
      console.log(categoryType);

      
        if (categoryType){
          isCategoryAvailable = true;
          setProducts(response.data.filter(product => product.categoryId.toString() === categoryType));
        }
        
      
      if (isCategoryAvailable === false){
        setProducts(response.data);
      }

    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-10 space-y-6 lg:space-y-0 lg:space-x-6 bg-platinum">
      {/* Product Section */}
      <section className="flex-1 p-6 lg:p-10 bg-platinum">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
          {
          products.map((el) => (
            <ProductCard1
              key={el.id}
              image={el.productImage}
              name={el.productName}
              price={el.price}
            />
          ))}
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="flex-1 p-6 lg:p-10 bg-white shadow-md order-first lg:order-last sm:order-first rounded-md">
        <h2 className="text-xl lg:text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Below object array must have the display name as 'label' and DB Category name as 'value' */}
          {[{label:"Women's Wear", value: "2"}, {label:"Men's Wear", value:"1"}, {label:"Kid's Wear", value:"kidsware"}, {label:"Sport Wear", value:"sportsware"}, {label:"Foot Wear", value:"footware"}, {label:"All", value:""}].map(
            (category, index) => (
              <button
                key={index} onClick={(e) => {
                  e.preventDefault(); // Prevent default action
                  category.value !== ""?window.location.href = `/Shop?type=${category.value}`:window.location.href = '/Shop'; // Set location
                }}
                className="px-4 py-2 border-2 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition"
              >
                {category.label}
              </button>
            )
          )}
        </div>

        {/* Gallery Section */}
        <div className="mt-10">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
            {[
              "/assets/Sh1.png",
              "/assets/Sh2.png",
              "/assets/Sh3.png",
              "/assets/Sh4.png",
              "/assets/Sh5.png",
              "/assets/Sh6.png",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-32 sm:h-48 object-cover rounded cursor-pointer"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}

export default Shop;
