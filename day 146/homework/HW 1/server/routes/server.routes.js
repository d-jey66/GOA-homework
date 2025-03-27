import { Router } from 'express'
import { routes as apiUsers } from './routes.api.users.js'
import { routes as apiMovies } from './routes.api.movies.js'

const routes = Router()

routes.use('/api/users', apiUsers)
routes.use('/api/movies', apiMovies)

export { routes }