import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsSection = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const featuredNewsRef = useRef(null);
  const newsItemRefs = useRef([]);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const title = titleRef.current;
    const featuredNews = featuredNewsRef.current;
    const newsItems = newsItemRefs.current;
    const categories = categoriesRef.current;

    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      featuredNews,
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuredNews,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    newsItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.fromTo(
      categories,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: categories,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const newsData = [
    {
      id: 1,
      title: "საქართველოს ეკონომიკა 5%-ით გაიზარდა მესამე კვარტალში",
      excerpt: "ეკონომიკური ზრდა აღემატება ანალიტიკოსების პროგნოზებს, მიუხედავად გლობალური გამოწვევებისა.",
      category: "ეკონომიკა",
      date: "24 თებერვალი, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 2,
      title: "თბილისში ახალი ტექნოლოგიური ჰაბი გაიხსნა",
      excerpt: "ჰაბი მიზნად ისახავს ადგილობრივი სტარტაპების მხარდაჭერას და ინოვაციების წახალისებას.",
      category: "ტექნოლოგია",
      date: "23 თებერვალი, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 3,
      title: "ეროვნულმა ნაკრებმა საკვალიფიკაციო მატჩში გაიმარჯვა",
      excerpt: "გუნდმა 2:0 დაამარცხა მეტოქე და ტურნირის შემდეგ ეტაპზე გადავიდა.",
      category: "სპორტი",
      date: "22 თებერვალი, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 4,
      title: "ბათუმში ახალი კულტურული ცენტრის მშენებლობა დაიწყო",
      excerpt: "პროექტის დასრულება 2026 წლისთვის იგეგმება და ის მოიცავს თეატრს, გალერეას და საჯარო სივრცეებს.",
      category: "კულტურა",
      date: "21 თებერვალი, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 5,
      title: "ახალი კანონი გარემოს დაცვის შესახებ ძალაში შევიდა",
      excerpt: "კანონი ამკაცრებს რეგულაციებს დაბინძურების შესახებ და წაახალისებს მწვანე ინიციატივებს.",
      category: "პოლიტიკა",
      date: "20 თებერვალი, 2025",
      image: "/api/placeholder/600/350"
    }
  ];

  const categories = [
    "ყველა", "პოლიტიკა", "ეკონომიკა", "სპორტი", "კულტურა", "ტექნოლოგია", "განათლება", "საზოგადოება"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header 
        ref={headerRef} 
        className="fixed w-full bg-white bg-opacity-95 shadow-md z-50 px-6 py-4"
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-red-600">საქართველოს ამბები</div>
          <ul className="flex space-x-8">
            <li className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">მთავარი</li>
            <li className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">ახალი ამბები</li>
            <li className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">პოლიტიკა</li>
            <li className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">ეკონომიკა</li>
            <li className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">კონტაქტი</li>
          </ul>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold text-gray-800 mb-12 border-b border-gray-200 pb-4"
          >
            ახალი ამბები
          </h1>

          <div 
            ref={featuredNewsRef}
            className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-80" src="/api/placeholder/800/600" alt="მთავარი სიახლე" />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                    მთავარი სიახლე
                  </span>
                  <p className="ml-3 text-gray-500 text-sm">25 თებერვალი, 2025</p>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  საქართველომ მნიშვნელოვანი შეთანხმება გააფორმა ევროკავშირთან
                </h2>
                <p className="text-gray-600 mb-6">
                  დღეს ბრიუსელში ხელი მოეწერა ახალ შეთანხმებას, რომელიც გააღრმავებს საქართველოსა და ევროკავშირს შორის თანამშრომლობას რამდენიმე სტრატეგიულ სექტორში, მათ შორის ეკონომიკურ, ენერგეტიკულ და უსაფრთხოების საკითხებში.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300">
                  სრულად ნახვა
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsData.map((news, index) => (
                  <div 
                    key={news.id}
                    ref={el => newsItemRefs.current[index] = el}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <img className="h-48 w-full object-cover" src={news.image} alt={news.title} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-red-600">{news.category}</span>
                        <span className="text-xs text-gray-500">{news.date}</span>
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
                        სრულად ნახვა
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-8 py-3 rounded-lg transition-colors duration-300">
                  მეტი სიახლე
                </button>
              </div>
            </div>

            <div className="md:w-1/4">
              <div 
                ref={categoriesRef}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-4 pb-2 border-b border-gray-100">კატეგორიები</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block py-2 px-3 rounded hover:bg-red-50 hover:text-red-600 transition-colors ${
                          index === 0 ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4 pb-2 border-b border-gray-100">გამოიწერეთ სიახლეები</h3>
                <p className="text-gray-600 text-sm mb-4">მიიღეთ უახლესი ინფორმაცია პირდაპირ თქვენს ელ-ფოსტაზე.</p>
                <form>
                  <input 
                    type="email" 
                    placeholder="თქვენი ელ-ფოსტა" 
                    className="w-full px-4 py-2 mb-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors duration-300">
                    გამოწერა
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;