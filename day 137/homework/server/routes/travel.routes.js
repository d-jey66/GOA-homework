import express from 'express'
import { Travel } from '../models/travel.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const travels = await Travel.find()
    res.status(200).json(travels)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const travel = new Travel(req.body)
    await travel.save()
    res.status(201).json(travel)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as travelRouter }