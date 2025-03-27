import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  poster: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Movie = mongoose.model("movies", movieSchema)