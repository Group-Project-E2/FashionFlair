import ProductCard from "./ProductCard";
function NewArrivals() {
  const products = [
    {
      categoryId: "1",
      image: "/assets/frock1.png",
      id: "F1",
      name: "White Bridal Grown",
      price: "$59.00",
    },
    {
      categoryId: "2",
      image: "/assets/frock2.png",
      id: "F2",
      name: "White Bridal Grown",
      price: "$59.00",
    },
    {
      categoryId: "3",
      image: "/assets/frock3.png",
      id: "F3",
      name: "White Bridal Grown",
      price: "$59.00",
    },
    {
      categoryId: "4",
      image: "/assets/frock4.png",
      id: "F4",
      name: "White Bridal Grown",
      price: "$59.00",
    },
  ];
  return (
    <section className="py-8 px-16">
      <h1 className="text-[48px] font-semibold dilsply flex items-center justify-center">
        New Arrivals
      </h1>
      <p1 className="text-[16px] font-semibold dilsply flex items-center justify-center text-[#5C8374] mt-7">
        Discover the freshest styles in our New Arrivals collection. From
        everyday essentials to statement pieces, FashionFlare brings you the
        latest trends to keep your
      </p1>
      <p2 className="text-[16px] font-semibold dilsply flex items-center justify-center text-[#5C8374]">
        look up-to-date. Shop now and find your new favorite outfit!
      </p2>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((el) => {
          return (
            <ProductCard
              key={el.id}
              image={el.image}
              name={el.name}
              price={el.price}
            />
          );
        })}
      </div>
      <div className="mt-[0]">
        <button
          type="button"
          className="border-2 border-[#5C8374] px-[40px] py-1 text-[25px] rounded-lg mt-40 ml-[790px] font-medium hover:bg-black hover:text-white transition"
        >
          See More
        </button>
      </div>
    </section>
  );
}
export default NewArrivals;
