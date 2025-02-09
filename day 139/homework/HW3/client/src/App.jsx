import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movieRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    if (selectedMovie && movieRef.current) {
      gsap.from(movieRef.current, { opacity: 0, y: -20, duration: 0.5 });
    }
  }, [selectedMovie]);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = movies.find(movie =>
      movie.title.toLowerCase() === searchTerm.trim().toLowerCase()
    );
    setSelectedMovie(found || null);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-white mb-8">ფილმის ძებნა</h1>
      <form onSubmit={handleSearch} className="mb-6 flex">
        <input 
          type="text"
          placeholder="შეიყვანეთ ფილმის სათაური..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          მოძებნა
        </button>
      </form>
      {selectedMovie ? (
        <div 
          ref={movieRef}
          className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md text-center"
        >
          <img 
            src={selectedMovie.poster} 
            alt={selectedMovie.title} 
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-white">{selectedMovie.title}</h2>
          <p className="text-white mt-2">{selectedMovie.description}</p>
          <p className="text-white mt-2">წელი: {selectedMovie.year}</p>
          <p className="text-white mt-2">რეიტინგი: {selectedMovie.rating}</p>
        </div>
      ) : (
        searchTerm && <p className="text-red-400">ფილმი ვერ მოიძებნა.</p>
      )}
    </div>
  );
};

export default MovieSearchApp;
