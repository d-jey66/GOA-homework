import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function TravelBlog() {
  const [travels, setTravels] = useState([])
  const travelsRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/travel')
      .then(res => res.json())
      .then(data => setTravels(data))

    gsap.from(travelsRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">სამოგზაურო ბლოგი</h1>
      <div ref={travelsRef} className="grid gap-8">
        {travels.map(travel => (
          <article key={travel._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <img src={travel.imageUrl} alt={travel.title} className="md:w-1/3 h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{travel.title}</h2>
                <p className="text-gray-300 mb-4">{travel.description}</p>
                <div className="flex gap-4">
                  {travel.tags.map(tag => (
                    <span key={tag} className="bg-zinc-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}