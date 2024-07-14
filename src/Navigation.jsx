import React, { useState, useEffect } from "react";
function Navigation() {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);

  const toggleSearchBox = () => {
    setIsSearchBoxVisible(!isSearchBoxVisible);
  };

  const closeSearchBox = () => {
    setIsSearchBoxVisible(false);
  };
  return (
    <div>
      <nav className="m-0 p-o box-border">
        <div className="bg-[#183d3d] text-white flex justify-between items-center p-2.5">
          <div className="flex items-center gap-5">
            <div className="text-white font-poppins text-xl p-2.5 no-underline hover:text-sky-300">
              <a href="/Lofin/Register">Login/Register</a>
            </div>
            <a
              href="/"
              className="text-2xl font-bold italic mx-5 p-2.5 absolute left-1/2 transform -translate-x-1/2"
            >
              fashionflare
            </a>
          </div>
          <div className="flex ml-auto items-center gap-1">
            <button
              onClick={toggleSearchBox}
              aria-label="Search"
              className="mr-4 hover:text-sky-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                g
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            {isSearchBoxVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-lg max-w-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 border border-gray-300 text-black rounded w-full"
                  />
                  <button
                    onClick={closeSearchBox}
                    className="p-2 bg-gray-200 rounded mt-2 w-full text-black"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-5">
            <a
              href="/Cart"
              className="text-white p-2.5 no-underline hover:text-sky-300"
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span>Cart</span>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="/Whishlist"
              className="text-white p-2.5 no-underline hover:text-sky-300"
            >
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span>Wishlist</span>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center font-poppins text-base p-2.5">
          <div className="flex items-center gap-5">
            <div>
              <a
                href="/Home"
                class="text-black text-[20px] no-underline px-5 font-poppins text-base hover:text-sky-300"
              >
                Home
              </a>
              <a
                href="Shop"
                class="text-black text-[20px] no-underline px-5 font-poppins text-base hover:text-sky-300"
              >
                Shop
              </a>
              <a
                href="/Vachers"
                class="text-black text-[20px] no-underline px-5 font-poppins text-base hover:text-sky-300"
              >
                Voucher
              </a>
              <a
                href="/Abpot Us"
                class="text-black text-[20px] no-underline px-5 font-poppins text-base hover:text-sky-300"
              >
                About Us
              </a>
              <a
                href="/Countact Us"
                class="text-black text-[20px] no-underline px-5 font-poppins text-base hover:text-sky-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
