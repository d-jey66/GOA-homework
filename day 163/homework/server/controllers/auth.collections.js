import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

// Register User
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashed, grades: [] });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', userId: user._id });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Add Grade
const addGrade = async (req, res) => {
  try {
    const { userId, grade } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.grades.push(grade);
    await user.save();
    res.json({ message: 'Grade added', grades: user.grades });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add grade' });
  }
};

// Get Grades
const getGrades = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.grades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch grades' });
  }
};

// Get Average Grade
const getAverage = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const avg = user.grades.reduce((a, b) => a + b, 0) / user.grades.length || 0;
    res.json({ average: avg.toFixed(2) });
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate average' });
  }
};

// Delete Grade by Index
const deleteGrade = async (req, res) => {
  try {
    const { userId, index } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    if (index < 0 || index >= user.grades.length) {
      return res.status(400).json({ error: 'Invalid grade index' });
    }

    user.grades.splice(index, 1);
    await user.save();
    res.json({ message: 'Grade removed', grades: user.grades });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete grade' });
  }
};

export default {
  register,
  login,
  addGrade,
  getGrades,
  getAverage,
  deleteGrade,
};
