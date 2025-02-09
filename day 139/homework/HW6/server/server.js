import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const jokes = [
  {
    id: 1,
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs!",
    category: "programming"
  },
  {
    id: 2,
    setup: "Why did the developer go broke?",
    punchline: "Because he used up all his cache!",
    category: "programming"
  },
  {
    id: 3,
    setup: "Why do programmers always mix up Halloween and Christmas?",
    punchline: "Because Oct 31 equals Dec 25!",
    category: "programming"
  },
  {
    id: 4,
    setup: "What's a programmer's favorite hangout spot?",
    punchline: "Foo Bar!",
    category: "programming"
  },
  {
    id: 5,
    setup: "Why did the functions stop calling each other?",
    punchline: "Because they had constant arguments!",
    category: "programming"
  },
  {
    id: 6,
    setup: "How do you comfort a JavaScript bug?",
    punchline: "You console it!",
    category: "programming"
  },
  {
    id: 7,
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't Node how to Express himself!",
    category: "programming"
  },
  {
    id: 8,
    setup: "Why do programmers hate nature?",
    punchline: "It has too many bugs!",
    category: "programming"
  }
];

app.get("/api/jokes/random", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});