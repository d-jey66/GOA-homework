import { MusicModel } from "../models/music.model.js";
import { UserModel } from "../models/user.model.js";

export const playMusic = async (req, res) => {
    try {
        const { id } = req.params;
        
        const music = await MusicModel.findById(id);
        if (!music) {
            return res.status(404).json({ message: "Music not found" });
        }
        
        res.status(200).json({
            music,
            message: "Playing music",
            status: "playing"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getPlaylist = async (req, res) => {
    try {
        const { ids } = req.body;
        
        if (!ids || !Array.isArray(ids)) {
            return res.status(400).json({ message: "Invalid request. Please provide an array of music IDs." });
        }
        
        const playlist = await MusicModel.find({
            _id: { $in: ids }
        });
        
        res.status(200).json(playlist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getUserPlaylist = async (req, res) => {
    try {
        const { userId, playlistIndex } = req.params;
        
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if (!user.costumePlaylist || user.costumePlaylist.length <= playlistIndex) {
            return res.status(404).json({ message: "Playlist not found" });
        }
        
        const playlist = user.costumePlaylist[playlistIndex];
        
        const songs = await MusicModel.find({
            _id: { $in: playlist.songs }
        });
        
        res.status(200).json({
            name: playlist.name,
            cover: playlist.cover,
            isPublic: playlist.isPublic,
            isFavorite: playlist.isFavorite,
            songs
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}