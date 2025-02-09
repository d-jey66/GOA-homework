import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CurrencyConverter = () => {
  const [rates, setRates] = useState(null)
  const [amount, setAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [result, setResult] = useState(null)
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const buttonRef = useRef(null)
  const resultRef = useRef(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/rates')
      .then(response => response.json())
      .then(data => setRates(data))
      .catch(() => setRates({ USD: 1, EUR: 0.92, GBP: 0.79, RUB: 92.4, TRY: 27.5, JPY: 145.6 }))
  }, [])

  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, y: -50, duration: 1 })
    gsap.from([inputRef.current, selectRef.current, buttonRef.current], { opacity: 0, y: 30, stagger: 0.2, duration: 0.8 })
  }, [])

  useEffect(() => {
    if (resultRef.current && result !== null) {
      gsap.from(resultRef.current, { opacity: 0, y: 20, duration: 0.5 })
      gsap.to(resultRef.current, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 })
    }
  }, [result])

  const handleSubmit = e => {
    e.preventDefault()
    if (rates && amount && rates[currency]) {
      setResult((parseFloat(amount) * rates[currency]).toFixed(2))
      gsap.fromTo(buttonRef.current, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 })
    }
  }

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg">ვალუტის გადამყვანი</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center space-y-6">
        <input
          ref={inputRef}
          type="number"
          placeholder="გთხოვთ შეიყვანეთ თანხა"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-72 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        />
        <select
          ref={selectRef}
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          className="w-72 border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
        >
          {rates
            ? Object.keys(rates).map(curr => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))
            : null}
        </select>
        <button
          ref={buttonRef}
          type="submit"
          className="w-72 bg-blue-500 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition transform hover:scale-105"
        >
          გადაყვანა
        </button>
      </form>
      {result !== null && (
        <div ref={resultRef} className="mt-10 bg-white rounded-2xl shadow-2xl px-10 py-6">
          <p className="text-3xl font-bold text-gray-800">შედეგი: {result} {currency}</p>
        </div>
      )}
    </div>
  )
}

export default CurrencyConverter
