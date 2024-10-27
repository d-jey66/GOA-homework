function Hero() {
    return (
      <section id="hero" className="flex items-center justify-center bg-gray-800 text-white h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-6">Building a website with React and Tailwind</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">Get Started</button>
        </div>
      </section>
    );
  }
  
  export default Hero;
  