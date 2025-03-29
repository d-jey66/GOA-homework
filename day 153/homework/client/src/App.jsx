import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Home from './components/Home'

const App = () => {
  return (
    <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
    </AuthProvider>
  )
}

const ProtectedRoute = ({ children }) => {
  const { session } = React.useContext(AuthContext)
  
  if (!session) {
    return <Navigate to="/login" />
  }
  
  return children
}

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [session, setSession] = React.useState(null)
  const [user, setUser] = React.useState(null)

  const login = (sessionId, userData) => {
    setSession(sessionId)
    setUser(userData)
    document.cookie = `session=${sessionId}; path=/`
  }

  const logout = () => {
    setSession(null)
    setUser(null)
    document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }

  React.useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
    }
    
    const sessionCookie = getCookie('session')
    if (sessionCookie) {
      setSession(sessionCookie)
      // In a real app, you would validate the session with the server here
    }
  }, [])

  return (
    <AuthContext.Provider value={{ session, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default App