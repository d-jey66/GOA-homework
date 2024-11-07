import React, { useState, useEffect } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-b from-purple-500 to-purple-800 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">My Todo List</h1>
      <div className="flex mb-6 w-full max-w-lg space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Enter your task..."
        />
        <button
          onClick={addTodo}
          className="bg-pink-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-pink-600"
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-lg space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <span className="text-lg">{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
