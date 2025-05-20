import express from 'express';
const router = express.Router();
import auth from '../controllers/auth.collections.js';

router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/grade', auth.addGrade);
router.get('/grades/:userId', auth.getGrades);
router.get('/average/:userId', auth.getAverage);
router.delete('/grade', auth.deleteGrade);

export default router;