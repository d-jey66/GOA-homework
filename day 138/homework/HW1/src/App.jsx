import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Gem, ShoppingBag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HandmadeJewelry = () => {
  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
    gsap.to(".product-card", {
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      immediateRender: false
    });
    

    gsap.from(".feature", {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2
    });
    gsap.to(".feature", {
      x: 0,
      opacity: 1,
      duration: 0.6
    });
    
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      <header ref={headerRef} className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6">
          ხელნაკეთი სამკაულები
        </h1>
        <p className="text-xl text-rose-600 mb-8">
          უნიკალური და ხელნაკეთი სამკაულები თქვენთვის
        </p>
        <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors">
          კოლექციის ნახვა
        </button>
      </header>

      <section ref={productsRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="product-card bg-white p-6 rounded-lg shadow-lg">
              <div className="h-48 bg-rose-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">სამკაული {item}</h3>
              <p className="text-gray-600 mb-4">უნიკალური ხელნაკეთი დიზაინი</p>
              <button className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition-colors">
                შეძენა
              </button>
            </div>
          ))}
        </div>
      </section>

      <section ref={featuresRef} className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature flex flex-col items-center text-center">
            <Gem className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">უნიკალური დიზაინი</h3>
            <p className="text-gray-600">ყველა სამკაული იქმნება ინდივიდუალურად</p>
          </div>
          <div className="feature flex flex-col items-center text-center">
            <Camera className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">ფოტო გალერეა</h3>
            <p className="text-gray-600">ნახეთ ჩვენი ნამუშევრები</p>
          </div>
          <div className="feature flex flex-col items-center text-center">
            <ShoppingBag className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">ონლაინ შეკვეთა</h3>
            <p className="text-gray-600">მარტივი შეკვეთის პროცესი</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HandmadeJewelry;