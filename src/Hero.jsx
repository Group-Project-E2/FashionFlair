import heroImage from "./assets/Hero.png";
function Hero() {
  return (
    <section>
      <div className="grid bg-[#cfc7bc] min-h-[80vh] min-w-[44vh] relative ">
        <div className="flex flex-col p-16">
          <h1 className="italic font-bold text-[84px] z-10">
            Redefine Your Look with Our
          </h1>
          <h2 className="italic text-[#5C8374] font-bold text-[84px] z-10">
            Latest Collection
          </h2>
          <p className="mt-8 text-[30px] rounded-lg text-[#183D3D] w-[1000px] z-10">
            Discover your perfect look with FashionFlare's latest
            collection.From chic everyday wear to standout pieces for special
            occasions, our trendy and comfortable clothing is designed to make
            you shine.
          </p>
          <div className="mt-[70px]">
            <button
              herf="/Shop"
              className="bg-[#cfc7bc] rounded border border-[#183D3D] py-4 px-4 text-[35px]  text-black hover:bg-[#183D3D]"
            >
              Explore the New Arrivals
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full z-0">
          <img className="h-full object-cover" src={heroImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
