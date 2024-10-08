// PrincipalMessage.js
import React, { useEffect, useState, useRef } from 'react';
import Principal from '../assets/Principal Photo.jpg'; // Adjust the path as needed
import { motion } from 'framer-motion';

const PrincipalMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);

  // Setup Intersection Observer to trigger animation
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
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (messageRef.current) {
      observer.observe(messageRef.current);
    }

    return () => {
      if (messageRef.current) {
        observer.unobserve(messageRef.current);
      }
    };
  }, []);

  // Animation variant for the card
  const cardVariant = {
    hidden: { opacity: 0, y: 20 }, // Start from below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.0, type: 'spring', bounce: 0.3 }, // Adjust duration for responsiveness
    },
  };

  return (
    <div
      id="principal-message-section"
      className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-100"
      ref={messageRef} // Attach ref for Intersection Observer
    >
      {/* Left Side: Principal's Photo in a Card */}
      <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
        <div className="w-80 h-[400px] bg-white shadow-lg border-4 border-green-700 rounded-lg overflow-hidden transform transition-all hover:scale-105">
          <img
            src={Principal}
            alt="Principal"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      </div>

      {/* Right Side: Principal's Message with animation */}
      <motion.div
        className="w-full md:w-2/3 bg-white p-4 md:p-8 shadow-md rounded-md"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={cardVariant}
      >
        <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">PRINCIPAL'S MESSAGE</h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Greetings & Good Wishes! <br /><br />
          Welcome to the start of the 2024-2025 academic year! I am delighted to see our school community gathered once again, 
          filled with enthusiasm and a renewed sense of purpose. Whether you are a returning member of our school family or joining 
          us for the first time, I extend a warm welcome to each of you. <br /><br />

          This year promises to be one of growth, learning, and success. Our dedicated faculty and staff have worked diligently over 
          the summer to prepare an engaging and enriching curriculum designed to challenge our students and help them reach their full potential. 
          We are committed to fostering a nurturing environment where every student can thrive academically, socially, and emotionally. <br /><br />

          To our students, I encourage you to embrace this new school year with an open mind and a positive attitude. Take advantage of the opportunities 
          presented to you, whether in the classroom, on the sports field, or through extracurricular activities. Remember, education is not just about 
          acquiring knowledge but also about developing character, resilience, and a lifelong love of learning. Set your goals high, work hard, and never 
          hesitate to ask for help when needed. Your teachers, counselors, and the entire school staff are here to support you every step of the way. <br /><br />

          To our parents, thank you for your continued trust and partnership. Your involvement is crucial to the success of our students and our school. 
          We value your insights and encourage you to stay engaged with our community through parent-teacher meetings, school events, and volunteer 
          opportunities. Together, we can create a supportive and collaborative environment that benefits all our children. <br /><br />

          This year, we are excited to introduce several new initiatives aimed at enhancing our educational offerings and student experience. These include 
          updated technology in our classrooms, expanded extracurricular programs, and new resources to support student well-being and mental health. 
          We believe these enhancements will provide our students with the tools they need to succeed in an ever-changing world. <br /><br />

          As we embark on this new academic journey, let us all commit to working together with respect, kindness, and a shared vision of excellence. 
          I am confident that with our collective efforts, this will be a remarkable year filled with achievements and memorable experiences. <br /><br />

          Once again, welcome to the 2024-2025 school year. Let’s make it our best year yet!<br /><br />

          Warm regards, <br />
          Alistair R.A. Freese <br />
          Principal
        </p>
        <div className="text-right mt-4">
          <p className="text-lg font-bold text-green-700">ALISTAIR R.A. FREESE</p>
          <p className="text-gray-600">Principal</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrincipalMessage;
