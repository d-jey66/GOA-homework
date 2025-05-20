import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/auth.routes.js';
import apiRoutes from './routes/api.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Global sessions object
global.sessions = {};

// Connect to database
connectDB();

// Configure CORS properly
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // This is essential when using credentials: 'include'
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/', authRoutes);
app.use('/api/bmw', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});