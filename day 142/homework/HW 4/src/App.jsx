import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(".hero-image", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
      
      gsap.from(".cr-logo", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out"
      });
      
      gsap.from(".ratings-btn", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".fitness-title", {
        scrollTrigger: {
          trigger: ".fitness-section",
          start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".fitness-text", {
        scrollTrigger: {
          trigger: ".fitness-section",
          start: "top 75%"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });
      
      gsap.from(".features-title", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%"
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 70%"
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".tradein-content", {
        scrollTrigger: {
          trigger: ".tradein-section",
          start: "top 70%"
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power3.out"
      });
      
      gsap.from(".tradein-image", {
        scrollTrigger: {
          trigger: ".tradein-section",
          start: "top 70%"
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });
      
      gsap.from(".buy-button", {
        scrollTrigger: {
          trigger: ".tradein-section",
          start: "top 70%"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
      });
    };
    
    loadGSAP();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-black text-white">
      <nav className="fixed w-full bg-black bg-opacity-90 z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Samsung</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300">Mobile</a>
            <a href="#" className="hover:text-gray-300">TV & Audio</a>
            <a href="#" className="hover:text-gray-300">Computing</a>
            <a href="#" className="hover:text-gray-300">Appliances</a>
            <a href="#" className="hover:text-gray-300">Displays</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="hero-title">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-300 mb-6">One of the highest rated smartwatches*</h1>
              <div className="cr-logo mb-6">
                <img src="/api/placeholder/200/80" alt="Consumer Reports Logo" className="h-12" />
              </div>
              <button className="ratings-btn bg-black text-white border border-white py-3 px-6 rounded-full font-medium hover:bg-gray-900 transition">See Ratings</button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center hero-image">
            <img src="/api/placeholder/400/400" alt="Galaxy Watch7" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black fitness-section">
        <div className="container mx-auto text-center">
          <h2 className="fitness-title text-4xl md:text-5xl font-bold mb-6">Your ultimate fitness partner</h2>
          <p className="fitness-text text-xl mb-10 max-w-3xl mx-auto">Galaxy Watch7 has everything you need to keep moving toward your health goals.</p>
        </div>
      </section>

      <section className="py-20 px-6 features-section">
        <div className="container mx-auto">
          <h2 className="features-title text-3xl font-bold mb-12 text-center">Advanced Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-gray-900 rounded-xl p-6">
              <div className="text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Health Tracking</h3>
              <p className="text-gray-400">Monitor heart rate, blood oxygen, and get personalized insights.</p>
            </div>
            <div className="feature-card bg-gray-900 rounded-xl p-6">
              <div className="text-blue-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Galaxy AI</h3>
              <p className="text-gray-400">Powerful AI features to enhance your fitness and daily activities.</p>
            </div>
            <div className="feature-card bg-gray-900 rounded-xl p-6">
              <div className="text-purple-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Seamless Connectivity</h3>
              <p className="text-gray-400">Works with your Galaxy ecosystem for a unified experience.</p>
            </div>
            <div className="feature-card bg-gray-900 rounded-xl p-6">
              <div className="text-yellow-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Long Battery Life</h3>
              <p className="text-gray-400">Stay charged throughout your day with extended battery performance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900 tradein-section">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 tradein-content">
            <h2 className="text-3xl font-bold mb-6">Galaxy Watch7</h2>
            <h3 className="text-xl mb-4">Galaxy AI 🌟 is here</h3>
            <p className="text-gray-300 mb-4">Know your score and save</p>
            <p className="text-gray-400 mb-8">Discover your Energy Score on Galaxy Watch7 with up to $200 instant trade-in credit.* Plus, get a select band on us with select purchase.*</p>
            <button className="buy-button bg-black text-white border border-white py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition">Buy now</button>
          </div>
          <div className="md:w-1/2 flex justify-center tradein-image">
            <img src="/api/placeholder/400/400" alt="Galaxy Watch7" className="max-w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Display</h3>
                <p className="text-gray-400">1.4" (34.6mm) Super AMOLED, 450x450 resolution</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Processor</h3>
                <p className="text-gray-400">Exynos W930 Dual Core 1.4GHz</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Memory</h3>
                <p className="text-gray-400">2GB RAM + 32GB internal storage</p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Battery</h3>
                <p className="text-gray-400">425mAh (typical) with up to 48 hours of usage</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Durability</h3>
                <p className="text-gray-400">5ATM + IP68 + MIL-STD-810H</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Connectivity</h3>
                <p className="text-gray-400">Bluetooth 5.3, Wi-Fi 2.4GHz & 5GHz, NFC, GPS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of Smartwatches</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied users who have elevated their fitness journey with Galaxy Watch7.</p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-medium hover:bg-gray-100 transition">Shop Now</button>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Galaxy Watch7</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Galaxy Phones</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tablets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">User Manual</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Service Locations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Company Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Business</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Brand Identity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>2025 Samsung</p>
            <p className="mt-2">*Terms and conditions apply. See website for details.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;