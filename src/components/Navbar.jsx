import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Update the path according to your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md font-times"> {/* Apply Times New Roman font */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 w-48 object-cover" /> {/* Adjust the height and width as needed */}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="text-black lg:flex lg:space-x-4">
            <li><a href="#home" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">Home</a></li>
            <li><a href="#about" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">About Us</a></li>
            <li><a href="#products" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">Products</a></li>
            <li><a href="#services" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">Services</a></li> {/* Added Services link */}
            <li><a href="#videos" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">Videos</a></li>
            <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">Contact Us</a></li>
            <li>
              <a href="mailto:info@blacksmithengineering.com" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">
                <i className="fas fa-envelope mr-2"></i>Send Mail
              </a>
            </li>
            <li>
              <a href="sms:+1234567890" className="block py-2 px-4 hover:bg-gray-200 rounded font-semibold text-lg transition duration-300">
                <i className="fas fa-sms mr-2"></i>Send Message
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
