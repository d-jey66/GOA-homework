import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Garage from './pages/Garage'

export default function App() {
  const [page, setPage] = useState('login')
  const [session, setSession] = useState(localStorage.getItem('session') || '')

  const navigate = (p) => setPage(p)

  if (!session && page === 'garage') setPage('login')

  return (
    <div className='p-6'>
      {page === 'login' && <Login setPage={navigate} setSession={setSession} />}
      {page === 'register' && <Register setPage={navigate} />}
      {page === 'garage' && <Garage session={session} setPage={navigate} />}
    </div>
  )
}
