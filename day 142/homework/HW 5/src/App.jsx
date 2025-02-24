import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackInTimeWebsite = () => {
  const headerRef = useRef(null);
  const sectionRefs = useRef([]);
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const headerElement = headerRef.current;
    const sections = sectionRefs.current;
    const timeline = timelineRef.current;
    
    gsap.to(headerElement, {
      scrollTrigger: {
        trigger: headerElement,
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      opacity: 0.2,
      scale: 0.9,
      y: -50
    });
    
    sections.forEach((section, index) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: true
          }
        }
      );
    });
    
    gsap.fromTo(timeline,
      { width: "0%" },
      { 
        width: "100%", 
        scrollTrigger: {
          trigger: timeline,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header 
        ref={headerRef} 
        className="h-screen flex flex-col items-center justify-center relative"
        style={{ 
          backgroundImage: "url('/api/placeholder/1200/800')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Back In Time</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">The documentary film about the cultural impact of Back to the Future</p>
          <div className="mt-8">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium transition duration-300">Watch Trailer</button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section ref={addToRefs} className="mb-24">
          <h2 className="text-4xl font-bold mb-6">About the Documentary</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Released in 2015, "Back in Time" is a documentary film that looks at the cultural impact of the Back to the Future trilogy. The film explores how this iconic franchise has influenced pop culture and resonated with fans for generations.
              </p>
              <p className="text-lg">
                Featuring interviews with the cast, crew, and fans, the documentary provides an in-depth look at how the films were created and the enduring legacy they've left on cinema.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:h-auto">
              <img src="/api/placeholder/600/400" alt="Back in Time documentary poster" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        
        <section ref={addToRefs} className="mb-24">
          <h2 className="text-4xl font-bold mb-6">Featured Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Michael J. Fox" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Michael J. Fox</h3>
                <p>The iconic actor who played Marty McFly shares his experiences on set and the impact the role had on his career.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Christopher Lloyd" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Christopher Lloyd</h3>
                <p>The eccentric Doc Brown discusses the cultural phenomenon and his character's lasting impression on science fiction.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Robert Zemeckis" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Robert Zemeckis</h3>
                <p>The director reveals behind-the-scenes stories and the challenges of bringing the time-travel trilogy to life.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section ref={addToRefs} className="mb-24">
          <h2 className="text-4xl font-bold mb-6">The Timeline</h2>
          <div className="relative py-12">
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-700"></div>
            <div ref={timelineRef} className="absolute top-0 left-0 w-0 h-full bg-red-600"></div>
            
            <div className="ml-8 mb-16 relative">
              <div className="absolute left-0 -translate-x-[calc(100%+2rem)] top-0 w-4 h-4 rounded-full bg-red-600"></div>
              <h3 className="text-2xl font-bold mb-2">1985</h3>
              <p>Release of the original Back to the Future film, directed by Robert Zemeckis.</p>
            </div>
            
            <div className="ml-8 mb-16 relative">
              <div className="absolute left-0 -translate-x-[calc(100%+2rem)] top-0 w-4 h-4 rounded-full bg-red-600"></div>
              <h3 className="text-2xl font-bold mb-2">1989-1990</h3>
              <p>Back to the Future Part II and Part III are released, completing the trilogy.</p>
            </div>
            
            <div className="ml-8 mb-16 relative">
              <div className="absolute left-0 -translate-x-[calc(100%+2rem)] top-0 w-4 h-4 rounded-full bg-red-600"></div>
              <h3 className="text-2xl font-bold mb-2">2015</h3>
              <p>"Back in Time" documentary is released, coinciding with the date Marty travels to in Back to the Future Part II.</p>
            </div>
          </div>
        </section>
        
        <section ref={addToRefs}>
          <h2 className="text-4xl font-bold mb-6">Watch the Documentary</h2>
          <div className="aspect-w-16 aspect-h-9 relative h-64 md:h-96 bg-gray-900 flex items-center justify-center">
            <img src="/api/placeholder/1200/675" alt="Documentary trailer thumbnail" className="w-full h-full object-cover opacity-50" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium transition duration-300 mr-4">Stream Now</button>
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-md font-medium transition duration-300">Learn More</button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Back In Time</h2>
            <p className="mb-6">2025 Back In Time Documentary</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BackInTimeWebsite;