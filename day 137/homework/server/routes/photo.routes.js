import express from 'express'
import { Photo } from '../models/photo.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find()
    res.status(200).json(photos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const photo = new Photo(req.body)
    await photo.save()
    res.status(201).json(photo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as photoRouter }