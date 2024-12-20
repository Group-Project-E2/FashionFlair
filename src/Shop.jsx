import { useState } from "react";
import ProductCard1 from "./ProductCard1";
function Shop() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const products = [
        {
          categoryId: "1",
          image: "/assets/Sh1.png",
          id: "F1",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "2",
          image: "/assets/Sh2.png",
          id: "F2",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "3",
          image: "/assets/Sh3.png",
          id: "F3",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Sh4.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Sh5.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Sh6.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
      ];
      
    return(
      <div className="flex p-10 space-x-[50px] bg-white">
        <section className="w-[5000px] p-10 bg-white">
           <div className="grid grid-cols-2 gap-[120px]">
        {products.map((el) => {
          return (
            <ProductCard1
              key={el.id}
              image={el.image}
              name={el.name}
              price={el.price}
            />
          );
        })}
      </div>
        </section>
        <section className="w-[2000px] p-10 bg-white shadow-md">
        <h2 className="text-[30px] font-bold mb-4">Categories</h2>
        <div  className="grid grid-cols-3 gap-4">
          <button className="px-4 py-2 border-1 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition">Womean Wear</button>
          <button className="px-4 py-2 border-1 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition">Men's wear</button>
          <button className="px-4 py-2 border-1 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition">Kid's wear</button>
          <button className="px-4 py-2 border-1 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition">Sport wear</button>
          <button className="px-4 py-2 border-1 border-[#5C8374] bg-white text-black rounded shadow hover:bg-black hover:text-white transition">Foot wear</button>
        </div>
        <div className="m-10">
          <h3 className=" text-[30px] font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
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
           className="w-full h-48 object-cover rounded cursor-pointer"
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