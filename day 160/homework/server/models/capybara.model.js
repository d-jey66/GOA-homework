import mongoose from 'mongoose'

const CapybaraSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  description: String,
  imageUrl: String,
  facts: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Capybara', CapybaraSchema)
