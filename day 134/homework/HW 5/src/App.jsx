import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mountain, 
  TreePine, 
  Leaf, 
  Compass, 
  Bird, 
  Sun, 
  CloudRain, 
  Wind 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NatureLandingPage = () => {
  const [activeSection, setActiveSection] = useState('forest');
  const heroRef = useRef(null);
  const exploreRef = useRef(null);

  const naturalLocations = {
    forest: {
      title: 'Forest Expedition',
      description: 'Immerse yourself in ancient woodland ecosystems.',
      image: '/api/placeholder/800/600',
      features: [
        'Biodiversity Trails',
        'Wildlife Photography',
        'Guided Ecology Tours'
      ]
    },
    mountain: {
      title: 'Alpine Adventures',
      description: 'Discover high-altitude landscapes and breathtaking vistas.',
      image: '/api/placeholder/800/600',
      features: [
        'Peak Climbing',
        'Geological Exploration',
        'Altitude Ecosystem Studies'
      ]
    },
    coast: {
      title: 'Coastal Ecosystems',
      description: 'Explore marine environments and shoreline biodiversity.',
      image: '/api/placeholder/800/600',
      features: [
        'Marine Life Observation',
        'Reef Exploration',
        'Conservation Programs'
      ]
    }
  };

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
      exploreRef.current.children,
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: exploreRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <header className="bg-green-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Leaf className="mr-2" />
            <h1 className="text-2xl font-bold">NatureQuest</h1>
          </div>
          <nav className="space-x-6">
            <a href="#" className="hover:text-green-200">Expeditions</a>
            <a href="#" className="hover:text-green-200">Conservation</a>
            <a href="#" className="hover:text-green-200">About</a>
          </nav>
        </div>
      </header>

      <div 
        ref={heroRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-5xl font-bold text-green-900 mb-6">
            Explore Earth's Wild Realms
          </h2>
          <p className="text-xl text-green-700 mb-8">
            Immersive journeys through diverse natural landscapes
          </p>
          <button className="bg-green-600 text-white px-10 py-4 rounded-lg hover:bg-green-700 transition">
            Start Your Adventure
          </button>
        </div>
        <div className="hidden md:block">
          <img 
            src="/api/placeholder/600/400" 
            alt="Nature Landscape" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div 
        ref={exploreRef} 
        className="container mx-auto px-4 py-16"
      >
        <h3 className="text-4xl font-bold text-center mb-12 text-green-900">
          Explore Ecosystems
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(naturalLocations).map(([key, location]) => (
            <div 
              key={key}
              onClick={() => setActiveSection(key)}
              className={`
                bg-white rounded-xl p-6 shadow-lg cursor-pointer transition 
                ${activeSection === key ? 'border-4 border-green-600' : ''}
                hover:scale-105
              `}
            >
              <div className="flex justify-between items-center mb-4">
                {key === 'forest' && <TreePine className="text-green-600" size={48} />}
                {key === 'mountain' && <Mountain className="text-blue-600" size={48} />}
                {key === 'coast' && <Bird className="text-teal-600" size={48} />}
                <Compass className="text-gray-400" />
              </div>
              <h4 className="text-2xl font-semibold mb-2 text-green-900">
                {location.title}
              </h4>
              <p className="text-gray-600 mb-4">{location.description}</p>
              <ul className="space-y-2">
                {location.features.map(feature => (
                  <li key={feature} className="flex items-center">
                    <Leaf className="mr-2 text-green-500" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Conservation Mission</h3>
            <p className="text-xl mb-8">
              We're committed to protecting and preserving the world's most vulnerable ecosystems through research, education, and direct action.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Sun className="mr-2" />
                <span>Climate Research</span>
              </div>
              <div className="flex items-center">
                <CloudRain className="mr-2" />
                <span>Habitat Protection</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Conservation Efforts" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">NatureQuest</h4>
            <p>Exploring and Protecting Our Planet's Natural Wonders</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-200">Expeditions</a></li>
              <li><a href="#" className="hover:text-green-200">Research</a></li>
              <li><a href="#" className="hover:text-green-200">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Wind className="hover:text-green-200 cursor-pointer" />
              <Bird className="hover:text-green-200 cursor-pointer" />
              <Leaf className="hover:text-green-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NatureLandingPage;