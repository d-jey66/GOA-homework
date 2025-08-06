"use client";
import React, { useEffect, useRef } from 'react';
import { Car, Users, Mail, Target } from 'lucide-react';
import { gsap } from 'gsap';

const FactsInNumbers = () => {
  const carRef = useRef<HTMLDivElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const milesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carRef.current) {
      gsap.to(carRef.current, {
        innerText: 540,
        snap: { innerText: 1 },
        duration: 2,
        ease: "power1.inOut",
        onUpdate: function() {
          if (carRef.current) {
            carRef.current.textContent = Math.floor(this.targets()[0].innerText) + '+';
          }
        }
      });
    }

    if (customersRef.current) {
      gsap.to(customersRef.current, {
        innerText: 20000,
        snap: { innerText: 1 },
        duration: 2,
        ease: "power1.inOut",
        onUpdate: function() {
          if (customersRef.current) {
            const value = Math.floor(this.targets()[0].innerText);
            customersRef.current.textContent = Math.floor(value / 1000) + 'k+';
          }
        }
      });
    }

    if (yearsRef.current) {
      gsap.to(yearsRef.current, {
        innerText: 25,
        snap: { innerText: 1 },
        duration: 2,
        ease: "power1.inOut",
        onUpdate: function() {
          if (yearsRef.current) {
            yearsRef.current.textContent = Math.floor(this.targets()[0].innerText) + '+';
          }
        }
      });
    }

    if (milesRef.current) {
      gsap.to(milesRef.current, {
        innerText: 20000000,
        snap: { innerText: 1 },
        duration: 2,
        ease: "power1.inOut",
        onUpdate: function() {
          if (milesRef.current) {
            const value = Math.floor(this.targets()[0].innerText);
            milesRef.current.textContent = Math.floor(value / 1000000) + 'm+';
          }
        }
      });
    }
  }, []);

  return (
    <div className="bg-purple-600 py-16 px-4 rounded-3xl my-16 mx-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Facts In Numbers
        </h2>
        
        <p className="text-purple-100 mb-12 max-w-2xl mx-auto">
          Amet orle hac orci lacus. Facilibus ipsum arcu lectus nibh sapien bibendum ullamcorper
          in. Diam tincidunt tincidunt erus ac tempor fermentum
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6">
            <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
              <Car className="w-6 h-6" />
            </div>
            <div ref={carRef} className="text-3xl font-bold text-gray-800 mb-1">
              0+
            </div>
            <div className="text-gray-600">Cars</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <div ref={customersRef} className="text-3xl font-bold text-gray-800 mb-1">
              0k+
            </div>
            <div className="text-gray-600">Customers</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <div ref={yearsRef} className="text-3xl font-bold text-gray-800 mb-1">
              0+
            </div>
            <div className="text-gray-600">Years</div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <div ref={milesRef} className="text-3xl font-bold text-gray-800 mb-1">
              0m+
            </div>
            <div className="text-gray-600">Miles</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsInNumbers;