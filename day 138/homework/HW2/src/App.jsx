import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dumbbell, Users, Calendar, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FitnessCenter = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const classesRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    });
    gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.in"
      });

    const stats = gsap.utils.toArray('.stat-number');
    stats.forEach(stat => {
      gsap.to(stat, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        },
        innerText: stat.dataset.value,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power1.inOut"
      });
    });

    gsap.from(".class-card", {
      scrollTrigger: {
        trigger: classesRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
    gsap.to(".class-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ფიტნეს ცენტრი</h1>
          <p className="text-xl md:text-2xl mb-8">შექმენი შენი საუკეთესო ვერსია</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
            გაწევრიანება
          </button>
        </div>
      </section>

      <section ref={statsRef} className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-blue-500 mb-2" data-value="1000">
              0
            </div>
            <p className="text-gray-300">აქტიური წევრი</p>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-blue-500 mb-2" data-value="50">
              0
            </div>
            <p className="text-gray-300">მწვრთნელი</p>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-blue-500 mb-2" data-value="100">
              0
            </div>
            <p className="text-gray-300">კლასი კვირაში</p>
          </div>
          <div className="text-center">
            <div className="stat-number text-4xl font-bold text-blue-500 mb-2" data-value="24">
              0
            </div>
            <p className="text-gray-300">საათი ღიაა</p>
          </div>
        </div>
      </section>

      <section ref={classesRef} className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">ჩვენი კლასები</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Dumbbell, name: "ძალისმიერი" },
            { icon: Users, name: "ჯგუფური" },
            { icon: Trophy, name: "კროსფიტი" }
          ].map((classType, index) => (
            <div key={index} className="class-card bg-gray-700 p-6 rounded-lg">
              <classType.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{classType.name}</h3>
              <p className="text-gray-300">პროფესიონალი მწვრთნელები</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                დაჯავშნა
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FitnessCenter;