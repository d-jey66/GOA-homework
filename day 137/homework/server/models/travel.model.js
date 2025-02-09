import mongoose from 'mongoose'

const travelSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
  location: String,
  tags: [String],
  duration: String
})

export const Travel = mongoose.model('Travel', travelSchema)