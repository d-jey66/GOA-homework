import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    unique: true
  },
  brand: String,
  year: Number,
  description: String,
  price: Number,
  requestCount: {
    type: Number,
    default: 0
  },
  maxRequests: {
    type: Number,
    default: 5
  }
})

export const Phones = mongoose.model('phones', phoneSchema)