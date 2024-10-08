import React, { useState, useEffect, useRef } from 'react';
import { FaSchool } from 'react-icons/fa';
import crestImage from '../assets/bishoppng.png';
import { motion } from 'framer-motion';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when scrolled out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-green-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={aboutRef}>
        {/* Section Title with School Icon */}
        <div className="flex justify-center mb-6">
          <FaSchool className="text-white text-6xl" />
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
          About The Institution
        </h2>

        {/* About Content Section with animation */}
        <motion.div
          className="bg-yellow-600 mt-6 p-6 sm:p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: '-100vw' }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100vw' }}
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
            {/* Right Side: Crest Image with Left Alignment */}
            <div className="order-1 md:order-2 flex items-center justify-center md:justify-start mr-4 md:mr-60"> {/* Use margin right */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 bg-green-900 rounded-full flex items-center justify-center">
                <img
                  src={crestImage}
                  alt="School Crest"
                  className="w-36 h-auto sm:w-44"
                />
              </div>
            </div>

            {/* Left Side: Motto and Description */}
            <div className="order-2 md:order-1 md:max-w-xl space-y-6 text-justify mb-6 md:mb-0">
              <p className="text-white text-lg sm:text-base md:text-lg">
                Welcome to our school! We are dedicated to providing quality education and fostering a supportive learning environment. Our experienced staff and innovative curriculum empower students to achieve their full potential.
              </p>
              <p className="text-white text-lg sm:text-base md:text-lg">
                Our school motto is <strong>NEC DEXTRORSUM, NEC SINISTRORSUM</strong>, which means "Neither to the right, nor to the left." This signifies that a student must always keep going 'On Straight On' with focus and determination to achieve their goals.
              </p>
              <p className="text-white text-lg sm:text-base md:text-lg">
                Any obstacle that comes in the path should be overcome with perseverance, and one should not deviate from their ultimate aim in life.
              </p>
              <p className="text-white text-lg sm:text-base md:text-lg">
                Join us as we embark on a journey of knowledge and growth. Together, we can make a difference in the lives of our students and the community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
