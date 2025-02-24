import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import { Phones } from './models/user.model.js'

dotenv.config()
const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.post('/api/phones', async (req, res) => {
  try {
    const existingPhone = await Phones.findOne({ model: req.body.model })
    if (existingPhone) {
      return res.status(400).json({ error: 'Phone model already exists' })
    }
    const phone = new Phones(req.body)
    await phone.save()
    res.status(201).json(phone)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/phones', async (req, res) => {
  try {
    const phones = await Phones.find()
    res.json(phones)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/phones/:id/request', async (req, res) => {
  try {
    const phone = await Phones.findById(req.params.id)
    if (!phone) {
      return res.status(404).json({ error: 'Phone not found' })
    }
    if (phone.requestCount >= phone.maxRequests) {
      return res.status(400).json({ error: 'Maximum request limit reached' })
    }
    phone.requestCount += 1
    await phone.save()
    res.json(phone)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(process.env.PORT, () => {
  connectDB()
  console.log(`Server is running on port ${process.env.PORT}`)
})