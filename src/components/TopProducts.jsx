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
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-sansita font-bold text-center mb-12 md:mb-24 lg:mb-32 mt-6 md:mt-12 text-[#111111]">
          Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-cover bg-center h-[360px] w-full"
              style={{
                backgroundImage: `url(${ProductBackgroundImage})`,
              }}
            >
              {/* Product Image */}
              <div className="flex justify-center pt-6 flex-grow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-52 sm:h-56 sm:w-56 object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="w-full px-4 pb-4">
                <div className="flex justify-between items-center text-white mb-1">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <FiInfo className="text-white w-4 h-4 opacity-75" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-[30px] mb-4 font-medium">{product.name}</h3>
                  <button className="bg-[#933C24] hover:bg-amber-600 text-white px-4 py-1 rounded-md font-medium text-[20px] transition-colors duration-300">
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
