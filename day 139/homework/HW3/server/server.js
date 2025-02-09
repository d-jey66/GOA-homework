import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173' 
}));

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Mind-bending dream manipulation thriller",
    year: 2010,
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
    id: 2,
    title: "The Matrix",
    description: "Revolutionary sci-fi about simulated reality",
    year: 1999,
    rating: 8.7,
    poster: "https://img.mykadri.click/uploads/posts/2024-01/thumbs/f89u3adr1oib1s9gkdpoepxuk5h.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "Epic space exploration and time manipulation",
    year: 2014,
    rating: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 4,
    title: "Venom 3",
    description: "Eddie and Venom face a much bigger problem this time than before.",
    year: 2024,
    rating: 6.2,
    poster: "https://img.mykadri.click/uploads/posts/2024-12/thumbs/venom-last-dance-4k.jpg"
  },
  {
    id: 5,
    title: "The Godfather",
    description: "Epic mafia family saga",
    year: 1972,
    rating: 9.2,
    poster: "https://img.mykadri.click/uploads/posts/2023-08/thumbs/3bhkrj58vtu7enysrold1fzdja1.jpg"
  },
  {
    id: 6,
    title: "Fight Club",
    description: "Psychological thriller about modern masculinity",
    year: 1999,
    rating: 8.8,
    poster: "https://img.mykadri.click/uploads/posts/2020-02/1582894115_28134712oatqomo1.jpg"
  }
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
