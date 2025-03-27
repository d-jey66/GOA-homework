import express from 'express';
import { 
  generateWord, 
  checkGuess, 
  saveGameResult 
} from '../controllers/game.controller.js';

const router = express.Router();

router.get('/word', generateWord);

router.post('/guess', checkGuess);

router.post('/result', saveGameResult);

export default router;