import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5002;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const phones = [
  { id: 1, brand: 'Apple', model: 'iPhone 14 Pro', price: 999, category: 'Flagship', description: 'Premium smartphone with advanced camera system' },
  { id: 2, brand: 'Google', model: 'Pixel 7', price: 599, category: 'Android', description: 'Pure Android experience with exceptional photography' },
  { id: 3, brand: 'OnePlus', model: '11', price: 699, category: 'Flagship Killer', description: 'High-performance smartphone with great value' }
];

app.get("/api/phones", (req, res) => {
  res.json(phones);
});

app.listen(PORT, () => {
  console.log(`Phone Shop Server running on http://localhost:${PORT}`);
});