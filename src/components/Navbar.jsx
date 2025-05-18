import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="w-full">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-8 py-4">
          <div className="flex items-center gap-8 md:gap-40">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={`${process.env.PUBLIC_URL}/images/Logo.png`} 
                className="h-12 md:h-16 object-contain" 
                alt="keithston logo" 
              />
            </div>

            {/* Desktop Navigation - positioned more to the left */}
            <ul className="hidden md:flex gap-8 text-[18px] lg:text-[22px] font-poppins ml-8 lg:ml-20">
              <li className="text-[#E9BD8C] cursor-pointer hover:text-amber-400 transition-colors">Home</li>
              <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Blog</li>
              <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Contact Us</li>
              <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Services</li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none ml-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Full-screen Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden fixed inset-0 bg-[#121212] z-40 mt-16 flex items-center justify-center">
              <ul className="flex flex-col gap-8 text-[24px] font-poppins text-center">
                <li className="text-[#E9BD8C] cursor-pointer hover:text-amber-400 transition-colors py-2">Home</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2">Blog</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2">Contact Us</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2">Services</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;