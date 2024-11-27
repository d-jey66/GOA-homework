import React from 'react';
import { useParams } from 'react-router-dom';
import { teams } from '../data/teams';
import Navigation from '../components/Navigation';

function TeamDetail() {
  const { id } = useParams();
  const team = teams.find(t => t.id === parseInt(id));

  if (!team) return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-2xl text-red-600">Team not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-6">
            {team.name}
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg mb-2">
                <span className="font-semibold">Country:</span> {team.country}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Founded:</span> {team.founded}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Stadium:</span> {team.stadium}
              </p>
            </div>
            <div>
              <p className="text-gray-600 italic">
                "{team.description}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;