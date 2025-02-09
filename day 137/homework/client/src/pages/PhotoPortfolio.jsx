import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PhotoPortfolio() {
  const [photos, setPhotos] = useState([])
  const galleryRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))

    gsap.from(galleryRef.current.children, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">ფოტო პორტფოლიო</h1>
      <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(photo => (
          <div key={photo._id} className="group relative overflow-hidden rounded-lg">
            <img src={photo.imageUrl} alt={photo.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-xl font-semibold">{photo.title}</h3>
              <p className="text-sm text-gray-300">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}