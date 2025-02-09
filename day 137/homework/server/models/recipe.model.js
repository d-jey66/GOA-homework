import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    prepTime: String,
    difficulty: String,
    ingredients: [String],
    instructions: [String],
    author: String
  })
  
  export const Recipe = mongoose.model('Recipe', recipeSchema)