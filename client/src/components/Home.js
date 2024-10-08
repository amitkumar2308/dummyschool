import React, { useEffect, useRef } from 'react';
import banner1 from '../assets/carousel/banner1.jpg';
import banner2 from '../assets/carousel/banner2.jpg';
import banner3 from '../assets/carousel/banner3.jpg';
import banner4 from '../assets/carousel/banner4.jpg';
import banner5 from '../assets/carousel/banner5.jpg';

function Home() {
  const carouselRef = useRef(null); // Ref to the carousel element
  const banners = [banner1, banner2, banner3, banner4, banner5]; // Image array

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.children[0]; // Get the first child
        carouselRef.current.appendChild(firstItem); // Move the first item to the end
        carouselRef.current.style.transition = 'none'; // Disable transition for smooth movement

        // Reset the transform to avoid jankiness
        requestAnimationFrame(() => {
          carouselRef.current.style.transform = 'translateX(0)';
          carouselRef.current.style.transition = 'transform 0.5s ease'; // Re-enable transition
        });
      }
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col bg-gray-100">
      {/* News & Updates and 3D Model Section */}
      <div className="flex flex-col lg:flex-row h-[60vh] lg:h-[65vh] p-6 lg:p-12 gap-6">
        {/* News & Updates Section styled as a card */}
        <div className="w-full lg:w-1/3 bg-green-800 bg-opacity-100 p-6 shadow-lg rounded-lg flex flex-col justify-start">
          <h2 className="text-2xl font-semibold text-white mb-4">News & Updates</h2>
          <div className="overflow-hidden h-[200px]">
            <div className="animate-scroll">
              <ul className="space-y-3 text-white">
                <li>Update 1: New features added!</li>
                <li>Update 2: Maintenance scheduled for Friday.</li>
                <li>Update 3: Upcoming events to be announced.</li>
                <li>Update 4: Community feedback session.</li>
                <li>Update 5: New partnerships in the pipeline.</li>
            
              </ul>
            </div>
          </div>
        </div>

        {/* 3D Model Section */}
        <div className="w-full lg:w-2/3 h-full flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
          <p className="text-gray-600 text-center text-lg">3D Model of School will be introduced later.</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="h-[50vh] lg:h-[45vh] p-4 bg-gray-300 flex items-center justify-center overflow-hidden mb-6">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${banners.length * 100}%`,
            transform: 'translateX(0%)',
            display: 'flex',
          }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={banner}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
