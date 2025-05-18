import React from 'react';
import ProductBackgroundImage from '../assets/Images/TopProductsBackground.png';
import { FiInfo } from 'react-icons/fi';

import ProductImage1 from '../assets/Images/topProductsImage1.png';
import ProductImage2 from '../assets/Images/topProductsImage2.png';
import ProductImage3 from '../assets/Images/topProductsImage3.png';
import ProductImage4 from '../assets/Images/topProductsImage4.png';
import ProductImage5 from '../assets/Images/topProductsImage5.png';
import ProductImage6 from '../assets/Images/topProductsImage6.png';

function TopProducts() {
  const products = [
    { id: 1, name: 'Whole Grain Bread', price: '$40', image: ProductImage1 },
    { id: 2, name: 'Croissant', price: '$35', image: ProductImage2 },
    { id: 3, name: 'Blueberry Muffin', price: '$30', image: ProductImage3 },
    { id: 4, name: 'Cinnamon Roll', price: '$45', image: ProductImage4 },
    { id: 5, name: 'Chocolate Cake', price: '$60', image: ProductImage5 },
    { id: 6, name: 'Bagel', price: '$25', image: ProductImage6 },    
  ];

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Responsive heading */}
        <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-sansita font-bold text-center mb-12 md:mb-24 lg:mb-32 mt-6 md:mt-12 text-[#111111]">
          Top Products
        </h2>
        
        {/* Responsive grid with centered items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 
              h-[300px] w-[280px] md:h-[340px] md:w-[300px] lg:h-[380px] lg:w-[320px]"
              style={{
                backgroundImage: `url(${ProductBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Product Image - responsive sizing */}
              <div className="absolute top-6 md:top-8 left-0 right-0 flex justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-48 w-48 md:h-56 md:w-56 lg:h-60 lg:w-60 object-contain"
                />
              </div>
              
              {/* Product Info - responsive padding and text */}
              <div className="relative h-full flex flex-col justify-end p-4 md:p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center">
                      <span className="text-white font-semibold text-[18px] md:text-[20px] lg:text-[24px] font-inter mr-2">
                        {product.price}
                      </span>
                      <button className="text-white hover:text-amber-300 transition-colors">
                        <FiInfo size={16} className="md:w-5 lg:w-6" />
                      </button>
                    </div>
                    <h3 className="text-white font-inter text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-1 md:mt-2">
                      {product.name}
                    </h3>
                  </div>
                  <button className="bg-[#933C24] hover:bg-amber-600 text-white hover:text-white px-3 py-1 md:px-4 md:py-2 rounded-md font-medium font-inter text-[16px] md:text-[20px] lg:text-[24px] transition-colors duration-300">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProducts;