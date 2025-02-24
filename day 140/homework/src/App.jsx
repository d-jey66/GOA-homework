import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Banana, Citrus, Apple, Salad, Sparkles, ArrowRight, Scale, Target } from 'lucide-react';
import woman from './assets/woman.png';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const bananaRef = useRef(null);
  const trackingRef = useRef(null);
  const statsRef = useRef(null);

  const foodItems = [
    { name: 'Banana', icon: Banana, color: '#FFD700', hoverColor: '#FFC000' },
    { name: 'Citrus', icon: Citrus, color: '#FF6B2C', hoverColor: '#FF4500' },
    { name: 'Apple', icon: Apple, color: '#FF3B30', hoverColor: '#DC2626' },
    { name: 'Salad', icon: Salad, color: '#34C759', hoverColor: '#22C55E' }
  ];

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(".floating-girl",
      { y: 0 },
      { y: -20, duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut" }
    );

    gsap.fromTo(trackingRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: trackingRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(".food-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".food-card",
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-[#15153F] flex items-center gap-2">
          nufruit <Sparkles className="text-yellow-400" size={20} />
        </div>
        <button className="px-4 py-2 rounded-lg bg-gray-50 text-[#15153F] text-sm cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
          Our app <ArrowRight size={16} />
        </button>
      </nav>

      <section ref={heroRef} className="container mx-auto px-6 pt-12 pb-24">
        <div className="flex items-start justify-between">
          <div className="max-w-md pt-12">
            <h1 className="text-[56px] font-bold text-[#15153F] leading-tight mb-6">
              Life Changing weight loss.
            </h1>
            <div className="flex items-center gap-1 mb-8">
              <span className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded text-sm transform hover:scale-110 transition-transform cursor-pointer">F</span>
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded text-sm transform hover:scale-110 transition-transform cursor-pointer">O</span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded text-sm transform hover:scale-110 transition-transform cursor-pointer">2</span>
              <span className="ml-2 text-sm">Track easy 🍌</span>
            </div>
            <button className="px-6 py-3 bg-[#15153F] text-white rounded-lg text-sm cursor-pointer hover:bg-[#2a2a5a] transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
              Start Now
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="floating-girl relative w-[450px]">
            <img src={woman} alt="Woman illustration" className="w-full" />
          </div>
        </div>
      </section>

      <section ref={trackingRef} className="py-20 relative">
        <div className="absolute inset-0 bg-[#FDF8F2] rounded-[40px]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-start justify-between">
            <div className="max-w-md">
              <h2 className="text-[40px] font-bold text-[#15153F] mb-4 flex items-center gap-3">
                Track anywhere, anytime <Scale className="text-blue-500" />
              </h2>
              <p className="text-gray-500 mb-6">
                Over 250,000 foods with photos. Plus barcode scanning App.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {foodItems.map(({ name, icon: Icon, color, hoverColor }) => (
                <div key={name}
                  className="food-card bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
                  style={{ borderLeft: `4px solid ${color}` }}>
                  <div className="w-14 h-14 mb-2 flex items-center justify-center bg-opacity-10 rounded-lg">
                    <Icon
                      size={24}
                      style={{ color: color }}
                      className="transform hover:rotate-12 transition-transform"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{name}</p>
                </div>

              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-[40px] font-bold text-[#15153F] mb-4 flex items-center justify-center gap-3">
              Set your own targets <Target className="text-red-500" />
            </h2>
            <p className="text-gray-500 mb-12">
              Our Well Balanced goal is the one we recommend for most people. However, if you have specific dietary requirements.
            </p>
            <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#15153F]">Today, 14 January</span>
                <span className="text-[#15153F] font-semibold">1,297 kcal</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="group">
                  <div className="text-sm text-gray-500">Intake</div>
                  <div className="text-lg font-medium group-hover:text-blue-500 transition-colors">928 kcal</div>
                </div>
                <div className="group">
                  <div className="text-sm text-gray-500">Burned</div>
                  <div className="text-lg font-medium group-hover:text-red-500 transition-colors">1,298 kcal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FF] py-20 rounded-[40px]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[40px] font-bold text-[#15153F] mb-8">
            Join free for 7 days
          </h2>
          <button className="px-6 py-3 bg-[#15153F] text-white rounded-lg inline-flex items-center gap-2 cursor-pointer hover:bg-[#2a2a5a] transition-all duration-300 hover:scale-105 group">
            <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v6l5 3-1 1.5-6-3.5V7h2z" />
            </svg>
            Get on App Store
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;