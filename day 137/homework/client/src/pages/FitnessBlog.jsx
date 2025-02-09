import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FitnessBlog() {
  const [workouts, setWorkouts] = useState([])
  const workoutsRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/fitness')
      .then(res => res.json())
      .then(data => setWorkouts(data))

    gsap.from(workoutsRef.current.children, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">ფიტნეს ბლოგი</h1>
      <div ref={workoutsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map(workout => (
          <div key={workout._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={workout.imageUrl} alt={workout.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3">{workout.title}</h2>
              <p className="text-gray-300 mb-4">{workout.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-zinc-700 p-2 rounded">
                  <span className="text-gray-400">ხანგრძლივობა:</span>
                  <span className="ml-2">{workout.duration}</span>
                </div>
                <div className="bg-zinc-700 p-2 rounded">
                  <span className="text-gray-400">სირთულე:</span>
                  <span className="ml-2">{workout.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}