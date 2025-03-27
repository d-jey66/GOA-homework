import React, { useState, useEffect } from 'react';
import api from './api.jsx';

const WordleGame = () => {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [results, setResults] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchNewWord();
  }, []);

  useEffect(() => {
    if (word) {
      setGuesses(Array(6).fill('').map(() => Array(word.length).fill('')));
      setResults(Array(6).fill(null).map(() => Array(word.length).fill('')));
    }
  }, [word]);

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [currentRow, currentCol, gameOver, guesses]);

  const fetchNewWord = async () => {
    try {
      console.log('Fetching new word...');
      const response = await api.get('/game/word');
      const newWord = response.data.word.toUpperCase();
      console.log('Received word:', newWord);

      setWord(newWord);
      setCurrentRow(0);
      setCurrentCol(0);
      setGameOver(false);
      setMessage('');
    } catch (error) {
      console.error('Failed to fetch word', error);
      setMessage(`Failed to load word: ${error.message}`);
    }
  };

  const handleKeyDown = (event) => {
    if (gameOver) return;

    const key = event.key.toUpperCase();
    if (/^[A-Z]$/.test(key) && currentCol < word.length) {
      const newGuesses = [...guesses];
      newGuesses[currentRow][currentCol] = key;
      setGuesses(newGuesses);

      setCurrentCol(prev => prev + 1);
    } else if (event.key === 'Backspace' && currentCol > 0) {
      const newGuesses = [...guesses];
      newGuesses[currentRow][currentCol - 1] = '';
      setGuesses(newGuesses);

      setCurrentCol(prev => prev - 1);
    } else if (event.key === 'Enter') {
      submitGuess();
    }
  };

  const submitGuess = async () => {
    if (currentCol !== word.length) return;

    const guessWord = guesses[currentRow].join('');

    try {
      const response = await api.post('/game/guess', { 
        word, 
        guess: guessWord 
      });

      const newResults = [...results];
      newResults[currentRow] = response.data.result;
      setResults(newResults);

      if (response.data.result.every(r => r === 'correct')) {
        setGameOver(true);
        setMessage(`Congratulations! You guessed the word ${word}`);
        return;
      }

      setCurrentRow(prev => prev + 1);
      setCurrentCol(0);

      if (currentRow === 5) {
        setGameOver(true);
        setMessage(`Game Over! The word was ${word}`);
      }
    } catch (error) {
      console.error('Guess submission failed', error);
      setMessage(`Failed to submit guess: ${error.message}`);
    }
  };

  const getTileColor = (status) => {
    switch (status) {
      case 'correct': return 'bg-green-500 text-white';
      case 'present': return 'bg-yellow-500 text-white';
      case 'absent': return 'bg-red-500 text-white';
      default: return 'bg-white border-2 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Wordle Clone</h1>
      
      <div className="grid grid-rows-6 gap-2 mb-4">
        {guesses.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((letter, colIndex) => {
              const status = results[rowIndex] ? results[rowIndex][colIndex] : '';
              return (
                <div 
                  key={colIndex} 
                  className={`w-16 h-16 m-1 flex items-center justify-center 
                    text-2xl font-bold uppercase
                    ${getTileColor(status)}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {message && (
        <div className="mb-4 text-center text-2xl text-red-600">
          {message}
        </div>
      )}

      <div className="flex space-x-4">
        <button 
          onClick={fetchNewWord}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default WordleGame;
