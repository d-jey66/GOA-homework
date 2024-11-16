import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Random Blog</h1>
      </header>

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Blog</p>
      </footer>
    </div>
  );
};

export default YourComponent;
