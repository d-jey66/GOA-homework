import mongoose from 'mongoose'

const bmwSchema = new mongoose.Schema({
  model: String,
  year: Number,
  horsepower: Number
})

export default mongoose.model('BMW', bmwSchema)
