import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Users } from './models/user.model.js'

dotenv.config()
const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/api/users', async (req, res) => {
  try {
    const users = await Users.find() 
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("MongoDB connected")
  } catch (error) {
    console.error("MongoDB connection failed:", error)
    process.exit(1)
  }
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running at http://localhost:${PORT}`)
})
