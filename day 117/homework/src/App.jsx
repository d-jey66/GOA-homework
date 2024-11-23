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
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <button 
              onClick={() => setCurrentPage('home')} 
              className="hover:text-blue-300"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('about')} 
              className="hover:text-blue-300"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('contacts')} 
              className="hover:text-blue-300"
            >
              Contacts
            </button>
          </li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;