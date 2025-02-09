import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const App = () => {
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWord, setSelectedWord] = useState(null);
  const definitionRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/words')
      .then(response => response.json())
      .then(data => setWords(data))
      .catch(error => console.error('Error fetching words:', error));
  }, []);

  useEffect(() => {
    if (selectedWord && definitionRef.current) {
      gsap.from(definitionRef.current, { opacity: 0, y: -20, duration: 0.5 });
    }
  }, [selectedWord]);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = words.find(item => item.word.toLowerCase() === searchTerm.trim().toLowerCase());
    setSelectedWord(found || null);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl text-yellow-400 mb-8">ლექსიკონი</h1>
      <form onSubmit={handleSearch} className="mb-6 flex">
        <input 
          type="text"
          placeholder="შეიყვანეთ სიტყვა..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button 
          type="submit" 
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition"
        >
          მოძებნა
        </button>
      </form>
      {selectedWord ? (
        <div 
          ref={definitionRef} 
          className="bg-gray-800 text-yellow-300 p-6 rounded-lg shadow-lg max-w-md text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedWord.word}</h2>
          <p>{selectedWord.definition}</p>
        </div>
      ) : (
        searchTerm && (
          <div className="text-red-500">
            მსგავსი სიტყვა ვერ მოიძებნა.
          </div>
        )
      )}
    </div>
  );
};

export default App;
