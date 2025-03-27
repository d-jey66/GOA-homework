import express from 'express'
import {
  getMoviesApi,
  getMovieByIdApi,
  postMovieApi,
  deleteMovieApi,
  updateMovieApi
} from '../controllers/movie.controller.js'

const routes = express.Router()

routes.get('/', getMoviesApi)
routes.get('/:id', getMovieByIdApi)
routes.post('/', postMovieApi)
routes.delete('/:id', deleteMovieApi)
routes.put('/:id', updateMovieApi)

export { routes }