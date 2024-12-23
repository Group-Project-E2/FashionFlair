import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";
import aboutUsBannerImage from "./assets/aboutUsBannerImage.png";
import rectangularImgAboutUs from "./assets/aboutUsRecImg.png";

const AboutUs = () => {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "50+", label: "Best Brands" },
    { value: "1M", label: "Happy Clients" },
    { value: "3.5", label: "Rating" },
  ];
  return (
    <div>
      {/* Full-width banner image */}
      <div className='w-full'>
        <img className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover" src={aboutUsBannerImage} alt="About Us Banner" />
      </div>

      {/* Content Section with Image and Text */}
    
      <div className="flex flex-col md:flex-row gap-8 px-8 py-16">
        {/* Left side image */}

        <img className="h-96 w-full md:w-1/2 object-contain mx-auto" src={rectangularImgAboutUs} alt="Explore Fashionflare Styles" />



        {/* Right side text content */}
        <div className='flex flex-col gap-4 text-center md:text-left w-full md:w-1/2'>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Explore Fashionflare Styles</h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
            At FashionFlare, we believe that fashion is more than just clothing—it's a reflection of your unique style and personality.
            <br /><br />
            Our mission is to inspire confidence through stylish and affordable fashion choices that cater to every individual. Whether you're looking for everyday essentials or statement pieces for special occasions, FashionFlare is your go-to destination. With a commitment to quality, trendsetting designs, and exceptional customer service, we strive to make your shopping experience delightful.
          </p>

          <button
            type="button"
            className="flex flex-col self-center md:self-start w-fit border-2 border-[#5C8374] px-[40px] py-2 rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Shop now
          </button>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto flex justify-around text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer section */}
      <div className='pt-8'>
        {/* <Footer /> */}
      </div>

    </div>

  );
};

export default AboutUs;

