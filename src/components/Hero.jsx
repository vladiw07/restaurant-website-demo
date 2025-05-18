import React from 'react';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[500px] md:min-h-[813px] flex items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/HeroImage.webp)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      
      {/* Content */}
      <div className="mx-auto max-w-[100rem] w-full px-4 sm:px-8 lg:px-24 z-10">
        <div className="space-y-4 md:space-y-6">
          <p className="text-[#E9BD8C] text-[18px] md:text-[24px] font-inter font-semibold">
            Delicious Cafe
          </p>
          <h1 className="text-[42px] leading-[1.2] md:text-[64px] lg:text-[74px] font-sansita text-[#F5F5F5]">
            Sweet Treats, <br /> Perfect Eats
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#933C24] font-inter text-[18px] md:text-[24px] hover:bg-amber-700 text-white font-semibold px-6 py-2 md:py-3 rounded-md transition duration-300">
              Shop Now
            </button>
            <button className="text-[#E9BD8C] text-[18px] md:text-[24px] font-semibold hover:underline transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;