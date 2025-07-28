import express from 'express';

import routerProject from './projects.router.js';

const router = express.Router();

// projects
router.use('/project', routerProject);

export default router;
