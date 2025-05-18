import React from 'react'
import AboutUsImage from '../assets/Images/AboutUsImage.png'; 
function AboutUs() {
  return (
    <div 
      className="relative p-12 rounded-lg shadow-md text-center min-h-[400px] flex flex-col mt-20 items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${AboutUsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      
      
      <div className="relative z-10">
        <h2 className="text-[48px] font-semibold font-sansita text-[#F5F5F5] mb-2">
          About us
        </h2>
        <p className="text-[#B9B9B9] mb-4 font-inter text-[24px]">
          Suspendisse ac rhoncus nisl, <br /> eu tempor urna. Curabitur vel <br /> bibendum lorem. Morbi <br /> convallis.
        </p>
        <button className="bg-[#933C24] text-[#F9F6F1] text-[24px] px-[20px] py-[10px] rounded-md font-semibold hover:bg-amber-700 transition-colors">
          Read More
        </button>
      </div>
    </div>
  )
}

export default AboutUs;
