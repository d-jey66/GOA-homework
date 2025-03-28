import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Car } from 'lucide-react';

const BMWShowcase = () => {
  useEffect(() => {
    const car = document.querySelector('.car-animation');
    const title = document.querySelector('.title-animation');
    const features = document.querySelectorAll('.feature-animation');

    gsap.fromTo(
      car,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      title,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      features,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'back.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden flex">
        <div className="w-1/2 bg-white flex items-center justify-center p-8">
          <div className="car-animation text-center">
            <div className="text-[300px] className='text-[#008FFF] mx-auto'"></div>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <div className="title-animation text-4xl font-bold bg-gradient-to-r from-[#008FFF] to-[#FF0000] bg-clip-text text-transparent mb-6">
            BMW M Power
          </div>
          <div className="feature-animation mb-4 p-3 bg-gray-100 rounded">
            <h3 className="font-semibold text-[#008FFF]">Speed</h3>
            <p className="text-gray-600">Ultimate performance</p>
          </div>
          <div className="feature-animation mb-4 p-3 bg-gray-100 rounded">
            <h3 className="font-semibold text-[#008FFF]">Technology</h3>
            <p className="text-gray-600">Cutting edge design</p>
          </div>
          <div className="feature-animation mb-4 p-3 bg-gray-100 rounded">
            <h3 className="font-semibold text-[#008FFF]">Power</h3>
            <p className="text-gray-600">Maximum driving experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMWShowcase;