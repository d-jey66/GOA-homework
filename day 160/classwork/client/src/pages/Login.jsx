import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');      
    } catch (err) {
      console.error(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="input"
        required
      />

      <button type="submit" className="btn">Login</button>

      <p className="text-sm text-center">
        Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
      </p>
    </form>
  );
};

export default Login;
