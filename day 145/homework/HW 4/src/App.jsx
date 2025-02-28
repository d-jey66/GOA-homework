import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Online Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul className="space-y-2">
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center">
                  <span>{item.name} - ${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 font-semibold">
              <p>Total Price: ${getTotalPrice()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
