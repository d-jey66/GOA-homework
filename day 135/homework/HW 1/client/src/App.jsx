import React, { useState, useEffect } from 'react';
import { Smartphone, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => (
  <div className="bg-zinc-900 border border-zinc-700 text-zinc-200 rounded-lg p-4 m-2 w-64 transform transition hover:scale-105">
    <div className="bg-zinc-800 p-4 rounded-t-lg">
      <Smartphone className="mx-auto text-zinc-400" size={64} />
    </div>
    <div className="p-3">
      <h2 className="text-xl font-bold text-zinc-100 truncate">{product.name}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="text-zinc-400">{product.category}</span>
        <span className="text-emerald-500 font-semibold">${product.price}</span>
      </div>
      <p className="text-sm text-zinc-500 mt-2 h-12 overflow-hidden">{product.description}</p>
      <button className="w-full bg-emerald-700 text-white py-2 rounded-md mt-4 hover:bg-emerald-600 transition">
        Add to Cart
      </button>
    </div>
  </div>
);

const SamsungApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5021/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-zinc-900 text-zinc-400 text-center text-2xl p-4">Loading...</div>;

  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <div className="flex items-center space-x-4">
          <Smartphone className="text-zinc-400" size={32} />
          <h1 className="text-3xl font-bold text-zinc-100">Samsung Store</h1>
        </div>
        <ShoppingCart className="text-zinc-400 hover:text-zinc-200" size={28} />
      </header>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SamsungApp;