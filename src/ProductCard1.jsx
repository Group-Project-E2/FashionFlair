import React from "react";

function ProductCard1(props) {
  console.log(props);
  return (
    <div className="flex flex-col items-center p-4 gap-4 max-w-md mx-auto md:max-w-3xl lg:max-w-5xl bg-white rounded-sm">
  {/* Image Section */}
  <div className="w-full rounded-md bg-[#f4f8f9] overflow-hidden">
    <img
      src={props.image}
      alt={props.name || "Product image"}
      className="w-full h-auto aspect-[4/3] md:aspect-[16/9] object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="flex flex-col items-stretch w-full text-center mt-4">
  {/* First Row: Product Name */}
  <h2 className="text-lg md:text-xl font-semibold text-left">{props.name}</h2>

  {/* Second Row: Price and Button */}
  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
    <p className="text-md md:text-lg text-gray-600">Rs.{props.price}</p>
    <button
      type="button"
      className="border-2 border-[#5C8374] px-4 py-2 text-sm md:text-lg rounded-lg font-medium hover:bg-black hover:text-white transition"
    >
      Add To Cart
    </button>
  </div>
</div>

</div>



    // <div className="h-[600px] relative">
    //   <div className={`h-[600px] rounded-xl bg-[#f4f8f9] relative`}>
    //     <img src={props.image} alt="" className="w-full h-full object-cover" />
    //   </div>
    //   <h2 className="text-xl font-semibold">{props.name}</h2>
    //   <p className="text-lg">{props.price}</p>
    //   <div className="mt-[-50px]">
    //     <button
    //       type="button"
    //       className="border-2 border-[#5C8374] px-4 py-1 text-lg rounded-lg mt-0 ml-[220px] font-medium hover:bg-black hover:text-white transition"
    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>
  );
}

export default ProductCard1;
