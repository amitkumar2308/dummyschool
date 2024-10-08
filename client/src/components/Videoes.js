import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VideoSection = () => {
  // Create a reference for each video element (using standard JavaScript syntax)
  const videoRefs = useRef([]);

  // Control animation for video zoom-in using framer-motion's `useAnimation`
  const controls = useAnimation();

  // Observe each video element to detect when it comes into view
  useEffect(() => {
    // Create an intersection observer to track when a video enters/exits the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;

          if (entry.isIntersecting) {
            // Trigger animation controls to zoom in
            controls.start({
              scale: 1.1,
              transition: { duration: 0.5 },
            });

            // Get the correct video reference from the refs array using `data-index`
            const index = parseInt(videoElement.dataset.index, 10);
            const iframe = videoRefs.current[index];

            // Check if the iframe exists before sending the play message
            if (iframe) {
              iframe.contentWindow?.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                '*'
              );
            }
          } else {
            // Revert animation controls and pause the video
            controls.start({ scale: 1, transition: { duration: 0.5 } });

            // Get the correct video reference from the refs array
            const index = parseInt(videoElement.dataset.index, 10);
            const iframe = videoRefs.current[index];

            if (iframe) {
              iframe.contentWindow?.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                '*'
              );
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe each video element
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <div className="flex flex-col md:flex-row items-start p-8 bg-gray-50 min-h-screen">
      {/* Video Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2">
        {Array.from({ length: 4 }, (_, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col items-center"
            animate={controls}
            initial={{ scale: 1 }} // Initial scale before animation starts
            whileHover={{ scale: 1.05 }} // Scale up slightly on hover
            transition={{ duration: 0.5 }}
          >
            {/* Each video element is referenced using ref and data-index */}
            <iframe
              ref={(el) => (videoRefs.current[index] = el)}
              data-index={index}
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1`} // Replace with any random video ID
              title={`Video ${index + 1}`}
              className="w-full video-card"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="bg-gray-800 w-full p-4">
              <p className="text-lg font-semibold text-center text-white">
                Video {index + 1}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">
          Welcome to Bishop Cotton Boys' School!
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          After standing tall for 155 glorious years, Bishop Cotton Boys' School has won the accolade of the "Eton of the East" and stands out as Bangalore's leading school, one of India's top three-ranked schools, and the No. 1 among all metro schools in India. The school has a strength of around 6000 students, who have gone on to shine in different walks of life across the world.
        </p>
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Vision and Mission
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Cottons has always stood for discipline and the moulding of character of its students to ensure that it will not crumble when tested in the crucible of adulthood. This institution prides itself in imparting quality education while preparing the students for the competitive world outside the classroom through its meticulously envisioned House system.
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Be it debate, sports, or even Model United Nations Conferences, Cottons has repeatedly proven that the students produced by this institution have always emerged as winners, while proving that Cottons is an unstoppable force in the world of extra-curriculars.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The School strives to provide opportunities for the development of leadership qualities that can be utilized in the future for the creation of a better India, which can hold its head high in the community of nations.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
          "ON STRAIGHT ON! ON COTTONIANS ON!"
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
