import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CulinaryBlog() {
  const [recipes, setRecipes] = useState([])
  const recipesRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))

    gsap.from(recipesRef.current.children, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">კულინარიული ბლოგი</h1>
      <div ref={recipesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map(recipe => (
          <article key={recipe._id} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
              <p className="text-gray-300 mb-4">{recipe.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">მომზადების დრო:</span>
                  <span className="ml-2">{recipe.prepTime}</span>
                </div>
                <div>
                  <span className="text-gray-400">სირთულე:</span>
                  <span className="ml-2">{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}