import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import award1 from '../assets/awards/award1.jpg';
import award2 from '../assets/awards/award2.jpg';
import award3 from '../assets/awards/award3.jpg';
import award4 from '../assets/awards/award4.jpg';
import facility from '../assets/facility/facilities.jpeg';
import sports from '../assets/facility/sports.jpeg';
import achievement from '../assets/facility/AcademicAchievements.jpeg';
import events from '../assets/facility/Eventscottons.jpeg';
import champions from '../assets/facility/Championships.jpeg';
import placement from '../assets/facility/UniversityPlacements.jpg';

const Award = () => {
  const [isVisible, setIsVisible] = useState(false);
  const awardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the component is in view
        } else {
          setIsVisible(false); // Optionally reset to false when out of view
        }
      },
      { threshold: 0.2 } // Trigger when 50% of the component is visible
    );

    if (awardRef.current) {
      observer.observe(awardRef.current);
    }

    return () => {
      if (awardRef.current) {
        observer.unobserve(awardRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-50 py-10" ref={awardRef}>
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        AWARDS
      </h2>

      {/* Main Award Image */}
      <div className="max-w-6xl mx-auto mb-10">
        <motion.img
          src={award1}
          alt="Award Ceremony"
          className="w-full h-[500px] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: -50 }} // Start off-screen
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on visibility
          transition={{ duration: 0.5 }} // Transition duration
        />
        <p className="text-center text-gray-800 mt-4 text-lg italic">
          Bishop Cotton Boys' School ranked No. 1 in India, Karnataka, and Bangalore under the category of the Top 3 Boys' Day Boarding Schools - Education Today
        </p>
      </div>

      {/* Green Separation Line */}
      <hr className="border-t-2 border-green-700 my-8" />

      {/* Award Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[award2, award3, award4].map((award, index) => (
          <motion.div
            key={index}
            className="relative md:col-span-1 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: -50 }} // Start off-screen
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on visibility
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay for effect
          >
            <img
              src={award}
              alt={`Award ${index + 2}`}
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <p className="text-center text-gray-700 mt-2 text-lg font-semibold">
              {index === 0 ? 'Certificate of Achievement' : index === 1 ? 'Parents Choice Award - 2021' : 'Award Plate'}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Facilities Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center text-green-800 mb-6">Facilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[facility, sports, achievement, events, champions, placement].map((facilityImage, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: -50 }} // Start off-screen
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on visibility
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay for effect
            >
              <img
                src={facilityImage}
                alt={`Facility ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-center text-green-700 mt-4 text-lg font-semibold">
                {index === 0 ? 'Facilities' : index === 1 ? 'Sports' : index === 2 ? 'Academic Achievements' : index === 3 ? 'Events' : index === 4 ? 'Championships' : 'University Placements'}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Award;
