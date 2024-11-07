import React from 'react';

function Signup({ togglePage }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{' '}
        <button
          onClick={togglePage} 
          className="text-blue-500 hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}

export default Signup;
