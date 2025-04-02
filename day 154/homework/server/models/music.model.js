import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Music = mongoose.model('Music', musicSchema);

export default Music;