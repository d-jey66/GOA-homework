import express from 'express'
import {
  getAllCapybaras, getCapybaraById, createCapybara, updateCapybara, deleteCapybara,
  getAllLions, getLionById, createLion, updateLion, deleteLion
} from '../controllers/api.controller.js'
import { authMiddleware, adminMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/capybaras', getAllCapybaras)
router.get('/capybaras/:id', getCapybaraById)
router.post('/capybaras', authMiddleware, adminMiddleware, createCapybara)
router.put('/capybaras/:id', authMiddleware, adminMiddleware, updateCapybara)
router.delete('/capybaras/:id', authMiddleware, adminMiddleware, deleteCapybara)

router.get('/lions', getAllLions)
router.get('/lions/:id', getLionById)
router.post('/lions', authMiddleware, adminMiddleware, createLion)
router.put('/lions/:id', authMiddleware, adminMiddleware, updateLion)
router.delete('/lions/:id', authMiddleware, adminMiddleware, deleteLion)

export default router
