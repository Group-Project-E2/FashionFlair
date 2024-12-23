import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    // add href links
    <footer className="bg-gray-100 p-10">
      <div className='flex flex-col md:flex-row gap-12'>{/*mobile-> col, tab and above-> row*/ }

        <div className='flex flex-col w-full gap-8 '>
          <div>
            <h2 className="text-4xl font-semibold text-green-800">Fashion Flare</h2>
          </div>

          <div>
            <p className="text-gray-600 w-full">
              Fashion Flare is a modern basics brand based in Sri Lanka. We focus on quality and comfort, providing versatile everyday wear that keeps you confident and at ease throughout the day.
            </p>
          </div>
          {/* Social Media Icons */}
          <div className='flex flex-row gap-4'>

            <a href="https://facebook.com" aria-label="Facebook" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600" />
            </a>

            <a href="https://instagram.com" aria-label="Instagram" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500" />
            </a>


            <a href="https://x.com" aria-label="X" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-blue-400" />
            </a>

            <a href="https://youtube.com" aria-label="YouTube" target="_blank">
              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600" />
            </a>

          </div>

        </div>

        <div className='flex flex-col w-full  gap-4'>
          <h3 className="text-2xl font-semibold text-green-800">Category</h3>
          <div className="text-1xl font-semibold text-green-800">
            <h6>
               <Link to="/women">Women </Link>
            </h6>
            <h6>
               <Link to="/men">Men </Link>
            </h6>
            <h6>
               <Link to="/kids">Kids </Link>
            </h6>
            <h6>
               <Link to="/sportwear">Sportswear </Link>
            </h6>
            <h6>
               <Link to="/shoes">Shoes </Link>
            </h6>
            <h6>
               <Link to="/bags">Bags </Link>
            </h6>
          </div>
        </div>

        <div className='flex flex-col w-full  gap-4'>
          <h6 className="text-2xl font-semibold text-green-800">Home</h6>

          <div className="text-1xl font-semibold text-green-800">
            <h6>
               <Link to="/shop">Shop </Link>
            </h6>
            <h6>
               <Link to="/collection">Collection </Link>
            </h6>
            <h6>
               <Link to="/aboutUs">About Us </Link>
            </h6>
            <h6>
               <Link to="/contactUs">Contact Us </Link>
            </h6>
          </div>
        </div>

        <div className='flex flex-col w-full gap-4'>
          {/*icons on the right side of the footer,here*/}
          <div className='flex flex-row gap-4'>
            {/*map icon*/}
            <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-green-800 size-6" strokeWidth="1.5" />
            <div className='text-1xl font-semibold text-green-800'>
              <h4>Store Address</h4>
              <div>
                <h6>10B, Peradeniya,Kandy.</h6>
              </div>
            </div>

          </div>


          <div className='flex flex-row gap-4'>

            <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-green-800 size-6" strokeWidth="1.5" />
            <div className='text-1xl font-semibold text-green-800'>
              <h4>Mail us</h4>
              <div>
                <h6>fashionflare@gmail.com</h6>
              </div>

            </div>

          </div>

          <div className='flex flex-row gap-4'>
            <FontAwesomeIcon icon={faGlobe} size="lg" className="text-green-800 size-6"/>
            <div className='text-1xl font-semibold text-green-800'>
              <h4>Website</h4>
              <div>
                <a href="http://localhost:5173/" aria-label="Fashion Flare lk" target="_blank">
                  <h6>fashionflare.lk</h6>
                </a>
              </div>
            </div>

          </div>



          <div className='flex flex-row gap-4' >
            <FontAwesomeIcon icon={faPhone} size="lg" className="text-green-800 size-6" />
            <div className='text-1xl font-semibold text-green-800'>
              <h4>Call Us</h4>
              <div>
                <h6>+94662052093</h6>
              </div>
            </div>

          </div>

        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div >
        <p className='text-center'>@2024.Fashion flare. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
