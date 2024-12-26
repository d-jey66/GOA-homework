import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">SeaLife</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
    <NavBar />
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The World of Sea Lions
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Explore the unique world of sea lions – intelligent marine mammals that amaze visitors with their abilities and behavior.
          </p>
          <Link to="/gallery" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 inline-block">
            See the Gallery
          </Link>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUMdnFNiRE49zqzIUeHDBmrxWofLFX_NJTrHx2g0qmfrxrlQ6xtOabj2vrRti-VejWX6yq4Tc1EiVqYx_0OgnN6A" 
            alt="Sea Lion"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <img 
            src="https://i.ytimg.com/vi/ZB83GCgDApg/maxresdefault.jpg" 
            alt="Swimming"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Movement</h3>
          <p className="text-gray-500">Ability to swim at 40 km/h</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrwEOdlqJqb8oKj5OlXnTye7hWxwAyJIzyQ&s" 
            alt="Group"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Social Life</h3>
          <p className="text-gray-500">Group activities and communication</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <img 
            src="https://files.worldwildlife.org/wwfcmsprod/images/sea_lion_what_wwf_doing_07172012_HI_57155.jpg/story_full_width/6hxzjkjoih_sea_lion_what_wwf_doing_07172012_HI_57155.jpg" 
            alt="Habitat"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Habitat</h3>
          <p className="text-gray-500">Pacific and Atlantic Oceans</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-100">
    <NavBar />
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Us</h2>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-700 text-lg">Research Project...</p>
      </div>
    </div>
  </div>
);

const GalleryPage = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc5k2A-RxoYX1SBwya3X89Lfi1OgGUUT7ug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1dpl-DOSVFW0ElaFGV47ASjyNzjE8hUdAQ&s",
    "https://nationalzoo.si.edu/sites/default/files/animals/californiasealion-001.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EHTpu3IMlOl9aMMp82JkWoSwk_5GLpLfEw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVFqAJfZeZGXr5Vw6U_2MHtpHKRyV5jr4qA&s",
    "https://nationalzoo.si.edu/sites/default/files/animals/20190912-skipbrown070.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </Router>
);

export default App;
