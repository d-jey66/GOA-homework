import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="mb-6">
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/books" 
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Books
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}

export default App;