import express from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Ensure all required fields are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

    // Hash the password before saving it
    const hashed = await bcryptjs.hash(password, 10);

    // Create new user
    const user = await User.create({ username, email, password: hashed });

    // Respond with the newly created user (omit password from response)
    res.json({ username: user.username, email: user.email });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Use global sessions object
    const sessionId = Math.random().toString(36).slice(2);
    global.sessions[sessionId] = {
      userId: user._id,
      email: user.email
    };
    
    res.json({ 
      sessionId,
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
