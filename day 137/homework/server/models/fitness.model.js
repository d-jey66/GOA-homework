import mongoose from 'mongoose'

const fitnessSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    duration: String,
    difficulty: String,
    targetMuscles: [String],
    equipment: [String],
    steps: [String]
  })
  
  export const Fitness = mongoose.model('Fitness', fitnessSchema)