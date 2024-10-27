import React from 'react';
import './index.css';

function App() {
  const handleDownloadClick = () => {
    alert('Download link will be available soon!');
  };

  return (
    <div className="container">
      <header>
        <h1>Linux</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Linux</h2>
          <p>Linux is a family of open-source Unix-like operating systems based on the Linux kernel.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt83PwwuAWtdqJpmg897eKfc2GRF7Xfqc0kQ&s" alt="" />
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>Open Source</li>
            <li>Multitasking</li>
            <li>Multiuser</li>
            <li>Portability</li>
            <li>Security</li>
          </ul>
        </section>

        <section id="download">
          <h2>Download Linux</h2>
          <button onClick={handleDownloadClick}>Download</button>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: support@linux.org</p>
        </section>
      </main>
    </div>
  );
}

export default App;
