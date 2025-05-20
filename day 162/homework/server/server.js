import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/api.routes.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});