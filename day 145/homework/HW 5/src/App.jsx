import React, { useEffect, useState } from 'react';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    localStorage.setItem('lastVisitedPage', page);
  };

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage') || 'home';
    setCurrentPage(lastVisitedPage);
  }, []);

  return (
    <div className="p-4">
      <nav className="mb-4">
        <button onClick={() => navigate('home')} className="mr-4">Home</button>
        <button onClick={() => navigate('about')} className="mr-4">About</button>
        <button onClick={() => navigate('contact')} className="mr-4">Contact</button>
      </nav>

      <div>
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default App;
