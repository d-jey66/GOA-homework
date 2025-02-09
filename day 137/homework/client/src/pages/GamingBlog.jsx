import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function GamingBlog() {
  const [games, setGames] = useState([])
  const gamesRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/games')
      .then(res => res.json())
      .then(data => setGames(data))

    gsap.from(gamesRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">თამაშების ბლოგი</h1>
      <div ref={gamesRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {games.map(game => (
          <article key={game._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <img src={game.imageUrl} alt={game.title} className="w-full h-72 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <div className="flex gap-2 mb-2">
                  <span className="bg-zinc-700 px-3 py-1 rounded-full text-sm">{game.platform}</span>
                  <span className="bg-zinc-700 px-3 py-1 rounded-full text-sm">{game.genre}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="font-bold">{game.rating}/10</span>
                </div>
                <span className="text-gray-400">{game.releaseDate}</span>
              </div>
              <p className="text-gray-300">{game.review}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}