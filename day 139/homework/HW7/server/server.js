import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

let gameStats = {
  rockPaperScissors: {
    totalGames: 0,
    playerWins: 0,
    computerWins: 0,
    draws: 0,
    lastGames: []
  },
  ticTacToe: {
    totalGames: 0,
    xWins: 0,
    oWins: 0,
    draws: 0,
    currentGame: Array(9).fill(null)
  }
};

app.post('/api/rps/play', (req, res) => {
  const { playerChoice } = req.body;
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result;
  if (playerChoice === computerChoice) {
    result = 'draw';
    gameStats.rockPaperScissors.draws++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'win';
    gameStats.rockPaperScissors.playerWins++;
  } else {
    result = 'lose';
    gameStats.rockPaperScissors.computerWins++;
  }

  gameStats.rockPaperScissors.totalGames++;
  gameStats.rockPaperScissors.lastGames.push({
    playerChoice,
    computerChoice,
    result,
    timestamp: new Date()
  });

  if (gameStats.rockPaperScissors.lastGames.length > 10) {
    gameStats.rockPaperScissors.lastGames.shift();
  }

  res.json({
    playerChoice,
    computerChoice,
    result,
    stats: gameStats.rockPaperScissors
  });
});

app.post('/api/tictactoe/move', (req, res) => {
  const { position, player } = req.body;
  
  if (position < 0 || position > 8 || gameStats.ticTacToe.currentGame[position]) {
    return res.status(400).json({ error: 'Invalid move' });
  }

  gameStats.ticTacToe.currentGame[position] = player;

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  let winner = null;
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameStats.ticTacToe.currentGame[a] &&
      gameStats.ticTacToe.currentGame[a] === gameStats.ticTacToe.currentGame[b] &&
      gameStats.ticTacToe.currentGame[a] === gameStats.ticTacToe.currentGame[c]
    ) {
      winner = gameStats.ticTacToe.currentGame[a];
      if (winner === 'X') gameStats.ticTacToe.xWins++;
      else gameStats.ticTacToe.oWins++;
      gameStats.ticTacToe.totalGames++;
      break;
    }
  }

  const isDraw = !winner && !gameStats.ticTacToe.currentGame.includes(null);
  if (isDraw) {
    gameStats.ticTacToe.draws++;
    gameStats.ticTacToe.totalGames++;
  }

  res.json({
    board: gameStats.ticTacToe.currentGame,
    winner,
    isDraw,
    stats: gameStats.ticTacToe
  });
});

app.post('/api/tictactoe/reset', (req, res) => {
  gameStats.ticTacToe.currentGame = Array(9).fill(null);
  res.json({
    board: gameStats.ticTacToe.currentGame,
    stats: gameStats.ticTacToe
  });
});

app.get('/api/stats', (req, res) => {
  res.json(gameStats);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});