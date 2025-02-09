import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Heart, Share2, Instagram, Mail, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 2, ease: 'power3.out' }
    );

    const galleryItems = gsap.utils.toArray('.gallery-item');
    galleryItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    gsap.fromTo(
      aboutRef.current,
      { x: -50, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const galleryImages = [
    { category: 'პორტრეტი', likes: 234 },
    { category: 'ქორწილი', likes: 456 },
    { category: 'ბუნება', likes: 189 },
    { category: 'პორტრეტი', likes: 321 },
    { category: 'ქორწილი', likes: 567 },
    { category: 'ბუნება', likes: 432 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header ref={heroRef} className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <Camera className="w-16 h-16 mx-auto mb-6 text-pink-500" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ფოტოგრაფია</h1>
          <p className="text-xl md:text-2xl mb-8">თქვენი მომენტების საუკეთესო ასახვა</p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
            დამიკავშირდით
          </button>
        </div>
      </header>

      <section ref={galleryRef} className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">გალერეა</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={`/api/placeholder/800/800`}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <p className="text-lg font-bold">{image.category}</p>
                    <div className="flex items-center justify-center mt-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <span className="ml-2">{image.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={aboutRef} className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">ჩემს შესახებ</h2>
            <p className="text-gray-300 mb-6">
              პროფესიონალი ფოტოგრაფი 10 წლიანი გამოცდილებით. სპეციალიზირებული ვარ პორტრეტულ და საქორწილო ფოტოგრაფიაში.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">100+</h3>
                <p className="text-gray-300">ქორწილი</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">500+</h3>
                <p className="text-gray-300">პორტრეტი</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">50+</h3>
                <p className="text-gray-300">ღონისძიება</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">10+</h3>
                <p className="text-gray-300">წელი</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">სერვისები</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Calendar className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">ქორწილი</h3>
              <p className="text-gray-300">სრული დღის გადაღება, ფოტოწიგნი</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Camera className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">პორტრეტი</h3>
              <p className="text-gray-300">სტუდიური და ბუნებრივი გადაღება</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Share2 className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">ღონისძიებები</h3>
              <p className="text-gray-300">კორპორატიული და კერძო ღონისძიებები</p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={`/api/placeholder/1200/800`}
              alt={`Gallery ${selectedImage}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
