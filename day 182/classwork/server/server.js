import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDB  from './config/connectDB.js';
import projectRoutes from './routes/projectRouter.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

connectDB(); 

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
