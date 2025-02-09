import React from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current.children, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    })
    gsap.to(navRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    })
  }, [])

  return (
    <nav ref={navRef} className="bg-zinc-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <Link to="/" className="hover:text-blue-400 transition-colors">პერსონალური ბლოგი</Link>
        <Link to="/photos" className="hover:text-blue-400 transition-colors">ფოტოგრაფია</Link>
        <Link to="/travel" className="hover:text-blue-400 transition-colors">მოგზაურობა</Link>
        <Link to="/culinary" className="hover:text-blue-400 transition-colors">კულინარია</Link>
        <Link to="/fitness" className="hover:text-blue-400 transition-colors">ფიტნესი</Link>
        <Link to="/music" className="hover:text-blue-400 transition-colors">მუსიკა</Link>
        <Link to="/movies" className="hover:text-blue-400 transition-colors">ფილმები</Link>
        <Link to="/games" className="hover:text-blue-400 transition-colors">თამაშები</Link>
        <Link to="/news" className="hover:text-blue-400 transition-colors">სიახლეები</Link>
      </div>
    </nav>
  )
}