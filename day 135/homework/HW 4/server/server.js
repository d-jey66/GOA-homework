import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5004;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const cars = [
  { id: 1, brand: 'Mercedes', model: 'GLE', price: 65000, type: 'SUV', description: 'Luxury SUV with advanced technology' },
  { id: 2, brand: 'BMW', model: 'X5', price: 60000, type: 'SUV', description: 'Performance-oriented luxury crossover' },
  { id: 3, brand: 'Audi', model: 'Q7', price: 55000, type: 'SUV', description: 'Sophisticated and spacious family SUV' }
];

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`Car Shop Server running on http://localhost:${PORT}`);
});