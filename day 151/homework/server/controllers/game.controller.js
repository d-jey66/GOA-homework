import GameResult from '../models/game.model.js';

const WORD_LIST = [
  'REACT', 'NODE', 'GAME', 'CODE', 'WEB',
  'STACK', 'MERN', 'DEVELOPER', 'SERVER', 'CLOUD'
];

export const generateWord = (req, res) => {
  const word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  res.json({ word });
};

export const checkGuess = (req, res) => {
  const { word, guess } = req.body;
  
  if (guess.length !== word.length) {
    return res.json({ error: 'Invalid guess length' });
  }

  const wordLetters = word.split('');
  const result = new Array(word.length).fill('absent');

  guess.split('').forEach((letter, index) => {
    if (letter === word[index]) {
      result[index] = 'correct';
      wordLetters[index] = null; 
    }
  });

  guess.split('').forEach((letter, index) => {
    if (result[index] === 'absent') {
      const presentIndex = wordLetters.indexOf(letter);
      if (presentIndex !== -1) {
        result[index] = 'present';
        wordLetters[presentIndex] = null; 
      }
    }
  });

  res.json({ result });
};

export const saveGameResult = async (req, res) => {
  try {
    const { word, guesses, won } = req.body;
    const gameResult = new GameResult({ word, guesses, won });
    await gameResult.save();
    res.status(201).json(gameResult);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save game result' });
  }
};