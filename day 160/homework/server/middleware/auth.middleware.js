import User from '../models/user.model.js'

export const authMiddleware = async (req, res, next) => {
  const { userId } = req.body 

  if (!userId) {
    return res.status(401).json({ message: 'No user ID provided' })
  }

  const user = await User.findById(userId)
  if (!user) return res.status(401).json({ message: 'Invalid user' })

  req.user = user
  next()
}

export const adminMiddleware = (req, res, next) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Access denied. Admin only.' })
  }
  next()
}
