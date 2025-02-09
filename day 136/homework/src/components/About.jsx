import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Trophy, Target } from 'lucide-react';

export const About = () => {
  console.log('About is working');
  useEffect(() => {
    gsap.from('.about-content', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    gsap.to('.about-content', {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div id="about" className="min-h-100px bg-black py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="about-content">
          <h2 className="text-blue-500 text-4xl md:text-6xl font-bold mb-8">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-blue-900/20 p-6 md:p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="text-blue-500" size={32} />
                <h3 className="text-white text-xl md:text-2xl font-bold">Our Legacy</h3>
              </div>
              <p className="text-gray-300">
                For over two decades, Rockstar Games has been pushing the boundaries
                of interactive entertainment with groundbreaking games that define genres
                and captivate audiences worldwide.
              </p>
            </div>
            <div className="bg-blue-900/20 p-6 md:p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Target className="text-blue-500" size={32} />
                <h3 className="text-white text-xl md:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300">
                We continue to push the boundaries of what's possible in gaming,
                creating immersive worlds and unforgettable stories that resonate
                with players around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};