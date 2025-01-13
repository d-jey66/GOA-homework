import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Send Reset Instructions
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 mb-4">
              Reset instructions have been sent to your email
            </p>
          </div>
        )}
        
        <Link 
          to="/login" 
          className="block mt-4 text-center text-sm text-blue-500 hover:underline"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;