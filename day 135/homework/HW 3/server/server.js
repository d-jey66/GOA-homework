import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5003;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const tours = [
  { id: 1, name: 'Italian Adventure', destination: 'Italy', price: 2500, duration: '10 days', description: 'Explore Rome, Venice, and Florence' },
  { id: 2, name: 'Greek Islands', destination: 'Greece', price: 2200, duration: '8 days', description: 'Discover Athens, Santorini, and Mykonos' },
  { id: 3, name: 'Swiss Mountains', destination: 'Switzerland', price: 3000, duration: '7 days', description: 'Alpine landscapes and picturesque cities' }
];

app.get("/api/tours", (req, res) => {
  res.json(tours);
});

app.listen(PORT, () => {
  console.log(`Tourist Agency Server running on http://localhost:${PORT}`);
});