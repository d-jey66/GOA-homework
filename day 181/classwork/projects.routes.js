import express from 'express';
import {
  getOneProject,
  updateOneProject
} from './projects.controller.js';

const router = express.Router();

router.get('/:id', getOneProject);

router.put('/:id', updateOneProject);

export default router;
