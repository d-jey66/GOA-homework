import express from 'express'
import { Blog } from '../models/blog.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body)
    await blog.save()
    res.status(201).json(blog)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as blogRouter }