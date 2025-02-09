import express from 'express'
import { Music } from '../models/music.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const music = await Music.find()
    res.status(200).json(music)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const track = new Music(req.body)
    await track.save()
    res.status(201).json(track)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as musicRouter }