import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
    title: String,
    review: String,
    imageUrl: String,
    rating: Number,
    platform: String,
    genre: String,
    releaseDate: String,
    developer: String
  })
  
  export const Game = mongoose.model('Game', gameSchema)