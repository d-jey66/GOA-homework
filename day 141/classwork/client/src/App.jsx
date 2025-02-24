import React, { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error))
  }, [])

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} {user.surname} - {user.age} years old</li>
        ))}
      </ul>
    </div>
  )
}
