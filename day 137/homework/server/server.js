import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js'
import { blogRouter } from './routes/blog.routes.js'
import { photoRouter } from './routes/photo.routes.js'
import { travelRouter } from './routes/travel.routes.js'
import { recipeRouter } from './routes/recipe.routes.js'
import { fitnessRouter } from './routes/fitness.routes.js'
import { musicRouter } from './routes/music.routes.js'
import { movieRouter } from './routes/movie.routes.js'
import { gameRouter } from './routes/game.routes.js'
import { newsRouter } from './routes/news.routes.js'

dotenv.config()
const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/blog', blogRouter)
app.use('/api/photos', photoRouter)
app.use('/api/travel', travelRouter)
app.use('/api/recipes', recipeRouter)
app.use('/api/fitness', fitnessRouter)
app.use('/api/music', musicRouter)
app.use('/api/movies', movieRouter)
app.use('/api/games', gameRouter)
app.use('/api/news', newsRouter)

app.listen(process.env.PORT, () => {
  connectDB()
  console.log(`Server is running at http://localhost:${process.env.PORT}`)
})

