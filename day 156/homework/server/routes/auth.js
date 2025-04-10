import express from 'express';
import {signUp, updateUser, deleteUser} from "../controllers/authentication.collections.js";

const authRoutes = express.Router()

authRoutes.post('/signup', signUp)
authRoutes.put('/users/:id', updateUser)
authRoutes.delete('/users/:id', deleteUser)

export {authRoutes};