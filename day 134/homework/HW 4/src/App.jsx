import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Skull, 
  BookOpen, 
  Film, 
  ChevronRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BatmanLandingPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  const batmanContent = [
    { 
      id: 1, 
      title: 'Dark Knight Returns', 
      description: 'Graphic Novel', 
      image: '/api/placeholder/400/600'
    },
    { 
      id: 2, 
      title: 'Arkham City', 
      description: 'Video Game', 
      image: '/api/placeholder/400/600'
    },
    { 
      id: 3, 
      title: 'Batman (2022)', 
      description: 'Movie', 
      image: '/api/placeholder/400/600'
    }
  ];

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
    <div className="bg-black text-white min-h-screen">
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">
            BATMAN
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Gotham's Dark Guardian. Protector of the Night.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-600 transition flex items-center">
            Explore Universe <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
        <div className="hidden md:block">
          <img 
            src="/api/placeholder/500/400" 
            alt="Batman" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div 
        ref={featuresRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6"
      >
        <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
          <Shield className="mx-auto text-yellow-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Justice</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
          <Skull className="mx-auto text-yellow-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Villains</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
          <BookOpen className="mx-auto text-yellow-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Comics</h3>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition">
          <Film className="mx-auto text-yellow-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Movies</h3>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Batman Universe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {batmanContent.map(item => (
            <div 
              key={item.id} 
              className="bg-gray-900 rounded-lg overflow-hidden relative group"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-gray-400">Batman Universe</p>
      </footer>
    </div>
  );
};

export default BatmanLandingPage;