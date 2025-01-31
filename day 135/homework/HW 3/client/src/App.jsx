import React, { useState, useEffect } from 'react';
import { MapPin, Compass } from 'lucide-react';

const TourCard = ({ tour }) => (
  <div className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg p-4 m-2 w-64 transform transition hover:scale-105">
    <div className="bg-zinc-800 p-4 rounded-t-lg">
      <MapPin className="mx-auto text-zinc-500" size={64} />
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold text-zinc-100 truncate">{tour.name}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-zinc-400">{tour.destination}</span>
        <span className="text-teal-500 font-semibold">${tour.price}</span>
      </div>
      <div className="flex items-center text-zinc-500 mt-1">
        <Compass size={16} className="mr-2" />
        <span>{tour.duration}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-2 h-12 overflow-hidden">{tour.description}</p>
      <button className="w-full bg-teal-800 text-white py-2 rounded-md mt-4 hover:bg-teal-700 transition">
        Book Tour
      </button>
    </div>
  </div>
);

const TouristAgencyApp = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5003/api/tours')
      .then(response => response.json())
      .then(data => {
        setTours(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tours:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-zinc-900 text-zinc-400 text-center text-2xl p-4">Loading...</div>;

  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-zinc-100">Travel Adventures</h1>
        <Compass className="text-zinc-500 hover:text-zinc-200" size={28} />
      </header>
      <div className="flex flex-wrap justify-center">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TouristAgencyApp;