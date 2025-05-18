import React from 'react';
import FeaturedTreats1 from '../assets/Images/FeaturedTreats1.png';
import FeaturedTreats2 from '../assets/Images/FeaturedTreats2.png';
import FeaturedTreats3 from '../assets/Images/FeaturedTreats3.png';

function FeaturedTreats() {
  const treats = [
    { id: 1, name: 'Puff Pastry', price: '$8', image: FeaturedTreats1 },
    { id: 2, name: 'Doughnuts', price: '$8', image: FeaturedTreats2 },
    { id: 3, name: 'Brownies', price: '$8', image: FeaturedTreats3 },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 bg-white text-center">
      <h2 className="text-[64px] sm:text-[48px] font-sansita font-semibold text-[#111] mb-12">
        Featured Treats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {treats.map((treat) => (
          <div key={treat.id} className="flex flex-col items-center">
            <img 
              src={treat.image} 
              alt={treat.name} 
              className="w-full max-w-[280px] h-[280px] mb-4 object-cover rounded-2xl shadow-md"
            />
            <div className='flex flex-row items-center align-center gap-6'>
                <div className=" font-inter font-semibold text-[23px] text-[#000000]">
                {treat.name}
                </div>
                <div className="text-[25px] font-inter font-semibold text-[#000000]">{treat.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTreats;
