import React, { useState, useEffect } from 'react';
import { Smile, RefreshCw } from 'lucide-react';
import gsap from 'gsap';

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setShowPunchline(false);
    
    try {
      const response = await fetch('http://localhost:5000/api/jokes/random');
      const data = await response.json();
      setJoke(data);
      setLoading(false);
      
      gsap.fromTo(".joke-setup",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    } catch (error) {
      console.error('Error fetching joke:', error);
      setLoading(false);
    }
  };

  const revealPunchline = () => {
    setShowPunchline(true);
    
    gsap.fromTo(".joke-punchline",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    gsap.to(".generate-button", {
      scale: 1.05,
      duration: 0.3,
      paused: true,
      ease: "power1.out"
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center">
        <div className="text-yellow-500 text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-black/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-purple-500/30">
        <div className="flex items-center justify-center mb-8">
          <Smile className="w-12 h-12 text-yellow-500 mr-3" />
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-500">
            Random Joke Generator
          </h1>
        </div>

        <div className="space-y-6">
          {joke && (
            <>
              <div className="joke-setup text-2xl text-yellow-300 text-center font-medium">
                {joke.setup}
              </div>

              {!showPunchline ? (
                <button
                  onClick={revealPunchline}
                  className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Reveal Punchline
                </button>
              ) : (
                <div className="joke-punchline text-xl text-purple-300 text-center italic">
                  {joke.punchline}
                </div>
              )}
            </>
          )}

          <button
            onClick={fetchJoke}
            className="generate-button w-full mt-6 py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default JokeGenerator;