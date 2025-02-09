import express from 'express'
import { Game } from '../models/game.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const games = await Game.find()
    res.status(200).json(games)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const game = new Game(req.body)
    await game.save()
    res.status(201).json(game)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as gameRouter }