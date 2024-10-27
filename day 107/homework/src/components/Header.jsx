function Header() {
    return (
      <header className="bg-black text-white p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold">My Website</div>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
            <li><a href="#contacts" className="hover:text-gray-300">Contacts</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  