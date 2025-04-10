import { UserModel } from "../models/user.model.js";
import { MusicModel } from "../models/music.model.js";
import mongoose from "mongoose";

export const getFavorites = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        const favorites = await MusicModel.find({
            _id: { $in: user.favoriteMusics }
        });
        
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const addToFavorites = async (req, res) => {
    try {
        const { userId, musicId } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(musicId)) {
            return res.status(400).json({ message: "Invalid music ID" });
        }
        
        const music = await MusicModel.findById(musicId);
        if (!music) {
            return res.status(404).json({ message: "Music not found" });
        }
        
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { $addToSet: { favoriteMusics: musicId } },
            { new: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const removeFromFavorites = async (req, res) => {
    try {
        const { userId, musicId } = req.params;
        
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { $pull: { favoriteMusics: musicId } },
            { new: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}