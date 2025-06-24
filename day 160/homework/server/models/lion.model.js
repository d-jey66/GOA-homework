import mongoose from 'mongoose'

const LionSchema = new mongoose.Schema({
  name: String,
  age: Number,
  habitat: String,
  description: String,
  imageUrl: String,
  facts: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Lion', LionSchema)
