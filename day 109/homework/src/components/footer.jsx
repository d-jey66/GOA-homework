import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-white text-black rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
