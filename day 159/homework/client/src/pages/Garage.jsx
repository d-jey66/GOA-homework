import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import BMWCard from '../components/BMWCard'

export default function Garage({ session, setPage }) {
  const [bmws, setBmws] = useState([])
  const [form, setForm] = useState({ model: '', year: '', horsepower: '' })
  const [editId, setEditId] = useState(null)

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/api/bmw', {
      headers: { Authorization: session }
    })
    const data = await res.json()
    setBmws(data)
  }

  const create = async () => {
    await fetch('http://localhost:5000/api/bmw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: session },
      body: JSON.stringify(form)
    })
    setForm({ model: '', year: '', horsepower: '' })
    fetchData()
  }

  const update = async () => {
    await fetch(`http://localhost:5000/api/bmw/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: session },
      body: JSON.stringify(form)
    })
    setEditId(null)
    setForm({ model: '', year: '', horsepower: '' })
    fetchData()
  }

  const remove = async (id) => {
    await fetch(`http://localhost:5000/api/bmw/${id}`, {
      method: 'DELETE',
      headers: { Authorization: session }
    })
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='max-w-4xl mx-auto'>
      <Navbar setPage={setPage} />
      <div className='grid gap-2 grid-cols-3 mb-4'>
        <input className='p-2 bg-gray-800' placeholder='Model' value={form.model} onChange={e => setForm({ ...form, model: e.target.value })} />
        <input className='p-2 bg-gray-800' placeholder='Year' value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />
        <input className='p-2 bg-gray-800' placeholder='Horsepower' value={form.horsepower} onChange={e => setForm({ ...form, horsepower: e.target.value })} />
      </div>
      <button className='bg-green-600 px-4 py-2 rounded-xl mb-6' onClick={editId ? update : create}>
        {editId ? 'Update BMW' : 'Add BMW'}
      </button>
      <div className='grid gap-4'>
        {bmws.map(b => (
          <BMWCard key={b._id} car={b} onEdit={(car) => { setForm(car); setEditId(car._id) }} onDelete={remove} />
        ))}
      </div>
    </div>
  )
}
