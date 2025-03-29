// routes/auth.js

import express from 'express'
import { 
    signUp, 
    login, 
    forgotPassword, 
    resetPassword 
} from "../controllers/authentication.collections.js"

const authRoutes = express.Router()

// User registration
authRoutes.post('/register', signUp)

// User login
authRoutes.post('/login', login)

// Forgot password
authRoutes.post('/forgot-password', forgotPassword)

// Reset password
authRoutes.post('/reset-password', resetPassword)

export { authRoutes }