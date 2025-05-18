import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Images/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#121212] z-30"
          onClick={closeMenu}
        ></div>
      )}

      <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#121212]' : 'bg-transparent'}`}>
        <div className="w-full">
          <div className="mx-auto max-w-[100rem] px-4 sm:px-8 py-4">
            <div className="flex items-center gap-8 md:gap-40">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
  src={Logo} 
  alt="keithston logo"
  className="object-contain h-[70px] w-[50px] sm:h-[80px] sm:w-[60px] md:h-[99px] md:w-[67px]" 
/>
              </div>

              {/* Desktop Navigation */}
              <ul className="hidden md:flex gap-8 text-[18px] lg:text-[22px] font-poppins ml-8 lg:ml-20">
                <li className="text-[#E9BD8C] cursor-pointer hover:text-amber-400 transition-colors">Home</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Blog</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Contact Us</li>
                <li className="text-white cursor-pointer hover:text-amber-400 transition-colors">Services</li>
              </ul>

              {/* Mobile Toggle */}
              <button 
                className="md:hidden text-white focus:outline-none ml-auto z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center">
                <ul className="flex flex-col gap-8 text-[24px] font-poppins text-center z-50">
                  <li className="text-[#E9BD8C] cursor-pointer hover:text-amber-400 transition-colors py-2" onClick={closeMenu}>Home</li>
                  <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2" onClick={closeMenu}>Blog</li>
                  <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2" onClick={closeMenu}>Contact Us</li>
                  <li className="text-white cursor-pointer hover:text-amber-400 transition-colors py-2" onClick={closeMenu}>Services</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
