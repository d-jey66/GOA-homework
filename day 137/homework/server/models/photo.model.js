import mongoose from 'mongoose'

const photoSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  category: String,
  date: { type: Date, default: Date.now }
})

export const Photo = mongoose.model('Photo', photoSchema)