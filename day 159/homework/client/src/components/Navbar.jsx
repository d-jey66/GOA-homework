export default function Navbar({ setPage }) {
    return (
      <div className='flex justify-between items-center p-4 bg-gray-800 mb-6 rounded-xl'>
        <h1 className='text-xl font-bold tracking-widest'>BMW GARAGE</h1>
        <button className='text-sm text-gray-300 underline' onClick={() => {
          localStorage.removeItem('session')
          setPage('login')
        }}>
          Logout
        </button>
      </div>
    )
  }
  