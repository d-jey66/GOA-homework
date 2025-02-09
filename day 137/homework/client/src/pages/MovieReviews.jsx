import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function MovieReviews() {
  const [movies, setMovies] = useState([])
  const moviesRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data))

    gsap.from(moviesRef.current.children, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">ფილმების მიმოხილვა</h1>
      <div ref={moviesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movies.map(movie => (
          <article key={movie._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <img src={movie.imageUrl} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="absolute top-4 right-4 bg-zinc-900 px-3 py-1 rounded-full">
                ⭐ {movie.rating}/10
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
              <div className="flex gap-2 mb-4">
                <span className="text-sm text-gray-400">{movie.year}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{movie.genre}</span>
              </div>
              <p className="text-gray-300">{movie.review}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}