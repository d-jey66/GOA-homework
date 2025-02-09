import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { CreditCard, User } from 'lucide-react';

export default function Payment() {
  useEffect(() => {
    gsap.from('.payment-form', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
    gsap.from('.payment-summary', {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 to-black text-white px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="payment-form bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-black mb-6">Payment Details</h2>
            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full bg-gray-700 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full bg-gray-700 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Pay Now
              </button>
            </form>
          </div>
          <div className="payment-summary bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-black mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Product</span>
                <span>Game Pass</span>
              </div>
              <div className="flex justify-between">
                <span>Price</span>
                <span>$59.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$5.99</span>
              </div>
              <div className="border-t border-gray-600 pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$65.98</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};