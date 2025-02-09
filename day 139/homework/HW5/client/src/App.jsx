import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(null)
  const containerRef = useRef(null)
  const quoteRef = useRef(null)
  const buttonRef = useRef(null)
  const firstRunRef = useRef(true)    

  useEffect(() => {
    fetch('http://localhost:5000/api/quotes')
      .then(response => response.json())
      .then(data => {
        setQuotes(data)
        setCurrentQuote(data[Math.floor(Math.random() * data.length)])
      })
  }, [])

  useEffect(() => {
    if (!currentQuote) return
    if (firstRunRef.current && containerRef.current) {
      gsap.from(containerRef.current, { opacity: 0, y: -50, duration: 1 })
      firstRunRef.current = false
    }
    if (quoteRef.current) {
      gsap.from(quoteRef.current, { opacity: 0, x: -100, duration: 0.8 })
    }
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 })
    }
  }, [currentQuote])

  const getRandomQuote = () => {
    if (quotes.length > 0) {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center bg-black p-8">
      <h1 className="text-5xl font-bold text-red-600 mb-8 drop-shadow-lg">ციტატების გენერატორი</h1>
      {currentQuote && (
        <div ref={quoteRef} className="bg-gray-900 rounded-xl shadow-xl p-8 max-w-2xl text-center">
          <p className="text-2xl text-red-500 mb-4">"{currentQuote.text}"</p>
        </div>
      )}
      <button
        ref={buttonRef}
        onClick={getRandomQuote}
        className="mt-8 px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105"
      >
        შემდეგი ციტატა
      </button>
    </div>
  )
}

export default QuoteGenerator
