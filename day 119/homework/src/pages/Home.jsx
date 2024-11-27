
import React from 'react';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation />
      <div className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
          Football World
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Dive into the exciting world of football, exploring top teams, legendary players, and thrilling leagues.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <a 
            href="/teams" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Teams
          </a>
          <a 
            href="/players" 
            className="bg-gray-200 text-blue-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            View Players
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;