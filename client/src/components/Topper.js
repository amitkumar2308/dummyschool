import React, { useEffect, useState, useRef } from 'react';
import mainImage from '../assets/toppers/rank1.jpeg'; // Replace with your image
import photo1 from '../assets/toppers/rank2.jpeg'; // Replace with your images
import photo2 from '../assets/toppers/rank3.jpeg';
import photo3 from '../assets/toppers/rank4.jpeg';
import photo4 from '../assets/toppers/rank5.jpeg';
import photo5 from '../assets/toppers/rank6.jpeg';
import { motion } from 'framer-motion'; // Import Framer Motion for animation

const Topper = () => {
  const [isVisible, setIsVisible] = useState(false);
  const topperRef = useRef(null); // Reference for Intersection Observer

  useEffect(() => {
    // Setup Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when scrolled out of view
        }
      },
      { threshold: 0.2} // Trigger when 50% of the component is visible
    );

    if (topperRef.current) {
      observer.observe(topperRef.current);
    }

    return () => {
      if (topperRef.current) {
        observer.unobserve(topperRef.current);
      }
    };
  }, []);

  // Framer Motion Animation Variants
  const imageVariant = {
    hidden: { opacity: 0, x: -100 }, // Move image from left to right
    visible: { opacity: 1, x: 0, transition: { duration: 2.0, type: 'spring', bounce: 0.3 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 100 }, // Move text from right to left
    visible: { opacity: 1, x: 0, transition: { duration: 2.0, type: 'spring', bounce: 0.3 } },
  };

  return (
    <div id="topper-section" ref={topperRef} className="bg-gray-50 py-16 px-6 overflow-visible">
      {/* Main Topper Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6">
        {/* Left Side: Topper Image */}
        <motion.div
          className="lg:w-1/3 w-full flex justify-center lg:justify-end lg:mr-8"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={imageVariant}
        >
          <img
            src={mainImage}
            alt="Topper"
            className="rounded-lg shadow-2xl lg:max-w-md w-72 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Side: Text Content with swipe animation */}
        <motion.div
          className="lg:w-2/3 mt-8 lg:mt-0 text-center lg:text-left lg:pl-4"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={textVariant}
        >
          <h2 className="text-green-800 text-3xl lg:text-4xl font-extrabold leading-tight">
            ISC & ICSE - Results
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
            A moment of immense pride for the entire Cottonian community as Varun S 
            secures an outstanding 99.80% in his ICSE Examinations, alongside stellar 
            performances by students from other schools.
          </p>
          <p className="mt-4 text-lg lg:text-xl text-gray-700 leading-relaxed">
            Congratulations to Varun as well as his teachers, parents, and the entire 
            Cottonian community on this extraordinary accomplishment.
          </p>
          <h3 className="mt-6 text-green-800 text-xl lg:text-2xl font-semibold">
            NEC DEXTRORSUM-NEC SINISTRORSUM
          </h3>
        </motion.div>
      </div>

      {/* Photo Cards Grid Section */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-6">
        {[photo1, photo2, photo3, photo4, photo5].map((photo, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay based on index for staggered effect
          >
            <img src={photo} alt={`Photo ${index + 1}`} className="w-full object-cover h-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Topper;
