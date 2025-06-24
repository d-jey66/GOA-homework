

// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthStatus = async () => {
      if (token) {
        try {
          const response = await fetch('http://localhost:5000/auth/me', {
            headers: {
              'x-auth-token': token
            }
          })
          
          if (response.ok) {
            const data = await response.json()
            setUser(data)
          } else {
            localStorage.removeItem('token')
            setToken(null)
          }
        } catch (error) {
          console.error('Auth check failed:', error)
          localStorage.removeItem('token')
          setToken(null)
        }
      }
      setIsLoading(false)
    }

    checkAuthStatus()
  }, [token])

  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  const value = {
    token,
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
      {isLoading && <div className="loading">Loading...</div>}
    </AuthContext.Provider>
  )
}

// src/components/Auth/ProtectedRoute.js
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const ProtectedRoute = ({ children, isAdmin = false }) => {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (isAdmin && (!user || !user.isAdmin)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute

// src/components/Layout/Navbar.js
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Navbar.css'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Capybara & Lion Kingdom</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/capybaras" className="navbar-item">Capybaras</Link>
        <Link to="/lions" className="navbar-item">Lions</Link>
        {user && user.isAdmin && (
          <Link to="/admin" className="navbar-item">Admin</Link>
        )}
        {isAuthenticated ? (
          <div className="navbar-item user-menu">
            <span>Hello, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/register" className="navbar-item">Register</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

// src/components/Layout/Footer.js
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Capybara & Lion Kingdom</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// src/components/Home/Home.js
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Capybara & Lion Kingdom</h1>
        <p>Learn about the world's largest rodent and the king of the jungle</p>
        <div className="hero-buttons">
          <Link to="/capybaras" className="btn btn-primary">Explore Capybaras</Link>
          <Link to="/lions" className="btn btn-secondary">Discover Lions</Link>
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-card">
          <h2>About Capybaras</h2>
          <p>Capybaras are the largest living rodents in the world. They are semi-aquatic mammals found throughout South America.</p>
          <Link to="/capybaras" className="btn btn-outline">Learn More</Link>
        </div>
        <div className="info-card">
          <h2>About Lions</h2>
          <p>Lions are the second largest big cat species in the world and known as the "King of the Jungle" despite living in grasslands and plains.</p>
          <Link to="/lions" className="btn btn-outline">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

// src/components/Capybaras/CapybaraList.js
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Capybaras.css'

const CapybaraList = () => {
  const [capybaras, setCapybaras] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCapybaras = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/capybaras')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setCapybaras(data)
        setIsLoading(false)
      } catch (error) {
        setError('Failed to fetch capybaras. Please try again later.')
        setIsLoading(false)
        console.error('Error fetching capybaras:', error)
      }
    }

    fetchCapybaras()
  }, [])

  if (isLoading) {
    return <div className="loading">Loading capybaras...</div>
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div className="capybara-list">
      <h1>Capybaras</h1>
      <div className="capybara-grid">
        {capybaras.length > 0 ? (
          capybaras.map(capybara => (
            <div key={capybara._id} className="capybara-card">
              <img src={capybara.imageUrl} alt={capybara.name} className="capybara-image" />
              <div className="capybara-info">
                <h2>{capybara.name}</h2>
                <p>Age: {capybara.age} years</p>
                <p>Location: {capybara.location}</p>
                <Link to={`/capybaras/${capybara._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No capybaras found. Check back later!</p>
        )}
      </div>
    </div>
  )
}

export default CapybaraList

// src/components/Capybaras/CapybaraDetail.js
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Capybaras.css'

const CapybaraDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [capybara, setCapybara] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCapybara = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/capybaras/${id}`)
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Capybara not found')
          }
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setCapybara(data)
        setIsLoading(false)
      } catch (error) {
        setError(error.message)
        setIsLoading(false)
        console.error('Error fetching capybara:', error)
      }
    }

    fetchCapybara()
  }, [id])

  if (isLoading) {
    return <div className="loading">Loading capybara details...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <button className="btn btn-primary" onClick={() => navigate('/capybaras')}>
          Back to Capybaras
        </button>
      </div>
    )
  }

  return (
    <div className="capybara-detail">
      <div className="capybara-header">
        <h1>{capybara.name}</h1>
        <button className="btn btn-secondary" onClick={() => navigate('/capybaras')}>
          Back to Capybaras
        </button>
      </div>
      
      <div className="capybara-content">
        <div className="capybara-image-large">
          <img src={capybara.imageUrl} alt={capybara.name} />
        </div>
        
        <div className="capybara-info-detail">
          <div className="info-item">
            <h3>Age</h3>
            <p>{capybara.age} years</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>{capybara.location}</p>
          </div>
          <div className="info-item">
            <h3>Description</h3>
            <p>{capybara.description}</p>
          </div>
          
          {capybara.facts && capybara.facts.length > 0 && (
            <div className="info-item">
              <h3>Interesting Facts</h3>
              <ul className="facts-list">
                {capybara.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CapybaraDetail

// src/components/Admin/AdminDashboard.js
import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import CapybaraForm from './CapybaraForm'
import LionForm from './LionForm'
import './Admin.css'

const AdminDashboard = () => {
  const [capybaras, setCapybaras] = useState([])
  const [lions, setLions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [capybaraRes, lionRes] = await Promise.all([
          fetch('http://localhost:5000/api/capybaras'),
          fetch('http://localhost:5000/api/lions')
        ])
        
        const capybaraData = await capybaraRes.json()
        const lionData = await lionRes.json()
        
        setCapybaras(capybaraData)
        setLions(lionData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }
    
    fetchData()
  }, [])

  const handleDelete = async (id, type) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) {
      return
    }
    
    try {
      const response = await fetch(`http://localhost:5000/api/${type}s/${id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token
        }
      })
      
      if (response.ok) {
        if (type === 'capybara') {
          setCapybaras(capybaras.filter(item => item._id !== id))
        } else {
          setLions(lions.filter(item => item._id !== id))
        }
      } else {
        console.error('Delete failed')
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error)
    }
  }

  if (isLoading) {
    return <div className="loading">Loading admin dashboard...</div>
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-navigation">
        <Link to="/admin" className="nav-link">Dashboard</Link>
        <Link to="/admin/add-capybara" className="nav-link">Add Capybara</Link>
        <Link to="/admin/add-lion" className="nav-link">Add Lion</Link>
      </div>
      
      <Routes>
        <Route path="/" element={
          <div className="admin-content">
            <div className="admin-section">
              <h2>Manage Capybaras</h2>
              <div className="admin-list">
                {capybaras.map(capybara => (
                  <div key={capybara._id} className="admin-item">
                    <div className="item-info">
                      <h3>{capybara.name}</h3>
                      <p>Age: {capybara.age} years</p>
                      <p>Location: {capybara.location}</p>
                    </div>
                    <div className="item-actions">
                      <button 
                        className="btn btn-danger" 
                        onClick={() => handleDelete(capybara._id, 'capybara')}
                      >
                        Delete
                      </button>
                      {/* Add edit button here if needed in the future */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-section">
              <h2>Manage Lions</h2>
              <div className="admin-list">
                {lions.map(lion => (
                  <div key={lion._id} className="admin-item">
                    <div className="item-info">
                      <h3>{lion.name}</h3>
                      <p>Age: {lion.age} years</p>
                      <p>Location: {lion.location}</p>
                    </div>
                    <div className="item-actions">
                      <button 
                        className="btn btn-danger" 
                        onClick={() => handleDelete(lion._id, 'lion')}
                      >
                        Delete
                      </button>
                      {/* Add edit button here if needed in the future */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        } />
        <Route path="add-capybara" element={<CapybaraForm />} />
        <Route path="add-lion" element={<LionForm />} />
        {/* Add edit routes here in the future */}
      </Routes>
    </div>
  )
}

export default AdminDashboard
