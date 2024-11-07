import React, { useState, useEffect } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), isEditing: false }]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isEditing = !updatedTodos[index].isEditing;
    setTodos(updatedTodos);
  };

  const updateTodoText = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-white mb-6">Editable Todo List</h1>
      <div className="flex mb-6 w-full max-w-md space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="bg-green-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-green-700"
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-md space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-lg"
          >
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => updateTodoText(index, e.target.value)}
                onBlur={() => toggleEdit(index)}
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-md focus:outline-none"
                autoFocus
              />
            ) : (
              <span onClick={() => toggleEdit(index)} className="text-lg cursor-pointer text-gray-800">
                {todo.text}
              </span>
            )}
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
