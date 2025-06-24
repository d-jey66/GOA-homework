import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem('token');

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchUsers();
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl space-y-4">
      <h1 className="text-2xl font-bold text-center">Users</h1>
      {users.map(user => (
        <div key={user._id} className="flex justify-between items-center border-b py-2">
          <span>{user.username}</span>
          <button onClick={() => deleteUser(user._id)} className="btn px-2 py-1 text-sm">Delete</button>
        </div>
      ))}
      <button onClick={logout} className="btn mt-4 w-full">Logout</button>
    </div>
  );
};

export default Dashboard;
