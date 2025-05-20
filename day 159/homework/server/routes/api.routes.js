import express from 'express'
import {
  getAllBMWs,
  createBMW,
  updateBMW,
  deleteBMW
} from '../controllers/api.controller.js'

const router = express.Router()

router.use((req, res, next) => {
  const id = req.headers.authorization
  if (!id || !req.sessions[id]) return res.status(401).json({ message: 'unauthorized' })
  req.userId = req.sessions[id]
  next()
})

router.get('/', getAllBMWs)
router.post('/', createBMW)
router.put('/:id', updateBMW)
router.delete('/:id', deleteBMW)

export default router
