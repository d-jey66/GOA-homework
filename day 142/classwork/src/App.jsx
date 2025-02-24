import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const cardRefs = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const hero = heroRef.current;
    const features = featureRef.current;
    const cards = cardRefs.current;
    const footer = footerRef.current;

    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      hero,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      features,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: features,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.fromTo(
      footer,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white">
      <header 
        ref={headerRef} 
        className="fixed w-full bg-white bg-opacity-90 shadow-md z-50 px-6 py-4"
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-indigo-600">GeorgianTech</div>
          <ul className="flex space-x-8">
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">მთავარი</li>
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">ჩვენს შესახებ</li>
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">სერვისები</li>
            <li className="text-gray-700 hover:text-indigo-600 cursor-pointer">კონტაქტი</li>
          </ul>
        </nav>
      </header>

      <section 
        ref={heroRef} 
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">ინოვაციური ვებ გადაწყვეტილებები თქვენი ბიზნესისთვის</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              თანამედროვე ტექნოლოგიები და უნიკალური დიზაინი თქვენი პროექტის წარმატებისთვის
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
              დაიწყეთ ახლავე
            </button>
          </div>
        </div>
      </section>

      <section 
        ref={featureRef}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">ჩვენი სერვისები</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "რესპონსიული დიზაინი", description: "ყველა მოწყობილობისთვის ადაპტირებული ვებგვერდები" },
              { title: "მაღალი წარმადობა", description: "სწრაფი და ოპტიმიზირებული კოდი" },
              { title: "SEO ოპტიმიზაცია", description: "უკეთესი ხილვადობა საძიებო სისტემებში" }
            ].map((feature, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="bg-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div 
              ref={el => cardRefs.current[3] = el}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800">რატომ გვირჩევენ ჩვენ?</h2>
              <p className="text-gray-600">
                ჩვენი გუნდი ახორციელებს ინოვაციურ იდეებს თანამედროვე ტექნოლოგიების გამოყენებით. 
                ჩვენ ვქმნით არა მხოლოდ ლამაზ, არამედ ფუნქციონალურ პროექტებს.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">5+ წლიანი გამოცდილება</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">100+ კმაყოფილი კლიენტი</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                  <span className="text-gray-700">უმაღლესი ხარისხის გარანტია</span>
                </li>
              </ul>
            </div>
            <div 
              ref={el => cardRefs.current[4] = el}
              className="bg-indigo-600 rounded-xl p-10 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">დაგვიკავშირდით</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="თქვენი სახელი"
                  className="w-full px-4 py-3 rounded-lg bg-indigo-500 bg-opacity-50 placeholder-indigo-200 outline-none focus:bg-opacity-70"
                />
                <input
                  type="email"
                  placeholder="ელ-ფოსტა"
                  className="w-full px-4 py-3 rounded-lg bg-indigo-500 bg-opacity-50 placeholder-indigo-200 outline-none focus:bg-opacity-70"
                />
                <textarea
                  placeholder="შეტყობინება"
                  className="w-full px-4 py-3 rounded-lg bg-indigo-500 bg-opacity-50 placeholder-indigo-200 outline-none focus:bg-opacity-70 min-h-32"
                ></textarea>
                <button className="w-full py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                  გაგზავნა
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer 
        ref={footerRef}
        className="bg-gray-900 text-white py-12 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">GeorgianTech</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-indigo-400">მთავარი</a>
            <a href="#" className="hover:text-indigo-400">სერვისები</a>
            <a href="#" className="hover:text-indigo-400">ბლოგი</a>
            <a href="#" className="hover:text-indigo-400">კონტაქტი</a>
          </div>
          <div className="mt-6 md:mt-0 text-gray-400">
            GeorgianTech
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;