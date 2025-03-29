import React, { useState, useEffect } from "react";

const quotes = [
  "Driving a Pagani is like taming a beast with elegance.",
  "Pagani: Where art meets engineering.",
  "Every Pagani is a masterpiece of speed and style.",
];

const PaganiPage = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-center mb-6">Pagani Automobili</h1>
      <img
        src="https://source.unsplash.com/featured/?pagani"
        alt="Pagani Supercar"
        className="w-full max-w-2xl rounded-2xl shadow-lg mb-6"
      />
      <p className="text-lg italic text-center">"{quote}"</p>
    </div>
  );
};

export default PaganiPage;
