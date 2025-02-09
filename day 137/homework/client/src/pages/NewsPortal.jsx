import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function NewsPortal() {
  const [news, setNews] = useState([])
  const newsRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/news')
      .then(res => res.json())
      .then(data => setNews(data))

    gsap.from(newsRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">სიახლეები</h1>
      <div ref={newsRef} className="grid grid-cols-1 gap-6">
        {news.map(item => (
          <article key={item._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <img src={item.imageUrl} alt={item.title} className="md:w-1/3 h-64 object-cover" />
              <div className="p-6 md:flex-1">
                <div className="flex gap-2 mb-3">
                  <span className="bg-blue-500 px-3 py-1 rounded-full text-sm">{item.category}</span>
                  <span className="text-gray-400 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.summary}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={item.authorImage} alt={item.author} className="w-8 h-8 rounded-full" />
                    <span className="text-gray-400">{item.author}</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors">
                    სრულად ნახვა
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}