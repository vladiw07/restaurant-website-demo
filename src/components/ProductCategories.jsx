import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Cake Images
import Cake1 from '../assets/Images/Cake1.png';
import Cake2 from '../assets/Images/Cake2.png';
import Cake3 from '../assets/Images/Cake3.png';
import Cake4 from '../assets/Images/Cake4.png';
import Cake5 from '../assets/Images/Cake5.png';
import Cake6 from '../assets/Images/Cake6.png';

// Muffin Images
import Muffin1 from '../assets/Images/Muffin1.webp';
import Muffin2 from '../assets/Images/Muffin2.jpg';
import Muffin3 from '../assets/Images/Muffin3.jpg';
import Muffin4 from '../assets/Images/Muffin4.jpg';
import Muffin5 from '../assets/Images/Muffin5.jpg';
import Muffin6 from '../assets/Images/Muffin6.jpg';

// Croissant Images
import Croissant1 from '../assets/Images/Croissant1.jpg';
import Croissant2 from '../assets/Images/Croissant2.jpg';
import Croissant3 from '../assets/Images/Croissant3.jpg';
import Croissant4 from '../assets/Images/Croissant4.webp';
import Croissant5 from '../assets/Images/Croissant5.avif';
import Croissant6 from '../assets/Images/Croissant6.avif';

// Bread Images
import Bread1 from '../assets/Images/Bread1.jpg';
import Bread2 from '../assets/Images/Bread2.avif';
import Bread3 from '../assets/Images/Bread3.jpg';
import Bread4 from '../assets/Images/Bread4.jpg';
import Bread5 from '../assets/Images/Bread5.webp';
import Bread6 from '../assets/Images/Bread6.jpg';

// Tart Images
import Tart1 from '../assets/Images/Tart1.webp';
import Tart2 from '../assets/Images/Tart2.jpg';
import Tart3 from '../assets/Images/Tart3.jpg';
import Tart4 from '../assets/Images/Tart4.jpg';
import Tart5 from '../assets/Images/Tart5.jpg';
import Tart6 from '../assets/Images/Tart6.jpg';

function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('Cake');
  
  const categories = {
    Cake: [
      { id: 1, image: Cake1, name: 'Chocolate Cake' },
      { id: 2, image: Cake2, name: 'Red Velvet' },
      { id: 3, image: Cake3, name: 'Cheesecake' },
      { id: 4, image: Cake4, name: 'Carrot Cake' },
      { id: 5, image: Cake5, name: 'Angel Food' },
      { id: 6, image: Cake6, name: 'Pound Cake' }
    ],
    Muffins: [
      { id: 1, image: Muffin1, name: 'Blueberry Muffin' },
      { id: 2, image: Muffin2, name: 'Chocolate Chip' },
      { id: 3, image: Muffin3, name: 'Banana Nut' },
      { id: 4, image: Muffin4, name: 'Lemon Poppyseed' },
      { id: 5, image: Muffin5, name: 'Double Chocolate' },
      { id: 6, image: Muffin6, name: 'Bran Muffin' }
    ],
    Croissant: [
      { id: 1, image: Croissant1, name: 'Butter Croissant' },
      { id: 2, image: Croissant2, name: 'Almond Croissant' },
      { id: 3, image: Croissant3, name: 'Chocolate Croissant' },
      { id: 4, image: Croissant4, name: 'Ham & Cheese' },
      { id: 5, image: Croissant5, name: 'Whole Wheat' },
      { id: 6, image: Croissant6, name: 'Sourdough' }
    ],
    Bread: [
      { id: 1, image: Bread1, name: 'Sourdough' },
      { id: 2, image: Bread2, name: 'Baguette' },
      { id: 3, image: Bread3, name: 'Whole Grain' },
      { id: 4, image: Bread4, name: 'Rye Bread' },
      { id: 5, image: Bread5, name: 'Brioche' },
      { id: 6, image: Bread6, name: 'Ciabatta' }
    ],
    Tart: [
      { id: 1, image: Tart1, name: 'Fruit Tart' },
      { id: 2, image: Tart2, name: 'Chocolate Tart' },
      { id: 3, image: Tart3, name: 'Lemon Tart' },
      { id: 4, image: Tart4, name: 'Pecan Tart' },
      { id: 5, image: Tart5, name: 'Custard Tart' },
      { id: 6, image: Tart6, name: 'Berry Tart' }
    ]
  };


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const tabContent = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0 }
  };


   return (
    <section className="py-12 px-4 sm:px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-sansita font-semibold text-center mb-12 text-[#111111]"
        >
          Explore More
        </motion.h2>

        {/* Category Navigation */}
        <div className="border-b border-gray-300 mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center overflow-x-auto scrollbar-hide px-4"
          >
            <div className="flex space-x-8 mb-2 min-w-max">
              {Object.keys(categories).map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative text-[18px] sm:text-[20px] lg:text-[24px] font-poppins font-semibold px-2 pb-2 whitespace-nowrap
                    ${activeCategory === category 
                      ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[4px] after:rounded-full after:bg-[#933C24]'
                      : 'hover:text-[#933C24]'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={tabContent}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="contents"
            >
              {categories[activeCategory]?.map((product) => (
                <motion.div
                  key={product.id}
                  variants={item}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="group relative aspect-square w-full rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.h3 
                      className="text-white font-poppins font-medium text-lg"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      {product.name}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ProductCategories;