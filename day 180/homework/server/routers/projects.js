const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      category, 
      status, 
      owner,
      search = '' 
    } = req.query;

    const query = { isArchived: false };
    
    if (category) query.category = category;
    if (status) query.status = status;
    if (owner) query.owner = owner;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const projects = await Project.find(query)
      .populate('owner', 'fullName email avatar')
      .populate('teamMembers.user', 'fullName email avatar')
      .select('-__v')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Project.countDocuments(query);

    res.json({
      success: true,
      data: projects,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/projects/:id - Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner', 'fullName email avatar')
      .populate('teamMembers.user', 'fullName email avatar')
      .select('-__v');
      
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST /api/projects - Create new project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    
    const populatedProject = await Project.findById(project._id)
      .populate('owner', 'fullName email avatar')
      .populate('teamMembers.user', 'fullName email avatar');
    
    res.status(201).json({ success: true, data: populatedProject });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT /api/projects/:id - Update project
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('owner', 'fullName email avatar')
     .populate('teamMembers.user', 'fullName email avatar');
    
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH /api/projects/:id/progress - Update project progress
router.patch('/:id/progress', async (req, res) => {
  try {
    const { progress } = req.body;
    
    if (progress < 0 || progress > 100) {
      return res.status(400).json({ 
        success: false, 
        message: 'Progress must be between 0 and 100' 
      });
    }

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { progress },
      { new: true }
    ).select('title progress status');
    
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// POST /api/projects/:id/team - Add team member
router.post('/:id/team', async (req, res) => {
  try {
    const { userId, role } = req.body;
    
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    // Check if user is already a team member
    const existingMember = project.teamMembers.find(
      member => member.user.toString() === userId
    );
    
    if (existingMember) {
      return res.status(400).json({ 
        success: false, 
        message: 'User is already a team member' 
      });
    }

    project.teamMembers.push({ user: userId, role });
    await project.save();
    
    const updatedProject = await Project.findById(req.params.id)
      .populate('teamMembers.user', 'fullName email avatar');
    
    res.json({ success: true, data: updatedProject.teamMembers });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE /api/projects/:id/team/:userId - Remove team member
router.delete('/:id/team/:userId', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    project.teamMembers = project.teamMembers.filter(
      member => member.user.toString() !== req.params.userId
    );
    
    await project.save();
    
    res.json({ success: true, message: 'Team member removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/projects/stats/overview - Get projects overview stats
router.get('/stats/overview', async (req, res) => {
  try {
    const [
      totalProjects,
      activeProjects,
      completedProjects,
      categoryStats
    ] = await Promise.all([
      Project.countDocuments({ isArchived: false }),
      Project.countDocuments({ status: 'active', isArchived: false }),
      Project.countDocuments({ status: 'completed', isArchived: false }),
      Project.aggregate([
        { $match: { isArchived: false } },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ])
    ]);

    res.json({
      success: true,
      data: {
        totalProjects,
        activeProjects,
        completedProjects,
        pausedProjects: totalProjects - activeProjects - completedProjects,
        categoryBreakdown: categoryStats
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE /api/projects/:id - Archive project
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { isArchived: true },
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    
    res.json({ success: true, message: 'Project archived successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;