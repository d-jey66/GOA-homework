import Music from '../models/music.model.js';

export const getAllMusic = async (req, res) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMusic = async (req, res) => {
  try {
    const newMusic = new Music(req.body);
    const savedMusic = await newMusic.save();
    res.status(201).json(savedMusic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMusic = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMusic = await Music.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedMusic) {
      return res.status(404).json({ message: 'Music not found' });
    }

    res.status(200).json(updatedMusic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMusic = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMusic = await Music.findByIdAndDelete(id);

    if (!deletedMusic) {
      return res.status(404).json({ message: 'Music not found' });
    }

    res.status(200).json({ message: 'Music deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
