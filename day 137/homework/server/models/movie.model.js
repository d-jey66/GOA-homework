import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: String,
    review: String,
    imageUrl: String,
    rating: Number,
    genre: String,
    year: Number,
    director: String,
    cast: [String]
  })
  
  export const Movie = mongoose.model('Movie', movieSchema)