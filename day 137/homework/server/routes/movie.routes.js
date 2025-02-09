import express from 'express'
import { Movie } from '../models/movie.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body)
    await movie.save()
    res.status(201).json(movie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as movieRouter }