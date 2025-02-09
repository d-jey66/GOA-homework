import React, { useState, useEffect } from 'react';

const MovieCard = ({ movie }) => (
  <div className="bg-black border-2 border-yellow-500 text-yellow-300 rounded-lg p-2 m-2 w-52 transform transition hover:scale-105">
    <img 
      src={movie.poster} 
      alt={movie.title} 
      className="w-full h-72 object-cover rounded-t-lg"
    />
    <div className="p-2">
      <h2 className="text-lg font-bold text-red-500 truncate">{movie.title}</h2>
      <div className="flex justify-between text-sm mt-1">
        <span>{movie.year}</span>
        <span className="text-yellow-300">★ {movie.rating}</span>
      </div>
      <p className="text-xs text-gray-400 mt-1 truncate">{movie.description}</p>
    </div>
  </div>
);

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-black text-yellow-500 text-center text-2xl p-4">იტვირთება...</div>;

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-6">მხოლოდ საუკეთესო ფილმები</h1>
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesApp;