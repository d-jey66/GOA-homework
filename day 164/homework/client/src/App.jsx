import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import axios from "axios";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

const API = import.meta.env.VITE_API_BASE_URL;

const App = () => {
  const { token, login } = useAuth();
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (token) {
      fetchBooks();
    }
  }, [token]);

  const fetchBooks = async () => {
    const res = await axios.get(`${API}/books`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBooks(res.data);
  };

  const addBook = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newBook = {
      title: data.get("title"),
      author: data.get("author"),
      genre: data.get("genre"),
      description: data.get("description"),
    };
    await axios.post(`${API}/books`, newBook, {
      headers: { Authorization: `Bearer ${token}` },
    });
    e.target.reset();
    fetchBooks();
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await axios.post(`${API}/auth/login`, {
      email: data.get("email"),
      password: data.get("password"),
    });
    login(res.data.token, res.data.user);
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await axios.post(`${API}/auth/register`, {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/login");
  };

  const toggleFavorite = (bookId) => {
    setFavorites((prev) =>
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    );
  };

  useEffect(() => {
    gsap.from(sectionRef.current, { opacity: 0, y: 20, duration: 0.8 });
    gsap.to(sectionRef.current, { opacity: 1, y: 0, duration: 0.8 });
  }, [location.pathname]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div ref={sectionRef} className="p-4 space-y-4 max-w-3xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              books.length ? (
                books.map((book) => (
                  <BookCard
                    key={book._id}
                    book={book}
                    onFavoriteToggle={toggleFavorite}
                    isFavorite={favorites.includes(book._id)}
                  />
                ))
              ) : (
                <p>No books found.</p>
              )
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <form onSubmit={addBook} className="space-y-4">
                  <input name="title" placeholder="Title" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                  <input name="author" placeholder="Author" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                  <input name="genre" placeholder="Genre" className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                  <textarea name="description" placeholder="Description" className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
                </form>
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <input
                  type="text"
                  placeholder="Search by title or author"
                  onChange={(e) => {
                    const q = e.target.value.toLowerCase();
                    setBooks((prev) =>
                      prev.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
                    );
                  }}
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-white"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                {books
                  .filter((book) => favorites.includes(book._id))
                  .map((book) => (
                    <BookCard
                      key={book._id}
                      book={book}
                      onFavoriteToggle={toggleFavorite}
                      isFavorite={true}
                    />
                  ))}
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
                <input name="email" placeholder="Email" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                <input name="password" type="password" placeholder="Password" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded">Login</button>
              </form>
            }
          />
          <Route
            path="/register"
            element={
              <form onSubmit={handleRegister} className="space-y-4 max-w-sm mx-auto">
                <input name="username" placeholder="Username" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                <input name="email" placeholder="Email" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                <input name="password" type="password" placeholder="Password" required className="w-full p-2 border border-gray-700 bg-gray-800 text-white" />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Register</button>
              </form>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
