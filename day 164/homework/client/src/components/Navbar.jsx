import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 shadow p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">📚 Book Library</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">All</Link>
        {user && (
          <>
            <Link to="/add" className="hover:underline">Add</Link>
            <Link to="/search" className="hover:underline">Search</Link>
            <Link to="/favorites" className="hover:underline">Favorites</Link>
            <button
              onClick={() => { logout(); navigate("/login"); }}
              className="text-red-400 hover:underline"
            >
              Logout
            </button>
          </>
        )}
        {!user && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
