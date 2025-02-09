import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Cpu, Gamepad } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ROGTech = () => {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const strixTextRef = useRef(null);
  const strixImageRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top center"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".features-section",
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    });

    timeline.from(".feature-item", {
      x: -100,
      opacity: 0,
      stagger: 0.2
    });

    gsap.set(strixTextRef.current, { x: -100, opacity: 0 });
    gsap.set(strixImageRef.current, { x: 100, opacity: 0 });

    gsap.to(strixTextRef.current, {
      scrollTrigger: {
        trigger: strixTextRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(strixImageRef.current, {
      scrollTrigger: {
        trigger: strixImageRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const products = [
    { name: "ROG STRIX 3090", price: "4999₾", category: "გრაფიკული" },
    { name: "ROG MAXIMUS", price: "1899₾", category: "დედაპლატა" },
    { name: "ROG ZEPHYRUS", price: "5999₾", category: "ლეპტოპი" },
    { name: "ROG SWIFT", price: "2999₾", category: "მონიტორი" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-screen bg-gradient-to-b from-red-900/20 to-black">
        <div ref={heroRef} className="h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-red-500">ROG</span> REPUBLIC OF GAMERS
            </h1>
            <p className="text-xl md:text-2xl mb-8">უახლესი გეიმინგ ტექნიკა</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors">
              პროდუქცია
            </button>
          </div>
        </div>
      </header>

      <section ref={productsRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">პოპულარული პროდუქტები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={`/api/placeholder/400/300`}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 px-2 py-1 rounded text-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-red-500 font-bold">{product.price}</span>
                    <button className="bg-red-600 px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                      ყიდვა
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ROG უპირატესობები</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item bg-gray-800 p-6 rounded-lg">
              <Cpu className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">მაღალი წარმადობა</h3>
              <p className="text-gray-400">უახლესი პროცესორები და ვიდეო კარტები</p>
            </div>
            <div className="feature-item bg-gray-800 p-6 rounded-lg">
              <Monitor className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">გეიმინგ დისპლეები</h3>
              <p className="text-gray-400">მაღალი სიხშირის მონიტორები</p>
            </div>
            <div className="feature-item bg-gray-800 p-6 rounded-lg">
              <Gamepad className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">გეიმინგ აქსესუარები</h3>
              <p className="text-gray-400">პროფესიონალური პერიფერია</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-900 to-gray-900 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div ref={strixTextRef} className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">ROG STRIX სერია</h2>
              <p className="text-gray-300 mb-6">ახალი თაობის გეიმინგ ლეპტოპები</p>
              <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors">
                იხილეთ მეტი
              </button>
            </div>
            <div ref={strixImageRef} className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/api/placeholder/600/400"
                alt="ROG STRIX"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-gray-900 text-center">
        <p className="text-gray-500">ROG</p>
      </footer>
    </div>
  );
};

export default ROGTech;
