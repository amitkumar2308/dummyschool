import React, { useEffect, useState } from 'react';
import mainImage from '../assets/toppers/rank1.jpeg'; // Replace with your image
import photo1 from '../assets/toppers/rank2.jpeg'; // Replace with your images
import photo2 from '../assets/toppers/rank3.jpeg';
import photo3 from '../assets/toppers/rank4.jpeg';
import photo4 from '../assets/toppers/rank5.jpeg';
import photo5 from '../assets/toppers/rank6.jpeg';

const Topper = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#topper-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="topper-section" className="bg-gray-50 py-16 px-6">
      {/* Main Topper Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-12">
        {/* Left Side: Topper Image */}
        <div
          className={`lg:w-1/3 w-full flex justify-center lg:justify-start transition-all duration-1000 ${
            isVisible ? 'animate-left-swipe' : 'opacity-0'
          } ml-8 lg:ml-12`}
        >
          <img
            src={mainImage}
            alt="Topper"
            className="rounded-lg shadow-2xl lg:max-w-md w-72 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Text Content */}
        <div
          className={`lg:w-2/3 mt-8 lg:mt-0 text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'animate-right-swipe' : 'opacity-0'
          }`}
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
        </div>
      </div>

      {/* Photo Cards Grid Section */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
          <img src={photo1} alt="Photo 1" className="w-full object-cover h-auto" />
          
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
          <img src={photo2} alt="Photo 2" className="w-full object-cover h-auto" />
         
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
          <img src={photo3} alt="Photo 3" className="w-full object-cover h-auto" />
         
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
          <img src={photo4} alt="Photo 4" className="w-full object-cover h-auto" />
          
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out transform hover:shadow-2xl">
          <img src={photo5} alt="Photo 5" className="w-full object-cover h-auto" />
         
        </div>
      </div>
    </div>
  );
};

export default Topper;
