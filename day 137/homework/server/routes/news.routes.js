import express from 'express'
import { News } from '../models/news.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const news = await News.find()
    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const newsItem = new News(req.body)
    await newsItem.save()
    res.status(201).json(newsItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as newsRouter }