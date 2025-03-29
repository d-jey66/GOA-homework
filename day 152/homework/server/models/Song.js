import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  year: Number,
});

const Song = mongoose.model("Song", songSchema);
export default Song;
