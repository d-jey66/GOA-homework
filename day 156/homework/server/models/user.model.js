import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    album: {
        type: String
    },
    audioUrl: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    }
}, 
{
    timestamps: true
});

export const MusicModel = mongoose.model("Music", MusicSchema);