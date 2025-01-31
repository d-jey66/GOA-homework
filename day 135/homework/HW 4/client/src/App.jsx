import React, { useState, useEffect } from 'react';
import { Car, ShoppingCart } from 'lucide-react';

const CarCard = ({ car }) => (
  <div className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg p-4 m-2 w-64 transform transition hover:scale-105">
    <div className="bg-zinc-800 p-4 rounded-t-lg">
      <Car className="mx-auto text-zinc-500" size={64} />
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold text-zinc-100 truncate">{car.brand} {car.model}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-zinc-400">{car.type}</span>
        <span className="text-orange-500 font-semibold">${car.price}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-2 h-12 overflow-hidden">{car.description}</p>
      <button className="w-full bg-orange-800 text-white py-2 rounded-md mt-4 hover:bg-orange-700 transition">
        Buy Car
      </button>
    </div>
  </div>
);

const CarShopApp = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5004/api/cars')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-zinc-900 text-zinc-400 text-center text-2xl p-4">Loading...</div>;

  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-zinc-100">Car Marketplace</h1>
        <ShoppingCart className="text-zinc-500 hover:text-zinc-200" size={28} />
      </header>
      <div className="flex flex-wrap justify-center">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarShopApp;