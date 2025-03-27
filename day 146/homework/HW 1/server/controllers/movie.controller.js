import { Movie } from '../models/movie.model.js'

export const getMoviesApi = async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getMovieByIdApi = async (req, res) => {
  try {
    const id = req.params.id
    const movie = await Movie.findById(id)
    
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const postMovieApi = async (req, res) => {
  try {
    const body = req.body
    const movie = await Movie.create(body)
    res.status(201).json(movie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteMovieApi = async (req, res) => {
  try {
    const id = req.params.id
    const deletedMovie = await Movie.findByIdAndDelete(id)
    
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    
    res.status(204).json(deletedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateMovieApi = async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    
    const updatedMovie = await Movie.findByIdAndUpdate(id, body, { new: true })
    
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    
    res.status(200).json(updatedMovie)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}