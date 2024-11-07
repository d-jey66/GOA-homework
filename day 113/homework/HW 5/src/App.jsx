import React, { useState } from 'react';
import Signup from './pages/signup';

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true); 

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isLoginPage ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
              >
                Log In
              </button>
            </form>
            <p className="text-center mt-4">
              Don't have an account?{' '}
              <button
                onClick={togglePage} 
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <Signup togglePage={togglePage} />
        )}
      </div>
    </div>
  );
}

export default App;
