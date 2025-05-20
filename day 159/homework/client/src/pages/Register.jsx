import { useState } from 'react'

export default function Register({ setPage }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const submit = async () => {
    await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    setPage('login')
  }

  return (
    <div className='max-w-sm mx-auto space-y-4'>
      <h1 className='text-2xl'>Register</h1>
      <input className='w-full p-2 bg-gray-800' placeholder='Username' onChange={e => setForm({ ...form, username: e.target.value })} />
      <input className='w-full p-2 bg-gray-800' placeholder='Email' onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className='w-full p-2 bg-gray-800' placeholder='Password' type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className='bg-blue-600 w-full py-2' onClick={submit}>Register</button>
      <button className='text-sm underline' onClick={() => setPage('login')}>Back to login</button>
    </div>
  )
}
