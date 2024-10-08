import React from 'react';
import bishop from '../assets/bishoppng.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <img
            src={bishop} // Replace with logo URL
            alt="School Logo"
            className="mb-4 w-24 h-24" // Adjust the width and height
          />
          <p>Bishop Cotton Boys' School</p>
          <p>15, Residency Road, Bangalore-560025</p>
          <p>+91-80-40527888</p>
          <p>Fax: +91-80-22223536</p>
          <p>Email: <a href="mailto:bcbs@bishopcottonboysschool.edu.in" className="text-gray-300">bcbs@bishopcottonboysschool.edu.in</a></p>
        </div>

        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="font-bold mb-4">Useful Links:</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Academics</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Co-Curricular</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Sports Events</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">News</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Sitemap</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Alumni</a></li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg py-2 px-4 text-black mr-2"
          />
          <button className="bg-white text-green-900 rounded-lg py-2 px-4">Search</button>
          <div className="flex justify-center md:justify-end mt-4">
            <a href="#" className="text-gray-300 mx-2 hover:text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-6 text-center">
        <p>&copy; Bishop Cotton Boys' School, 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
