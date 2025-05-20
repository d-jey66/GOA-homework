import express from 'express';
import {
  getBooks,
  addBook,
  deleteBook,
  toggleFavorite,
  searchBooks,
} from '../controllers/bookController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getBooks);
router.post('/', verifyToken, addBook);
router.delete('/:id', verifyToken, deleteBook);
router.patch('/:id/favorite', verifyToken, toggleFavorite);
router.get('/search', verifyToken, searchBooks);

export default router;
