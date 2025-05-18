import React from 'react';
import PromoBackground from '../assets/Images/PromoBannerImage.png'; // Import your background image

function PromoBanner() {
  return (
    <div 
      className="relative p-12 rounded-lg shadow-md text-center min-h-[400px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${PromoBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10">
        <h2 className="text-[48px] font-medium font-sansita text-[#933C24] mb-2">
          20% Off Your <br /> First Order
        </h2>
        <p className="text-[#5D5D5D] mb-4 font-inter text-[24px]">
          Suspendisse ac rhoncus nisi, <br /> eu tempor urna. Curabitur vel <br /> bibenigg.
        </p>
        <button className="bg-[#933C24] text-[#F9F6F1] text-[24px] px-[20px] py-[10px] rounded-md font-semibold hover:bg-amber-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default PromoBanner;