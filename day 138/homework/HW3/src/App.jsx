import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Map, Phone, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Restaurant = () => {
  const heroRef = useRef(null);
  const menuRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const heroElements = heroRef.current.children;
    gsap.from(heroElements, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    const menuItems = menuRef.current.querySelectorAll('.menu-item');
    gsap.from(menuItems, {
      scrollTrigger: {
        trigger: menuRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1
    });

    const infoCards = infoRef.current.querySelectorAll('.info-card');
    gsap.from(infoCards, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="relative h-screen flex items-center justify-center bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div ref={heroRef} className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">რესტორანი</h1>
          <p className="text-xl md:text-2xl mb-8">გემრიელი კერძები და სასიამოვნო გარემო</p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors text-lg">
            მაგიდის დაჯავშნა
          </button>
        </div>
      </section>

      <section ref={menuRef} className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">მენიუ</h2>
        <div className="max-w-4xl mx-auto">
          {[
            { name: 'ხინკალი', price: '1.5₾', desc: 'ხორცით' },
            { name: 'ხაჭაპური', price: '15₾', desc: 'იმერული' },
            { name: 'მწვადი', price: '25₾', desc: 'ღორის' },
            { name: 'ლობიანი', price: '10₾', desc: 'აჭარული' }
          ].map((item, index) => (
            <div key={index} className="menu-item flex justify-between items-center border-b border-gray-200 py-4">
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
              <span className="text-xl font-bold text-amber-600">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={infoRef} className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="info-card bg-white p-6 rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">სამუშაო საათები</h3>
            <p className="text-gray-600">ორშ-კვი: 11:00 - 23:00</p>
          </div>
          <div className="info-card bg-white p-6 rounded-lg shadow-lg">
            <Map className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">მისამართი</h3>
            <p className="text-gray-600">რუსთაველის 42, თბილისი</p>
          </div>
          <div className="info-card bg-white p-6 rounded-lg shadow-lg">
            <Phone className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">დაგვიკავშირდით</h3>
            <p className="text-gray-600">+995 555 12 34 56</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">სპეციალური შეთავაზება</h2>
            <p className="text-gray-600 mb-8">
              ყოველ ორშაბათს საღამოს 18:00-დან 20:00-მდე, მიიღეთ 20% ფასდაკლება ყველა კერძზე
            </p>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors">
              დაჯავშნე ახლავე
            </button>
          </div>
          <div className="flex-1 relative h-64">
            <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center rounded-lg shadow-xl"></div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ჩვენს შესახებ</h3>
            <p className="text-stone-300">ტრადიციული ქართული სამზარეულო თანამედროვე ინტერპრეტაციით</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">მენიუ</h3>
            <ul className="space-y-2 text-stone-300">
              <li>საუზმე</li>
              <li>სადილი</li>
              <li>ვახშამი</li>
              <li>დესერტები</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">სერვისები</h3>
            <ul className="space-y-2 text-stone-300">
              <li>კერძების მიტანა</li>
              <li>კეიტერინგი</li>
              <li>დაბადების დღეები</li>
              <li>კორპორატიული</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">სოციალური</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-white transition-colors">FB</a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">IG</a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">TW</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Restaurant;
