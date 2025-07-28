import express from 'express';
import { createProject, getAllProjects, getOneProject, getOneProjectsOneUser, updateOneProject } from '../connections/project.connections.js';

const router = express.Router();

// all projects
router.get('/all-projects', getAllProjects);

// get one project
router.get('/:id', getOneProject);
router.put('/:id', updateOneProject);

// get all projects of one user
router.get("/all-projects/:clerkUserId", getOneProjectsOneUser);
// create project
router.post('/create-project', createProject);

export default router;
