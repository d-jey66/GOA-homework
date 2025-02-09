import React, { useState, useEffect } from 'react';
import { Scissors, Hand, Square, RotateCcw, X, Circle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const choices = ['rock', 'paper', 'scissors'];
  const makeChoice = async choice => {
    const res = await fetch('http://localhost:5000/api/rps/play', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerChoice: choice })
    });
    const data = await res.json();
    setPlayerChoice(data.playerChoice);
    setComputerChoice(data.computerChoice);
    setResult(data.result === 'draw' ? 'Draw!' : data.result === 'win' ? 'You win!' : 'Computer wins!');
    setScore(s => data.result === 'win' ? s + 1 : data.result === 'lose' ? s - 1 : s);
  };
  const getIcon = choice => {
    if (choice === 'rock') return <Hand className="w-8 h-8" />;
    if (choice === 'paper') return <Square className="w-8 h-8" />;
    if (choice === 'scissors') return <Scissors className="w-8 h-8" />;
    return null;
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 p-8 flex items-center justify-center">
      <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Rock Paper Scissors</h2>
        <div className="text-center text-xl text-yellow-400 mb-4">Score: {score}</div>
        <div className="flex justify-center gap-4 mb-8">
          {choices.map(choice => (
            <button key={choice} onClick={() => makeChoice(choice)} className="p-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors">
              {getIcon(choice)}
            </button>
          ))}
        </div>
        {playerChoice && computerChoice && (
          <div className="text-center text-white space-y-4">
            <div className="flex justify-center items-center gap-8">
              <div>
                <div className="text-sm mb-2">You</div>
                {getIcon(playerChoice)}
              </div>
              <div>vs</div>
              <div>
                <div className="text-sm mb-2">Computer</div>
                {getIcon(computerChoice)}
              </div>
            </div>
            <div className="text-xl font-bold text-yellow-400">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const handleClick = async i => {
    if (winner || board[i]) return;
    const res = await fetch('http://localhost:5000/api/tictactoe/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ position: i, player: xIsNext ? 'X' : 'O' })
    });
    const data = await res.json();
    setBoard(data.board);
    if (data.winner) setWinner(data.winner);
    else if (data.isDraw) setWinner('Draw');
    setXIsNext(s => !s);
  };
  const resetGame = async () => {
    const res = await fetch('http://localhost:5000/api/tictactoe/reset', { method: 'POST' });
    const data = await res.json();
    setBoard(data.board);
    setXIsNext(true);
    setWinner(null);
  };
  useEffect(() => {
    gsap.fromTo('.game-section', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '.game-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' } });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 p-8 flex items-center justify-center">
      <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Tic Tac Toe</h2>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {board.map((square, i) => (
            <button key={i} onClick={() => handleClick(i)} className="aspect-square bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold transition-colors">
              {square === 'X' ? <X className="w-8 h-8" /> : square === 'O' ? <Circle className="w-8 h-8" /> : null}
            </button>
          ))}
        </div>
        {winner && (
          <div className="text-center text-xl font-bold text-yellow-400 mb-4">Winner: {winner}</div>
        )}
        <button onClick={resetGame} className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white flex items-center justify-center gap-2 transition-colors">
          <RotateCcw className="w-5 h-5" />
          Reset Game
        </button>
      </div>
    </div>
  );
};
const GamesPage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
      <section className="game-section snap-start h-screen">
        <RockPaperScissors />
      </section>
      <section className="game-section snap-start h-screen">
        <TicTacToe />
      </section>
    </div>
  );
};
export default GamesPage;
