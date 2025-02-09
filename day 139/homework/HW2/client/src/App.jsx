import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedForecast, setSelectedForecast] = useState(null);
  const forecastRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/weather')
      .then(response => response.json())
      .then(data => setForecasts(data))
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  useEffect(() => {
    if (selectedForecast && forecastRef.current) {
      gsap.from(forecastRef.current, { opacity: 0, y: -20, duration: 0.5 });
    }
  }, [selectedForecast]);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = forecasts.find(item => item.city.toLowerCase() === searchTerm.trim().toLowerCase());
    setSelectedForecast(found || null);
  };

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-white mb-8">ამინდის პროგნოზი</h1>
      <form onSubmit={handleSearch} className="mb-6 flex">
        <input 
          type="text"
          placeholder="შეიყვანეთ ქალაქის სახელი..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition"
        >
          მოძებნა
        </button>
      </form>
      {selectedForecast ? (
        <div 
          ref={forecastRef}
          className="bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-md text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedForecast.city}</h2>
          <p className="text-xl">{selectedForecast.temperature}</p>
          <p className="mt-2">{selectedForecast.condition}</p>
          <p className="mt-2">თხელობა: {selectedForecast.humidity}</p>
          <p className="mt-2">ქარი: {selectedForecast.wind}</p>
          {selectedForecast.icon && (
            <img 
              src={selectedForecast.icon} 
              alt={selectedForecast.condition} 
              className="w-16 h-16 mx-auto mt-4" 
            />
          )}
        </div>
      ) : (
        searchTerm && (
          <div className="text-red-400">ასეთი ქალაქის პროგნოზი ვერ მოიძებნა.</div>
        )
      )}
    </div>
  );
};

export default App;
