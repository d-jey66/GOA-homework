import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const { confirmPassword, ...payload } = formData
      
      payload.age = Number(payload.age)
      
      const response = await axios.post(
        'http://localhost:9999/auth/register', 
        payload
      )
      
      setSuccess(response.data.message)
      
      setFormData({
        name: '',
        surname: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: ''
      })
      
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{success}</span>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">First name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  minLength="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
                max="300"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
            >
              {loading ? 'Processing...' : 'Sign up'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            <span className="text-gray-500">Already have an account? </span>
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register