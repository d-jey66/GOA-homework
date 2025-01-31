import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5021;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const products = [
  { id: 1, name: 'Galaxy S23 Ultra', price: 1199, category: 'Smartphones', description: 'Flagship Android smartphone with advanced camera' },
  { id: 2, name: 'Galaxy Z Fold 4', price: 1799, category: 'Foldable', description: 'Innovative foldable smartphone with large display' },
  { id: 3, name: 'Galaxy A54', price: 449, category: 'Mid-range', description: 'Affordable smartphone with great features' }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Samsung Server running on http://localhost:${PORT}`);
});