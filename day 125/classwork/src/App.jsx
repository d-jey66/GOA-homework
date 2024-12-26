import React from "react";

function App() {
  return (
    <div className="font-sans">
      <header className="bg-gray-900 text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-bmw-com-gray.svg" alt="BMW Logo" className="w-24" />
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#models" className="hover:text-gray-400">Models</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative">
        <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/ex-logo/1_logos_grau/exl-03-media-hd-16.png?imwidth=1440" alt="BMW Car" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to BMW</h1>
          <p className="text-xl md:text-2xl">The Ultimate Driving Machine</p>
        </div>
      </section>

      <section id="models" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnTQ7vpX9Yv4Y3U4tQOJfy1EKLSzml99ShA&s" alt="BMW Model 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">BMW M Series</h3>
                <p className="text-gray-600">High-performance sports cars.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-5">
              <img src="https://cdn.bmwblog.com/wp-content/uploads/2015/04/X-series-family.jpg" alt="BMW Model 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">BMW X Series</h3>
                <p className="text-gray-600">Luxury SUVs built for adventure.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-5">
              <img src="https://www.carscoops.com/wp-content/uploads/2022/11/BMW-3-Series-a.jpg" alt="BMW Model 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl">BMW 3 Series</h3>
                <p className="text-gray-600">A classic sedan with modern features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BMW. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
