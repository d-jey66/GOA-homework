import BMW from '../models/bmw.model.js'

export const getAllBMWs = async (req, res) => {
  const cars = await BMW.find()
  res.json(cars)
}

export const createBMW = async (req, res) => {
  const car = await BMW.create(req.body)
  res.json(car)
}

export const updateBMW = async (req, res) => {
  const car = await BMW.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(car)
}

export const deleteBMW = async (req, res) => {
  await BMW.findByIdAndDelete(req.params.id)
  res.json({ success: true })
}
