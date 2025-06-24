import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body

    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ message: 'User already exists' })

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({ username, email, password: hashedPassword })

    res.status(201).json({ message: 'User registered', userId: newUser._id })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ message: 'Invalid credentials' })

    res.json({ message: 'Login successful', userId: user._id })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

export default router
