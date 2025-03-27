import mongoose from 'mongoose';

const gameResultSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  guesses: {
    type: Number,
    required: true
  },
  won: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('GameResult', gameResultSchema);