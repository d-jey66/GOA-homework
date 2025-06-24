import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', form);
      navigate('/login');
    } catch (err) {
      console.error(err.response.data?.msg || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="input"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
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

      <button type="submit" className="btn">Register</button>

      <p className="text-sm text-center">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </form>
  );
};

export default Register;
