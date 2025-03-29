import React, { useState, useEffect } from 'react'
import axios from 'axios'
const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const tokenParam = queryParams.get('token')
    
    if (tokenParam) {
      setToken(tokenParam)
    } else {
      setError('Invalid or expired link')
    }
  }, [location])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    
    if (formData.newPassword.length < 6) {
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
      const response = await axios.post(
        'http://localhost:9999/auth/reset-password', 
        {
          token,
          newPassword: formData.newPassword
        }
      )
      
      setSuccess(response.data.message)
      
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      setError(err.response?.data?.message || 'Error resetting password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset your password
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
            <p className="mt-2 text-sm">Redirecting to login page...</p>
          </div>
        )}
        
        {!token ? (
          <div className="text-center">
            <p className="text-red-500 mb-4">Invalid or expired reset link</p>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2.5 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2.5 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
              >
                {loading ? 'Processing...' : 'Reset Password'}
              </button>
            </div>
            
            <div className="text-sm text-center">
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ResetPassword