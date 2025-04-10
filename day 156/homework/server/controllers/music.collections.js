import { MusicModel } from "../models/music.model.js";

export const getMusics = async (req, res) => {
    try {
        const music = await MusicModel.find();
        res.status(200).json(music);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const getOneMusic = async (req, res) => {
    try {
        const { id } = req.params;
        const music = await MusicModel.findById(id);
        
        if (!music) {
            return res.status(404).json({ message: "Music not found" });
        }
        
        res.status(200).json(music);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const addMusic = async (req, res) => {
    try {
        const { body } = req;
        const newMusic = await MusicModel.create(body);
        res.status(201).json(newMusic);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const updateMusic = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        
        const updatedMusic = await MusicModel.findByIdAndUpdate(
            id, 
            body, 
            { new: true, runValidators: true }
        );
        
        if (!updatedMusic) {
            return res.status(404).json({ message: "Music not found" });
        }
        
        res.status(200).json(updatedMusic);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

export const deleteMusic = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedMusic = await MusicModel.findByIdAndDelete(id);
        
        if (!deletedMusic) {
            return res.status(404).json({ message: "Music not found" });
        }
        
        res.status(200).json({ message: "Music deleted successfully" });
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}