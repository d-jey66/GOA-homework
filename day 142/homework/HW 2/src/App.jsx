import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgrammingUpdates = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const featuredUpdateRef = useRef(null);
  const updateItemRefs = useRef([]);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const title = titleRef.current;
    const featuredUpdate = featuredUpdateRef.current;
    const updateItems = updateItemRefs.current;
    const sidebar = sidebarRef.current;

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
      featuredUpdate,
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuredUpdate,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    updateItems.forEach((item, index) => {
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
      sidebar,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sidebar,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const programmingUpdates = [
    {
      id: 1,
      title: "React 20 გამოვიდა 2025 წლის მთავარი სიახლეებით",
      excerpt: "ახალი ვერსია მნიშვნელოვანი განახლებებით: გაუმჯობესებული სერვერის კომპონენტები და ახალი რენდერინგის ალგორითმი.",
      language: "React",
      date: "იანვარი 15, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 2,
      title: "Python 4.0 - უდიდესი განახლება ენის ისტორიაში",
      excerpt: "Python 4.0 წარმოადგენს დიდ ნახტომს წინ ასინქრონულ დამუშავებასა და კომპილაციის ოპტიმიზაციაში.",
      language: "Python",
      date: "თებერვალი 3, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 3,
      title: "Node.js-ის ახალი LTS ვერსია უკვე ხელმისაწვდომია",
      excerpt: "Node.js 22 LTS ვერსია უზრუნველყოფს უპრეცედენტო სიჩქარეს და უსაფრთხოების გაუმჯობესებას.",
      language: "JavaScript",
      date: "იანვარი 28, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 4,
      title: "Rust ენა შევიდა TIOBE-ს ტოპ 5-ში",
      excerpt: "Rust-ის პოპულარობა განაგრძობს ზრდას, განსაკუთრებით WebAssembly-ისა და სისტემური პროგრამირების სფეროებში.",
      language: "Rust",
      date: "თებერვალი 10, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 5,
      title: "TypeScript 6.0 - დინამიური იმპორტები და მეტაპროგრამირება",
      excerpt: "TypeScript-ის უახლესი ვერსია გთავაზობთ უძლიერეს ფუნქციებს ტიპებზე დაფუძნებული მეტაპროგრამირებისთვის.",
      language: "TypeScript",
      date: "იანვარი 22, 2025",
      image: "/api/placeholder/600/350"
    },
    {
      id: 6,
      title: "Go 2.0 ოფიციალურად გამოცხადდა განვითარების გეგმით",
      excerpt: "Google-მა წარმოადგინა Go 2.0-ის განვითარების გეგმა, რომელიც ფოკუსირებულია გენერიკებსა და შეცდომების მართვაზე.",
      language: "Go",
      date: "თებერვალი 18, 2025",
      image: "/api/placeholder/600/350"
    }
  ];

  const programmingLanguages = [
    "JavaScript", "Python", "TypeScript", "Rust", "Go", "Java", "C#", "Kotlin", "Swift", "PHP"
  ];

  const popularTools = [
    { name: "Visual Studio Code 2025", downloads: "12M+" },
    { name: "Next.js 14", downloads: "8M+" },
    { name: "Docker Desktop Pro", downloads: "7M+" },
    { name: "PyCharm 2025.1", downloads: "5M+" },
    { name: "GitHub Copilot X", downloads: "10M+" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header 
        ref={headerRef} 
        className="fixed w-full bg-gray-800 bg-opacity-95 shadow-md z-50 px-6 py-4"
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-purple-500">DevNews <span className="text-green-400">2025</span></div>
          <ul className="flex space-x-8">
            <li className="text-gray-300 hover:text-purple-400 cursor-pointer font-medium">მთავარი</li>
            <li className="text-gray-300 hover:text-purple-400 cursor-pointer font-medium">პროგრამირება</li>
            <li className="text-gray-300 hover:text-purple-400 cursor-pointer font-medium">ტუტორიალები</li>
            <li className="text-gray-300 hover:text-purple-400 cursor-pointer font-medium">AI & ML</li>
            <li className="text-gray-300 hover:text-purple-400 cursor-pointer font-medium">ფორუმი</li>
          </ul>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold mb-12 border-b border-gray-700 pb-4"
          >
            <span className="text-purple-500">პროგრამირების</span> <span className="text-green-400">განახლებები</span> <span className="text-gray-400">2025</span>
          </h1>

          <div 
            ref={featuredUpdateRef}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-700"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-80" src="/api/placeholder/800/600" alt="WebAssembly 3.0" />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
                    უახლესი განახლება
                  </span>
                  <p className="ml-3 text-gray-400 text-sm">24 თებერვალი, 2025</p>
                </div>
                <h2 className="text-2xl font-bold mt-4 mb-2 text-green-400">
                  WebAssembly 3.0 რევოლუციას ახდენს ვებ პროგრამირებაში
                </h2>
                <p className="text-gray-300 mb-6">
                  WebAssembly 3.0 წარმოადგენს უდიდეს ნახტომს ვებ ტექნოლოგიებში, შემოაქვს კომპილაციის დროის ოპტიმიზაციები, 
                  გაუმჯობესებული მეხსიერების მართვა და სრული წვდომა DOM API-ზე. ეს განახლება საშუალებას აძლევს დეველოპერებს 
                  შეასრულონ თითქმის ნატიური აპლიკაციის სიჩქარით მომუშავე კოდი ბრაუზერში.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300">
                  სრულად ნახვა
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programmingUpdates.map((update, index) => (
                  <div 
                    key={update.id}
                    ref={el => updateItemRefs.current[index] = el}
                    className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700"
                  >
                    <img className="h-48 w-full object-cover" src={update.image} alt={update.title} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-700 text-purple-400">{update.language}</span>
                        <span className="text-xs text-gray-400">{update.date}</span>
                      </div>
                      <h3 className="font-bold text-green-400 text-lg mb-2">{update.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{update.excerpt}</p>
                      <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center">
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
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
                  მეტი განახლება
                </button>
              </div>
            </div>

            <div 
              ref={sidebarRef}
              className="md:w-1/3"
            >
              <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
                <h3 className="font-bold text-green-400 text-lg mb-4 pb-2 border-b border-gray-700">პოპულარული ენები 2025</h3>
                <ul className="space-y-2">
                  {programmingLanguages.map((language, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-6 text-gray-400 font-mono">{index + 1}.</span>
                      <a 
                        href="#" 
                        className="block py-2 px-3 rounded hover:bg-gray-700 text-gray-300 hover:text-purple-400 transition-colors flex-grow"
                      >
                        {language}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-6 border border-gray-700">
                <h3 className="font-bold text-green-400 text-lg mb-4 pb-2 border-b border-gray-700">ტოპ ხელსაწყოები</h3>
                <ul className="space-y-3">
                  {popularTools.map((tool, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{tool.name}</span>
                      <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded-full">{tool.downloads}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-md p-6 mt-6 border border-gray-700 bg-gradient-to-br from-gray-800 to-purple-900">
                <h3 className="font-bold text-green-400 text-lg mb-4">დეველოპერთა კონფერენცია 2025</h3>
                <p className="text-gray-300 text-sm mb-4">
                  შემოგვიერთდით WebSummit თბილისი 2025-ზე, 15-17 მარტს. გაეცანით უახლეს ტექნოლოგიებს და დაუკავშირდით ინდუსტრიის ლიდერებს.
                </p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 rounded-lg transition-colors duration-300">
                  რეგისტრაცია
                </button>
                <p className="text-gray-400 text-xs mt-2 text-center">ადგილები შეზღუდულია!</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-green-400 mb-6">2025 წლის მთავარი პროგრამირების ტრენდები</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl text-purple-500 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-2">AI-დამხმარე კოდირება</h3>
                <p className="text-gray-300">
                  კოდის გენერაციისა და ოპტიმიზაციის AI ხელსაწყოები სტანდარტი გახდა. IDE-ების 90% უკვე ინტეგრირებულია AI ასისტენტებთან.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl text-purple-500 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-2">WebAssembly დომინირება</h3>
                <p className="text-gray-300">
                  WASM გახდა სტანდარტი მაღალეფექტური ვებ აპლიკაციებისთვის, და უკვე მხარდაჭერილია ყველა მთავარი ენის მიერ.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl text-purple-500 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-2">კვანტური კომპიუტინგი</h3>
                <p className="text-gray-300">
                  პირველი პრაქტიკული კვანტური კომპიუტინგის ბიბლიოთეკები ხელმისაწვდომი გახდა ყოველდღიური პროგრამისტებისთვის.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingUpdates;