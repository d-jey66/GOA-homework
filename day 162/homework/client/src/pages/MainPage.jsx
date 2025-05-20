import React from 'react';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white px-8 py-12 font-sans">
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-extrabold">My Portfolio</h1>
        <nav className="space-x-6 text-lg">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </nav>
      </header>

      <section className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-4">Hey, I'm <span className="text-purple-400 text-5xl">Dachi</span></h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          I'm a full-stack developer passionate about building beautiful and performant web applications. Check out some of my work below.
        </p>
      </section>
    
      <section id="projects" className="mb-20">
        <h3 className="text-3xl font-semibold mb-6">🚀 Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
            <p className="text-gray-400">A sleek and responsive portfolio site built with React, Tailwind, and Express.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-bold mb-2">Blog Platform</h4>
            <p className="text-gray-400">A secure full-stack blogging app using MERN and JWT authentication.</p>
          </div>
        </div>
      </section>

      <section id="about" className="mb-20">
        <h3 className="text-3xl font-semibold mb-6">🙋‍♂️ About Me</h3>
        <p className="text-gray-300 max-w-3xl">
          I’m a 14-year-old web developer with a love for cars and code. When I’m not building full-stack apps, you’ll find me learning about automotive mechanics, sim racing in Assetto Corsa, or biking around town.
        </p>
      </section>

      <section id="contact">
        <h3 className="text-3xl font-semibold mb-6">📬 Contact</h3>
        <p className="text-gray-300 mb-4">Feel free to reach out via email or social media.</p>
        <div className="space-x-4">
          <a href="mailto:example@gmail.com" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded shadow">Email Me</a>
          <a href="https://github.com/d-jey66" className="text-purple-400 underline">GitHub</a>
        </div>
      </section>
    </div>
  );
}
