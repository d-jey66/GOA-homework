import express from 'express'
import { Recipe } from '../models/recipe.model.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(201).json(recipe)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export { router as recipeRouter }