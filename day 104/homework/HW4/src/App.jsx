import './index.css'

function App() {
  const handleDownloadClick = () => {
    alert('transaction failed');
  };

  return (
    <div className="container">
      <header>
        <h1>Windows</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#download">Buy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Windows</h2>
          <p>Windows is an operating system developed by Microsoft that provides a graphical user interface for personal computers.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zSFaXip4ph7zDpE45CpCVsNiyMeyL4uONw&s" alt="" />
        </section>

        <section id="features">
          <h2>Features</h2>
          <ul>
            <li>DirectX</li>
            <li>Wide Software Compatibility</li>
            <li>Active Directory Integration</li>
            <li>Native .exe Support</li>
            <li>Windows-specific Enterprise Tools</li>
          </ul>
        </section>

        <section id="download">
          <h2>Buy windows</h2>
          <button onClick={handleDownloadClick}>Buy</button>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email: support@windows.org</p>
        </section>
      </main>
    </div>
  );
}

export default App
