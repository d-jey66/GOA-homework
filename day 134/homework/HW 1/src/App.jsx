import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, Turtle, CloudSunRain, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SeaTurtleLandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );

    gsap.fromTo(
      featuresRef.current.children,
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Sea Turtle Conservation
        </h1>
        <p className="text-xl text-blue-700 max-w-2xl mx-auto mb-8">
          Protecting and Preserving Sea Turtle Ecosystems Worldwide
        </p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition">
          Learn More
        </button>
      </div>

      <div 
        ref={featuresRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Waves className="mx-auto text-blue-500 mb-4" size={64} />
          <h3 className="text-xl font-semibold mb-2">Habitat Protection</h3>
          <p className="text-gray-600">Preserving Marine Ecosystems</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Turtle className="mx-auto text-green-500 mb-4" size={64} />
          <h3 className="text-xl font-semibold mb-2">Turtle Research</h3>
          <p className="text-gray-600">Scientific Monitoring Programs</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <CloudSunRain className="mx-auto text-teal-500 mb-4" size={64} />
          <h3 className="text-xl font-semibold mb-2">Environmental Protection</h3>
          <p className="text-gray-600">Reducing Plastic Pollution</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Rocket className="mx-auto text-indigo-500 mb-4" size={64} />
          <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
          <p className="text-gray-600">Raising Awareness</p>
        </div>
      </div>

      <footer className="mt-auto bg-blue-900 text-white py-8 text-center">
        <p>Sea Turtle Conservation Association</p>
      </footer>
    </div>
  );
};

export default SeaTurtleLandingPage;