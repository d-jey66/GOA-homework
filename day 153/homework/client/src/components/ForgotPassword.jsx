import React, { useState } from 'react'
import axios from 'axios'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resetToken, setResetToken] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await axios.post(
        'http://localhost:9999/auth/forgot-password', 
        { email }
      )
      
      setSuccess(response.data.message)
      
      // Only for demo purposes without email service
      if (response.data.resetToken) {
        setResetToken(response.data.resetToken)
      }
      
      setEmail('')
    } catch (err) {
      setError(err.response?.data?.message || 'Error processing request')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Forgot your password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{success}</span>
            
            {resetToken && (
              <div className="mt-2">
                <p className="font-bold">Demo Reset Token (normally would be sent by email):</p>
                <p className="text-xs break-all">{resetToken}</p>
                <a 
                  href={`/reset-password?token=${resetToken}`}
                  className="block mt-2 text-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Click here to reset password (demo)
                </a>
              </div>
            )}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2.5 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 ring-1 ring-inset ring-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
            >
              {loading ? 'Processing...' : 'Send reset link'}
            </button>
          </div>
          
          <div className="text-sm text-center">
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Back to login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword