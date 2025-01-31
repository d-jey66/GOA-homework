import React, { useState, useEffect } from 'react';
import { Smartphone, Filter, ShoppingBag } from 'lucide-react';

const PhoneCard = ({ phone }) => (
  <div className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg p-4 m-2 w-64 transform transition hover:scale-105">
    <div className="bg-zinc-800 p-4 rounded-t-lg">
      <Smartphone className="mx-auto text-zinc-500" size={64} />
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold text-zinc-100 truncate">{phone.brand} {phone.model}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-zinc-400">{phone.category}</span>
        <span className="text-indigo-500 font-semibold">${phone.price}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-2 h-12 overflow-hidden">{phone.description}</p>
      <button className="w-full bg-indigo-800 text-white py-2 rounded-md mt-4 hover:bg-indigo-700 transition">
        Buy Now
      </button>
    </div>
  </div>
);

const PhoneShopApp = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5002/api/phones')
      .then(response => response.json())
      .then(data => {
        setPhones(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching phones:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-zinc-900 text-zinc-400 text-center text-2xl p-4">Loading...</div>;

  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-zinc-100">Phone Marketplace</h1>
        <div className="flex items-center space-x-4">
          <Filter className="text-zinc-500 hover:text-zinc-200" />
          <ShoppingBag className="text-zinc-500 hover:text-zinc-200" />
        </div>
      </header>
      <div className="flex flex-wrap justify-center">
        {phones.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default PhoneShopApp;