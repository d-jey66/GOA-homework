import express from 'express'
import cors from 'cors'
import {connectDB} from './db/connectDB.js'
import apiRoutes from './routes/api.routes.js'

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});