import express from 'express';
import cors from 'cors';
import { generateWord, checkGuess } from './controllers/game.controller.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

app.get('/api/game/word', generateWord);
app.post('/api/game/guess', checkGuess);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});