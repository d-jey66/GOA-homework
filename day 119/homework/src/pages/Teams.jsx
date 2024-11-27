import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../data/teams';
import Navigation from '../components/Navigation';

function Teams() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Football Teams
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.map(team => (
            <Link 
              to={`/teams/${team.id}`} 
              key={team.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                  {team.name}
                </h2>
                <p className="text-gray-600 mb-4">{team.country}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Founded {team.founded}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;