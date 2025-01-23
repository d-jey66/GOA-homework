import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5002;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const images = [
  {
    id: 1,
    title: "Mountain Sunset",
    description: "Beautiful landscape with mountain silhouette",
    url: "https://example.com/mountain-sunset.jpg"
  },
  {
    id: 2,
    title: "City Lights",
    description: "Urban nightscape with illuminated buildings",
    url: "https://example.com/city-lights.jpg"
  }
  // ect......... idk
];

app.get("/api/images", (req, res) => {
  res.json(images);
});

app.listen(PORT, () => {
  console.log(`Images server running on http://localhost:${PORT}`);
});