import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes.js';
import connectDB from './db/connectDB.js'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const startServer = async () => {
  await connectDB();
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
};

startServer();
