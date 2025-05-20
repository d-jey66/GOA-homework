import { useState, useEffect } from 'react';

export default function MainPage() {
  const [grade, setGrade] = useState('');
  const [grades, setGrades] = useState([]);
  const [average, setAverage] = useState(0);
  const userId = localStorage.getItem('userId');

  const fetchGrades = async () => {
    const res = await fetch(`http://localhost:5000/api/grades/${userId}`);
    const data = await res.json();
    setGrades(data);
  };

  const fetchAverage = async () => {
    const res = await fetch(`http://localhost:5000/api/average/${userId}`);
    const data = await res.json();
    setAverage(data.average);
  };

  const addGrade = async () => {
    await fetch('http://localhost:5000/api/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, grade: Number(grade) })
    });
    fetchGrades();
    fetchAverage();
  };

  const deleteGrade = async (index) => {
    await fetch('http://localhost:5000/api/grade', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, index })
    });
    fetchGrades();
    fetchAverage();
  };

  useEffect(() => {
    fetchGrades();
    fetchAverage();
  }, []);

  return (
    <div>
      <input placeholder="Enter grade" onChange={(e) => setGrade(e.target.value)} />
      <button onClick={addGrade}>Add Grade</button>
      <div>
        <h3>Grades:</h3>
        {grades.map((g, i) => (
          <div key={i}>
            {g} <button onClick={() => deleteGrade(i)}>Delete</button>
          </div>
        ))}
      </div>
      <h3>Average: {average}</h3>
    </div>
  );
}
