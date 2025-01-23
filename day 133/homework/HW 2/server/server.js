import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    rating: 8.7,
    albumCover: "https://example.com/blinding-lights.jpg"
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    rating: 8.5,
    albumCover: "https://example.com/shape-of-you.jpg"
  }
];

app.get("/api/songs", (req, res) => {
  res.json(songs);
});

app.listen(PORT, () => {
  console.log(`Music server running on http://localhost:${PORT}`);
});