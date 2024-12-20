import { useState } from "react";
import VouchersCard from "./VouchersCard";
function Vouchers() {
   
    const vouchers = [
        {
          categoryId: "1",
          image: "/assets/Gift.png",
          id: "F1",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "2",
          image: "/assets/Gift.png",
          id: "F2",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "3",
          image: "/assets/Gift.png",
          id: "F3",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Gift.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Gift.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
        {
          categoryId: "4",
          image: "/assets/Gift.png",
          id: "F4",
          name: "White Bridal Grown",
          price: "$59.00",
        },
      ];
      
    return(
      <div className="flex p-10 space-x-[20px] bg-white">
        <section className="w-[5000px] p-10 bg-white">
           <div className="grid grid-cols-3 gap-[10px]">
        {vouchers.map((el) => {
          return (
            <VouchersCard
              key={el.id}
              image={el.image}
              name={el.name}
              price={el.price}
            />
          );
        })}
      </div>
        </section>
        <section>
        
      </section>
      </div>
        
    );
}

export default Vouchers;