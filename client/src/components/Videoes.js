import React from 'react';

function Videoes() {
  return (
    <div className="p-8 md:p-16 bg-gray-100">
      {/* Welcome Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          WELCOME TO BISHOP COTTON BOYS' SCHOOL!
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          After standing tall for 155 glorious years, Bishop Cotton Boys’ School has won the accolade of the 
          "Eton of the East" and stands out as Bangalore’s leading school, one of India’s three top-ranked schools, 
          and the No: 1 among all metro schools in India. The school has a strength of around 6000 students who have 
          gone on to shine in different walks of life, all over the world. The school is affiliated with the 
          Council for Indian School Certificate Examinations (CISCE). It offers the ICSE curriculum (Indian 
          Certificate of Secondary Education) at the Std 10 level, and the ISC curriculum (Indian School Certificate) 
          at the Std 12 level where Science, Commerce, and Humanities are the available options as streams of study.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          VISION AND MISSION
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Cottons has always stood for discipline and the moulding of character of its students to ensure that it will 
          not crumble when tested in the crucible of adulthood. This Institution prides itself in imparting quality 
          education while preparing the students for the competitive world outside the classroom through its meticulously 
          envisioned House system. Be it debate, sports or even Model United Nations Conferences, Cottons has repeatedly 
          proven that the student minds produced by this Institution have pleasantly surprised many, while proving that 
          Cottons is an unstoppable force in the world of extra-curriculars.
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
          The School strives to provide opportunities for the development of leadership qualities that can be utilized 
          in the future for the creation of a better India which can hold its head high in the community of nations.
        </p>
      </div>

      {/* School Motto Section */}
      <div className="bg-blue-700 text-white rounded-lg p-6 mt-10">
        <h2 className="text-xl md:text-2xl font-semibold">"ON STRAIGHT ON! ON COTTONIANS ON!"</h2>
      </div>
    </div>
  );
};

export default Videoes;
