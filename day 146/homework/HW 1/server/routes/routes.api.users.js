import express from 'express'
import {
  deleteMovieApi,
  getMovieByIdApi,
  postMovieApi,
  updateMovieApi
} from '../controllers/movie.controller.js'

const routes = express.Router()

routes.get('/', getMovieByIdApi)
routes.post('/', postMovieApi)
routes.delete('/:id', deleteMovieApi)
routes.put('/:id', updateMovieApi)

export { routes }
