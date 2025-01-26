import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Gamepad2, 
  Headphones, 
  Trophy, 
  Shield, 
  Star, 
  ShoppingCart, 
  ChevronRight 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GamingStoreLanding = () => {
  const [activeGame, setActiveGame] = useState(null);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const gamesRef = useRef(null);

  const featuredGames = [
    { 
      id: 1, 
      title: 'Cyberpunk 2077', 
      genre: 'Action RPG', 
      price: 59.99,
      image: '/api/placeholder/400/600'
    },
    { 
      id: 2, 
      title: 'Elden Ring', 
      genre: 'Fantasy Action', 
      price: 69.99,
      image: '/api/placeholder/400/600'
    },
    { 
      id: 3, 
      title: 'FIFA 24', 
      genre: 'Sports Simulation', 
      price: 49.99,
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
    <div className="bg-neutral-900 text-white min-h-screen">
      <div 
        ref={heroRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-2 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold text-red-500 mb-4">
            GameVerse
          </h1>
          <p className="text-xl text-neutral-300 mb-8">
            Ultimate Gaming Destination for Hardcore Gamers
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition flex items-center">
            Shop Now <ShoppingCart className="ml-2" size={20} />
          </button>
        </div>
        <div className="hidden md:block">
          <img 
            src="/api/placeholder/500/400" 
            alt="Gaming Setup" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div 
        ref={featuresRef} 
        className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6"
      >
        <div className="bg-neutral-800 p-6 rounded-lg text-center hover:bg-neutral-700 transition">
          <Gamepad2 className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Massive Game Library</h3>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg text-center hover:bg-neutral-700 transition">
          <Headphones className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Pro Accessories</h3>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg text-center hover:bg-neutral-700 transition">
          <Trophy className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">E-Sports</h3>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg text-center hover:bg-neutral-700 transition">
          <Shield className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-xl font-semibold">Warranty</h3>
        </div>
      </div>

      <div 
        ref={gamesRef} 
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Games</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredGames.map(game => (
            <div 
              key={game.id} 
              className="bg-neutral-800 rounded-lg overflow-hidden relative group"
              onMouseEnter={() => setActiveGame(game.id)}
              onMouseLeave={() => setActiveGame(null)}
            >
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{game.title}</h3>
                    <p className="text-neutral-400">{game.genre}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold mr-2">${game.price}</span>
                    <button className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-neutral-800 py-8 text-center">
        <p className="text-neutral-400">GameVerse</p>
      </footer>
    </div>
  );
};

export default GamingStoreLanding;