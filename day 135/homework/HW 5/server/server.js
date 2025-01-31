import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5005;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const computers = [
  { id: 1, brand: 'Custom Gaming PC', price: 1899, type: 'Gaming', specs: 'RTX 4070, Ryzen 7 7700X, 32GB RAM' },
  { id: 2, brand: 'WorkStation Pro', price: 2499, type: 'Workstation', specs: 'Intel i9, Quadro RTX, 64GB RAM' },
  { id: 3, brand: 'Compact Mini PC', price: 799, type: 'Compact', specs: 'Ryzen 5, Integrated Graphics, 16GB RAM' }
];

app.get("/api/computers", (req, res) => {
  res.json(computers);
});

app.listen(PORT, () => {
  console.log(`PC Shop Server running on http://localhost:${PORT}`);
});