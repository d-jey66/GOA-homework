import React from 'react';

function DriftEventBlog() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <img 
        src="https://rim.ge/wp-content/uploads/2021/06/bull-1490x745.jpg" 
        alt="Rustavi Drift Event"
        className="w-full h-94 object-cover rounded-md mb-4"
      />
      
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Rustavi Drift Event
      </h2>

      <p className="text-lg text-gray-700 mb-4">
        Join us for an exhilarating drift event in Rustavi, Georgia! This high-speed event will feature 8 skilled participants showcasing their drift techniques on one of the region's most thrilling tracks.
      </p>

      <div className="text-lg text-gray-700 mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Event Details:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Date: November 10, 2024</li>
          <li>Location: Rustavi International Motorpark, Georgia</li>
          <li>Participants: 8 experienced drivers</li>
          <li>Event Highlights: High-speed drifting, stunts, and adrenaline-fueled action!</li>
        </ul>
      </div>

      <button className="mt-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">
        Buy Tickets
      </button>
    </div>
  );
}

export default DriftEventBlog;
