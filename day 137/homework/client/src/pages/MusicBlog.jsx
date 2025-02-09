import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function MusicBlog() {
  const [music, setMusic] = useState([])
  const musicRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/music')
      .then(res => res.json())
      .then(data => setMusic(data))

    gsap.from(musicRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">მუსიკალური ბლოგი</h1>
      <div ref={musicRef} className="grid gap-6">
        {music.map(item => (
          <article key={item._id} className="bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="md:flex items-center">
              <img src={item.imageUrl} alt={item.title} className="w-full md:w-48 h-48 object-cover rounded-l-lg" />
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-700 px-3 py-1 rounded text-sm">
                    {item.genre}
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded text-sm">
                    {item.artist}
                  </span>
                  <span className="bg-zinc-700 px-3 py-1 rounded text-sm">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}