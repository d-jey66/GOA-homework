import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

router.post('/create-project', async (req, res) => {
  try {
    const { title, description, imageUrl, technologies, githubLink, demoLink } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }

    const newProject = new Project({
      title,
      description,
      imageUrl,
      technologies,
      githubLink,
      demoLink,
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: newProject,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: err.message,
    });
  }
});

router.get('/all-projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch projects', error: err.message });
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.status(200).json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch project', error: err.message });
  }
});

router.put('/update-project/:id', async (req, res) => {
  try {
    const { title, description, imageUrl, technologies, githubLink, demoLink } = req.body;

    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        imageUrl,
        technologies,
        githubLink,
        demoLink,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.status(200).json({ success: true, message: 'Project updated', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Update failed', error: err.message });
  }
});

router.delete('/delete-project/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Delete failed', error: err.message });
  }
});

export default router;
