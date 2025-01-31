import React, { useState, useEffect } from 'react';
import { Computer, ShoppingCart } from 'lucide-react';

const PCCard = ({ computer }) => (
  <div className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg p-4 m-2 w-64 transform transition hover:scale-105">
    <div className="bg-zinc-800 p-4 rounded-t-lg">
      <Computer className="mx-auto text-zinc-500" size={64} />
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold text-zinc-100 truncate">{computer.brand}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-zinc-400">{computer.type}</span>
        <span className="text-purple-500 font-semibold">${computer.price}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-2 h-12 overflow-hidden">{computer.specs}</p>
      <button className="w-full bg-purple-800 text-white py-2 rounded-md mt-4 hover:bg-purple-700 transition">
        Configure & Buy
      </button>
    </div>
  </div>
);

const PCShopApp = () => {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5005/api/computers')
      .then(response => response.json())
      .then(data => {
        setComputers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching computers:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-zinc-900 text-zinc-400 text-center text-2xl p-4">Loading...</div>;

  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-zinc-100">PC Marketplace</h1>
        <ShoppingCart className="text-zinc-500 hover:text-zinc-200" size={28} />
      </header>
      <div className="flex flex-wrap justify-center">
        {computers.map(computer => (
          <PCCard key={computer.id} computer={computer} />
        ))}
      </div>
    </div>
  );
};

export default PCShopApp;