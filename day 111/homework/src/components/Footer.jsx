import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-8 px-4 mt-5 shadow">
      <div className="max-w-lg mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-6">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Message"
            className="p-3 rounded bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-400 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-black text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;

