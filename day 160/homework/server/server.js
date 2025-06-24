import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import apiRoutes from './routes/api.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to Capybara & Lion API')
})

app.use('/api', apiRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
