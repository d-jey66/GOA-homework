import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <nav className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg">
        <ul className="flex justify-center space-x-8 p-5">
          <li>
            <button 
              onClick={() => setCurrentPage('home')} 
              className="text-white font-bold py-2 px-4 rounded-full 
                         bg-orange-500 hover:bg-orange-600 
                         transition duration-300 ease-in-out 
                         transform hover:scale-110 hover:shadow-lg"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('about')} 
              className="text-white font-bold py-2 px-4 rounded-full 
                         bg-emerald-500 hover:bg-emerald-600 
                         transition duration-300 ease-in-out 
                         transform hover:scale-110 hover:shadow-lg"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('contacts')} 
              className="text-white font-bold py-2 px-4 rounded-full 
                         bg-rose-500 hover:bg-rose-600 
                         transition duration-300 ease-in-out 
                         transform hover:scale-110 hover:shadow-lg"
            >
              Contacts
            </button>
          </li>
        </ul>
      </nav>

      <div className="p-6">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;