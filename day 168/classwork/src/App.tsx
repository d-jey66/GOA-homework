import "./index.css";

export default function SignInPage() {
  return (
    <div className="z-10 bg-color-black">
      <div className="overlay"></div>

      <header className="header">
        <div className="brand">
          ⚙️ argon | <span>chakra</span>
        </div>
        <nav className="nav">
          <a href="#">Dashboard</a>
          <a href="#">Profile</a>
          <a href="#">Sign Up</a>
          <a href="#">Sign In</a>
          <button className="download-btn">FREE DOWNLOAD</button>
        </nav>
      </header>

      <main className="main">
        <div className="form-container">

        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Creative Tim</a>
          <a href="#">Simmmple</a>
          <a href="#">Blog</a>
          <a href="#">License</a>
        </div>
        <p>© 2025, Made with ❤️ by Creative Tim & Simmmple for a better web</p>
      </footer>
    </div>
  );
}
