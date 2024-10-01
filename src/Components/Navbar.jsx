import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <div className="flex  items-center sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200  justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <a href="/">
            <img
              src={
                "https://netchex.com/wp-content/themes/netchex-tailwdind/images/logo.svg"
              }
              alt="Landscape picture"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6  ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex  lg:items-center    lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-md  lg:flex-grow  ">
            <a
              href="/service"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Service
            </a>
            <a
              href="/princing"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Pricing
            </a>
            <a
              href="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Blog
            </a>
            <a
              href="/blogList"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Resource
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block mt-3 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-[#174D46] "
            >
              Log in
            </a>
            <button className="inline-flex items-center rounded-sm bg-[#174D46] border-0 font-semibold ml-4 mr-[3rem] py-2 px-6 text-white">
              Request a quote{" "}
            
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
