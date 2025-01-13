import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-yellow-500" />
          ) : (
            <Moon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>
      
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Website
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          This is a sample website with dark/light mode toggle functionality.
          Your theme preference will be saved in localStorage.
        </p>
      </main>
    </div>
  );
};

export default App;