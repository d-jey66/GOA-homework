import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/api/user')
    .then(res => res.json())
    .then(data => setData(data))
  }, []);
  return (
    <div>
      {data.name}
      <br />
      {data.id}
      <br />
      {data.email}
      <br />
      <img src={data.img} alt="" />
    </div>
  )
}
