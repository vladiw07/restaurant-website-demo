import React from 'react';
import FooterBg from '../assets/Images/FooterBackground.jpg';
import Logo from '../assets/Images/Logo.png';
import NewsImg1 from '../assets/Images/FooterNews1.png';
import NewsImg2 from '../assets/Images/FooterNews2.png';
import { FaFacebookF, FaPinterestP, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white py-8 px-4 sm:px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >


      <div className="max-w-7xl mx-auto">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-[#B99B80] pb-6">
          {/* Logo and Contact Info */}
          <div>
            <img src={Logo} alt="Keithston logo" className="mb-4 w-[100px]" />
            <h3 className="text-[18px] font-semibold text-[#E9BD8C] mb-2">About Us</h3>
            <p className="text-sm mb-[2px]">(456) 789-12301</p>
            <p className="text-sm mb-[2px]">info@modrino.co.uk</p>
            <p className="text-sm mb-[2px]">South 13th street</p>
            <p className="text-sm">New york America</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#E9BD8C] mb-2">Explore</h3>
            <ul className="space-y-1 text-sm font-medium">
              <li className="hover:text-amber-400 cursor-pointer">Home</li>
              <li className="hover:text-amber-400 cursor-pointer">Blog</li>
              <li className="hover:text-amber-400 cursor-pointer">Contact us</li>
              <li className="hover:text-amber-400 cursor-pointer">Services</li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#E9BD8C] mb-2">Recent News</h3>
            <div className="flex items-start gap-3 mb-3">
              <img src={NewsImg1} alt="news" className="w-[50px] h-[50px] object-cover rounded-md" />
              <div>
                <p className="text-xs text-gray-300 mb-1">June 14,2024</p>
                <p className="text-sm font-semibold">Puff pastry bliss.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <img src={NewsImg2} alt="news" className="w-[50px] h-[50px] object-cover rounded-md" />
              <div>
                <p className="text-xs text-gray-300 mb-1">June 14,2024</p>
                <p className="text-sm font-semibold">Puff pastry bliss.</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-start lg:items-end">
            <h3 className="text-[16px] font-medium text-[#E9BD8C] mb-3">Follow us</h3>
            <div className="flex gap-4">
              <FaFacebookF className="text-[#E9BD8C] hover:text-white text-lg cursor-pointer" />
              <FaPinterestP className="text-[#E9BD8C] hover:text-white text-lg cursor-pointer" />
              <FaWhatsapp className="text-[#E9BD8C] hover:text-white text-lg cursor-pointer" />
              <FaInstagram className="text-[#E9BD8C] hover:text-white text-lg cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Copy */}
        <div className="text-center text-gray-400 text-xs mt-4">
          © 2024 Bake House. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
