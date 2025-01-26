import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plane, Mountain, Map, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TourismLandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1, 
        ease: 'back.out(1.7)' 
      }
    );

    gsap.fromTo(
      featuresRef.current.children,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
          Voyager
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Elevate Your Travel Experience
        </p>
        <button className="bg-emerald-500 text-white px-10 py-4 rounded-lg hover:bg-emerald-600 transition-colors shadow-lg">
          Plan Your Journey
        </button>
      </div>

      <div 
        ref={featuresRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group">
          <Plane className="mx-auto text-emerald-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">Global Expeditions</h3>
          <p className="text-slate-500 text-center">Curated International Journeys</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group">
          <Mountain className="mx-auto text-sky-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">Adventure Trips</h3>
          <p className="text-slate-500 text-center">Thrilling Expedition Packages</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group">
          <Map className="mx-auto text-indigo-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">Custom Routes</h3>
          <p className="text-slate-500 text-center">Personalized Travel Planning</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group">
          <Globe className="mx-auto text-rose-500 mb-4 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-xl font-semibold mb-2 text-center text-slate-700">Global Network</h3>
          <p className="text-slate-500 text-center">24/7 Traveler Support</p>
        </div>
      </div>

      <footer className="mt-auto bg-slate-800 text-white py-6 text-center">
        <p className="text-sm">Voyager Travel Experiences</p>
      </footer>
    </div>
  );
};

export default TourismLandingPage;