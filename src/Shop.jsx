import ProductCard1 from "./ProductCard1";
function Shop() {

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
      <div>
        <section className="ml-10 mr-[700px] p-10 bg-slate-50">
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
        <section>
          
        </section>
      </div>
        
    );
}

export default Shop;