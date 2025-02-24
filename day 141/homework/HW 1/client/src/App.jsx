import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function App() {
  const [phones, setPhones] = useState([]);
  const [error, setError] = useState('');
  const [newPhone, setNewPhone] = useState({
    model: '',
    brand: '',
    year: '',
    description: '',
    price: ''
  });
  const phonesRef = useRef([]);

  useEffect(() => {
    fetchPhones();
  }, []);

  useEffect(() => {
    if (phones.length > 0) {
      gsap.from(phonesRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }, [phones]);

  const fetchPhones = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/phones');
      const data = await response.json();
      setPhones(data);
    } catch (error) {
      setError('Failed to fetch phones');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/phones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPhone),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      
      setNewPhone({
        model: '',
        brand: '',
        year: '',
        description: '',
        price: ''
      });
      fetchPhones();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRequest = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/phones/${id}/request`, {
        method: 'POST'
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }
      
      fetchPhones();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Phone Models</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Add New Phone Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Model"
              value={newPhone.model}
              onChange={(e) => setNewPhone({ ...newPhone, model: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Brand"
              value={newPhone.brand}
              onChange={(e) => setNewPhone({ ...newPhone, brand: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="number"
              placeholder="Year"
              value={newPhone.year}
              onChange={(e) => setNewPhone({ ...newPhone, year: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newPhone.price}
              onChange={(e) => setNewPhone({ ...newPhone, price: e.target.value })}
              className="border rounded p-2"
              required
            />
          </div>
          <textarea
            placeholder="Description"
            value={newPhone.description}
            onChange={(e) => setNewPhone({ ...newPhone, description: e.target.value })}
            className="border rounded p-2 w-full mt-4"
            rows="3"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Add Phone
          </button>
        </form>

        {/* Phone List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((phone, index) => (
            <div
              key={phone._id}
              ref={el => phonesRef.current[index] = el}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">{phone.model}</h3>
              <p className="text-gray-600 mb-1">{phone.brand}</p>
              <p className="text-gray-600 mb-1">Year: {phone.year}</p>
              <p className="text-gray-600 mb-2">Price: ${phone.price}</p>
              <p className="text-gray-700 mb-4">{phone.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Requests: {phone.requestCount}/{phone.maxRequests}
                </span>
                <button
                  onClick={() => handleRequest(phone._id)}
                  disabled={phone.requestCount >= phone.maxRequests}
                  className={`px-4 py-2 rounded ${
                    phone.requestCount >= phone.maxRequests
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Request Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}