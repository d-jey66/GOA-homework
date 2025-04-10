import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teams.players",
    required: true
  },
  minute: {
    type: Number,
    required: true
  },
  isOwnGoal: {
    type: Boolean,
    default: false
  },
  isPenalty: {
    type: Boolean,
    default: false
  }
});

const MatchSchema = new mongoose.Schema({
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teams",
    required: true
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teams",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  stadium: {
    type: String,
    required: true
  },
  referee: {
    type: String
  },
  status: {
    type: String,
    enum: ["Scheduled", "Live", "Finished", "Postponed", "Cancelled"],
    default: "Scheduled"
  },
  score: {
    home: {
      type: Number,
      default: 0
    },
    away: {
      type: Number,
      default: 0
    }
  },
  homeGoals: [GoalSchema],
  awayGoals: [GoalSchema],
  attendance: {
    type: Number
  },
  league: {
    type: String,
    required: true
  },
  season: {
    type: String,
    required: true
  },
  highlights: {
    type: String     
  }
}, {
  timestamps: true
});

export const MatchModel = mongoose.model("Matches", MatchSchema);