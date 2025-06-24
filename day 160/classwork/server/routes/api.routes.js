import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} from '../controllers/authentication.collections.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// CRUD - protected
router.get('/users', protect, getUsers);
router.get('/users/:id', protect, getUser);
router.put('/users/:id', protect, updateUser);
router.delete('/users/:id', protect, deleteUser);

export default router;
