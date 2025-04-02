import express from 'express';
import * as musicController from '../controllers/api.controller.js';
const router = express.Router();

router.get('/music-data', musicController.getAllMusic);

router.post('/music-create', musicController.createMusic);

router.put('/music-update/:id', musicController.updateMusic);

router.delete('/music-delete/:id', musicController.deleteMusic);

export default router;