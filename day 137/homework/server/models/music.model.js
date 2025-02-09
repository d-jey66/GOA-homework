import mongoose from 'mongoose'

const musicSchema = new mongoose.Schema({
    title: String,
    artist: String,
    genre: String,
    description: String,
    imageUrl: String,
    year: Number,
    rating: Number,
    review: String
  })
  
  export const Music = mongoose.model('Music', musicSchema)