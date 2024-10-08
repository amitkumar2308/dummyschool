// NewsCard.js
import React from 'react';

const NewsCard = ({ title, description, date }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default NewsCard;
