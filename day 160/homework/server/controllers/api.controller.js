import Capybara from '../models/capybara.model.js'
import Lion from '../models/lion.model.js'

export const getAllCapybaras = async (req, res) => {
  try {
    const capybaras = await Capybara.find()
    res.json(capybaras)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getCapybaraById = async (req, res) => {
  try {
    const capybara = await Capybara.findById(req.params.id)
    if (!capybara) return res.status(404).json({ message: 'Capybara not found' })
    res.json(capybara)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createCapybara = async (req, res) => {
  try {
    const newCapybara = new Capybara(req.body)
    const saved = await newCapybara.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateCapybara = async (req, res) => {
  try {
    const updated = await Capybara.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ message: 'Capybara not found' })
    res.json(updated)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteCapybara = async (req, res) => {
  try {
    const deleted = await Capybara.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Capybara not found' })
    res.json({ message: 'Capybara deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export const getAllLions = async (req, res) => {
  try {
    const lions = await Lion.find()
    res.json(lions)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getLionById = async (req, res) => {
  try {
    const lion = await Lion.findById(req.params.id)
    if (!lion) return res.status(404).json({ message: 'Lion not found' })
    res.json(lion)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createLion = async (req, res) => {
  try {
    const newLion = new Lion(req.body)
    const saved = await newLion.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateLion = async (req, res) => {
  try {
    const updated = await Lion.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ message: 'Lion not found' })
    res.json(updated)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteLion = async (req, res) => {
  try {
    const deleted = await Lion.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Lion not found' })
    res.json({ message: 'Lion deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
