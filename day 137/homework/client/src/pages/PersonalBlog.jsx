import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PersonalBlog() {
  const [posts, setPosts] = useState([])
  const postsRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5101/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data))

    gsap.from(postsRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">პერსონალური ბლოგი</h1>
      <div ref={postsRef} className="grid gap-8">
        {posts.map(post => (
          <article key={post._id} className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-300">{post.content}</p>
            <div className="mt-4 text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}