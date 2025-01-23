import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FootballScores = () => {
  const [scores, setScores] = useState([
    { team1: 'Manchester United', team2: 'Liverpool', score1: 2, score2: 1, status: 'Finished' },
    { team1: 'Chelsea', team2: 'Arsenal', score1: 0, score2: 0, status: 'Live' },
    { team1: 'Barcelona', team2: 'Real Madrid', score1: 1, score2: 1, status: 'Half Time' }
  ]);

  const rowRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      rowRefs.current,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.2,
        ease: 'power2.out' 
      }
    );
  }, [scores]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'bg-green-100 text-green-800';
      case 'Half Time': return 'bg-yellow-100 text-yellow-800';
      case 'Finished': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Football Scores</h1>
      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Team 1</th>
            <th className="p-3 text-center">Score</th>
            <th className="p-3 text-right">Team 2</th>
            <th className="p-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((match, index) => (
            <tr 
              key={index} 
              ref={el => rowRefs.current[index] = el}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-3 font-medium">{match.team1}</td>
              <td className="p-3 text-center font-bold">
                {match.score1} - {match.score2}
              </td>
              <td className="p-3 text-right font-medium">{match.team2}</td>
              <td className="p-3 text-center">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(match.status)}`}>
                  {match.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FootballScores;