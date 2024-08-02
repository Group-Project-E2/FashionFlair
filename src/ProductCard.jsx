import React from "react";

function ProductCard(props) {
  console.log(props);
  return (
    <div className="h-[600px] relative">
      <div className={`h-[600px] rounded-xl bg-[#f4f8f9] relative`}>
        <img src={props.image} alt="" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-xl font-semibold">{props.name}</h2>
      <p className="text-lg">{props.price}</p>
      <div className="mt-[0]">
        <button
          type="button"
          className="border-2 border-[#5C8374] px-4 py-1 text-lg rounded-lg mt-0 ml-[220px] font-medium hover:bg-black hover:text-white transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
