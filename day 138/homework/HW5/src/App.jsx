import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Map, Calendar, Compass, Globe, Star, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Tours = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const heroRef = useRef(null);
  const toursRef = useRef(null);

  useEffect(() => {
    // Animate hero section children from a slight offset and invisible (autoAlpha: 0) to visible.
    gsap.fromTo(
      heroRef.current.children,
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // Animate tour cards using ScrollTrigger.
    gsap.fromTo(
      ".tour-card",
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: toursRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup ScrollTriggers on unmount.
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const tours = [
    { name: "სვანეთი", price: "800₾", duration: "3 დღე", rating: 4.8 },
    { name: "კახეთი", price: "400₾", duration: "2 დღე", rating: 4.9 },
    { name: "აჭარა", price: "600₾", duration: "4 დღე", rating: 4.7 },
    { name: "რაჭა", price: "500₾", duration: "3 დღე", rating: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img src="/api/placeholder/1920/1080" alt="Travel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div
          ref={heroRef}
          className="relative z-10 h-full flex items-center justify-center text-white text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">მოგზაურობა საქართველოში</h1>
            <p className="text-xl md:text-2xl mb-8">აღმოაჩინე ულამაზესი ადგილები</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              დაჯავშნე ტური
            </button>
          </div>
        </div>
      </header>

      <section ref={toursRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">პოპულარული ტურები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <div key={index} className="tour-card bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={`/api/placeholder/400/300`}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span>{tour.rating}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                      დაჯავშნა
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Map className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">უნიკალური მარშრუტები</h3>
            <p className="text-gray-600">გამოცდილი გიდები და საუკეთესო ადგილები</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">მცირე ჯგუფები</h3>
            <p className="text-gray-600">კომფორტული მოგზაურობა მცირე ჯგუფებში</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">სრული მომსახურება</h3>
            <p className="text-gray-600">ტრანსპორტი, კვება და განთავსება</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">კონტაქტი</h3>
            <p className="text-gray-400">+995 555 12 34 56</p>
            <p className="text-gray-400">info@tours.ge</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">ტურები</h3>
            <ul className="space-y-2 text-gray-400">
              <li>საქართველო</li>
              <li>კავკასია</li>
              <li>ევროპა</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">სერვისები</h3>
            <ul className="space-y-2 text-gray-400">
              <li>ტრანსფერი</li>
              <li>გიდი</li>
              <li>სასტუმრო</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">სოციალური</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">FB</a>
              <a href="#" className="text-gray-400 hover:text-white">IG</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tours;
