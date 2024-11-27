import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link 
            to="/" 
            className="px-3 py-2 hover:bg-blue-600 rounded-md transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/teams" 
            className="px-3 py-2 hover:bg-blue-600 rounded-md transition duration-300"
          >
            Teams
          </Link>
        </li>
        <li>
          <Link 
            to="/players" 
            className="px-3 py-2 hover:bg-blue-600 rounded-md transition duration-300"
          >
            Players
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;