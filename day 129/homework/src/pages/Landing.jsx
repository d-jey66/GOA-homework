import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Landing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">YourLogo</h1>
            <div className="space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900">Sign In</Link>
              <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h2>
          <p className="text-xl text-gray-600 mb-8">Discover our amazing features</p>
          <Link 
            to="/signup" 
            className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Landing;