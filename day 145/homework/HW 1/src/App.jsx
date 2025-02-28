import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [task, setTask] = useState("");

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Add a new task"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-r">Add</button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span onClick={() => toggleTask(index)} className={`cursor-pointer ${t.completed ? "line-through text-gray-500" : ""}`}>{t.text}</span>
            <button onClick={() => deleteTask(index)} className="text-red-500">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
