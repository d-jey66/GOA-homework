import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const exists = await User.findOne({ $or: [{ username }, { email }] });
  if (exists) return res.status(400).json({ msg: 'User or email already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();

  res.status(201).json({ msg: 'User registered' });
};


export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};


// GET all users
export const getUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

// GET single user
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
};

// UPDATE user
export const updateUser = async (req, res) => {
  const { username, password } = req.body;
  const update = {};
  if (username) update.username = username;
  if (password) update.password = await bcrypt.hash(password, 10);

  const user = await User.findByIdAndUpdate(req.params.id, update, { new: true }).select('-password');
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
};

// DELETE user
export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json({ msg: 'User deleted' });
};
