import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173' 
}));

const words = [
  {
    id: 1,
    word: 'React',
    definition: 'A JavaScript library for building user interfaces.'
  },
  {
    id: 2,
    word: 'Node',
    definition: 'A JavaScript runtime built on Chrome’s V8 JavaScript engine.'
  },
  {
    id: 3,
    word: 'Express',
    definition: 'A fast, unopinionated, minimalist web framework for Node.js.'
  },
  {
    id: 4,
    word: 'Tailwind',
    definition: 'A utility-first CSS framework for rapidly building custom designs.'
  },
  {
    id: 5,
    word: 'GSAP',
    definition: 'A high-performance JavaScript animation library.'
  }
];

app.get('/api/words', (req, res) => {
  res.json(words);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
