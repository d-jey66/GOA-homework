import React from 'react';

const BlogPostCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2">
          <img 
            src="/api/placeholder/600/400" 
            alt="design" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">
            Transform Your Space with Simple Decor Tricks
          </h2>
          <p className="text-gray-600 mb-4">
            Feeling like your room lacks personality? Discover easy ways to breathe life into any space. These quick styling tips will help you create a warm, inviting atmosphere without breaking the bank.
          </p>
          <div className="flex items-center mt-4">
            <img 
              src="/api/placeholder/48/48" 
              alt="Author" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Dachi jananshvili</h3>
              <p className="text-sm text-gray-500">22 Mar 2025</p>
            </div>
            <button className="ml-auto bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;