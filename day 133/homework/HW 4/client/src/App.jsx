import React, { useState, useEffect } from 'react';
import './index.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5101/api/user')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <div className="relative">
          <img 
            src={user.coverPhoto} 
            alt="Cover" 
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <img 
            src={user.profilePicture} 
            alt="Profile" 
            className="absolute bottom-0 left-4 transform -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
        <div className="p-4 mt-16">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.bio}</p>
          <div className="mt-4 flex space-x-4">
            <span>{user.friends} Friends</span>
            <span>{user.posts} Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;