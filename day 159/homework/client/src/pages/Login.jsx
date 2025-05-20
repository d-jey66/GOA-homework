import { useState } from 'react'

export default function Login({ setPage, setSession }) {
  const [form, setForm] = useState({ email: '', password: '' })

  // Update your login submit function:
const submit = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // This tells the browser to send cookies
      body: JSON.stringify(form),
    });
    
    // First check if the response exists before trying to parse it
    if (!res) {
      console.error('No response from server');
      return;
    }
    
    // Now safely try to parse the JSON
    let data;
    try {
      data = await res.json();
    } catch (jsonErr) {
      console.error('Failed to parse response:', jsonErr);
      return;
    }
    
    if (!res.ok) {
      console.error('Login failed:', data?.message || 'Unknown error');
      return;
    }
    
    if (data?.sessionId) {
      localStorage.setItem('session', data.sessionId);
      setSession(data.sessionId);
      setPage('garage');
    }
  } catch (err) {
    console.error('Network or server error:', err);
  }
};
  

  return (
    <div className='max-w-sm mx-auto space-y-4'>
      <h1 className='text-2xl'>Login</h1>
      <input className='w-full p-2 bg-gray-800' placeholder='Email' onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className='w-full p-2 bg-gray-800' placeholder='Password' type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className='bg-blue-600 w-full py-2' onClick={submit}>Login</button>
      <button className='text-sm underline' onClick={() => setPage('register')}>No account? Register</button>
    </div>
  )
}
