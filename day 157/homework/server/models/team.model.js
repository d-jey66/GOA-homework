import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
    enum: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
  },
  number: {
    type: Number,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String, 
  }
});

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  logo: {
    type: String, 
  },
  league: {
    type: String,
    required: true,
  },
  players: [PlayerSchema],
  coach: {
    name: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
    },
    age: {
      type: Number,
    }
  },
  stadium: {
    name: {
      type: String,
    },
    capacity: {
      type: Number,
    }
  }
}, {
  timestamps: true,
});

export const TeamModel = mongoose.model("Teams", TeamSchema);