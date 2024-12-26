import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePine } from 'lucide-react';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <TreePine size={48} className="text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">Christmas Portal</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 p-2 border rounded"
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-2 border rounded"
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
          <button 
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;