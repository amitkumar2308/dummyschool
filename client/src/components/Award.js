import React from 'react';
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
  return (
    <div className="bg-gray-100 py-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">AWARDS</h2>

      {/* Main Award Image */}
      <div className="max-w-6xl mx-auto mb-10">
        <img
          src={award1}
          alt="Award Ceremony"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg bounce-drop"
        />
        <p className="text-center text-gray-700 mt-4">
          Bishop Cotton Boys' School ranked No. 1 in India, Karnataka, and Bangalore under the category of the Top 3 Boys' Day Boarding Schools - Education Today
        </p>
      </div>

      {/* Green Separation Line */}
      <hr className="border-t-2 border-green-700 my-8" />

      {/* Award Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="md:col-span-1">
          {/* Award2 */}
          <img
            src={award2}
            alt="Certificate 1"
            className="w-full h-[350px] object-cover rounded-lg shadow-lg bounce-drop"
          />
          <p className="text-center text-gray-700 mt-2">Certificate of Achievement</p>
        </div>
        <div className="md:col-span-1">
          {/* Award3 */}
          <img
            src={award3}
            alt="Certificate 2"
            className="w-full h-[350px] object-cover rounded-lg shadow-lg bounce-drop"
          />
          <p className="text-center text-gray-700 mt-2">Parents Choice Award - 2021</p>
        </div>
        <div className="md:col-span-1">
          {/* Award4 */}
          <img
            src={award4}
            alt="Award Plate"
            className="w-full h-[350px] object-cover rounded-lg shadow-lg bounce-drop"
          />
          <p className="text-center text-gray-700 mt-2">Award Plate</p>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="mt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={facility}
              alt="Facilities"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">Facilities</h3>
          </div>
          <div className="relative">
            <img
              src={sports}
              alt="Sports"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">Sports</h3>
          </div>
          <div className="relative">
            <img
              src={achievement}
              alt="Academic Achievements"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">Academic Achievements</h3>
          </div>
          <div className="relative">
            <img
              src={events}
              alt="Events"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">Events</h3>
          </div>
          <div className="relative">
            <img
              src={champions}
              alt="Championships"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">Championships</h3>
          </div>
          <div className="relative">
            <img
              src={placement}
              alt="University Placements"
              className="w-full h-auto rounded-lg shadow-lg bounce-drop"
            />
            <h3 className="text-center text-green-700 mt-4">University Placements</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
