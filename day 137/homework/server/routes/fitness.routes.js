import express from 'express'
import { Fitness } from '../models/fitness.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const workouts = await Fitness.find()
    res.status(200).json(workouts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const workout = new Fitness(req.body)
    await workout.save()
    res.status(201).json(workout)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as fitnessRouter }