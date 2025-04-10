import { MatchModel } from "../models/match.model.js";
import { TeamModel } from "../models/team.model.js";

export const getAllMatches = async (req, res) => {
  try {
    const matches = await MatchModel.find()
      .populate('homeTeam', 'name logo country')
      .populate('awayTeam', 'name logo country')
      .sort({ date: -1 });
    
    res.status(200).json(matches);
  } catch (err) {
    console.error("Error fetching matches:", err);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};

export const getMatchesByTeam = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    
    const matches = await MatchModel.find({
      $or: [
        { homeTeam: teamId },
        { awayTeam: teamId }
      ]
    })
    .populate('homeTeam', 'name logo country')
    .populate('awayTeam', 'name logo country')
    .sort({ date: -1 });
    
    res.status(200).json(matches);
  } catch (err) {
    console.error("Error fetching team matches:", err);
    res.status(500).json({ error: "Failed to fetch team matches" });
  }
};

export const getMatchById = async (req, res) => {
  try {
    const match = await MatchModel.findById(req.params.id)
      .populate('homeTeam')
      .populate('awayTeam');
    
    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }
    
    res.status(200).json(match);
  } catch (err) {
    console.error("Error fetching match:", err);
    res.status(500).json({ error: "Failed to fetch match" });
  }
};

export const createMatch = async (req, res) => {
  try {
    const homeTeamExists = await TeamModel.exists({ _id: req.body.homeTeam });
    const awayTeamExists = await TeamModel.exists({ _id: req.body.awayTeam });
    
    if (!homeTeamExists || !awayTeamExists) {
      return res.status(400).json({ 
        error: !homeTeamExists 
          ? "Home team does not exist" 
          : "Away team does not exist" 
      });
    }
    
    if (req.body.homeTeam === req.body.awayTeam) {
      return res.status(400).json({ 
        error: "Home and away teams must be different" 
      });
    }
    
    const newMatch = await MatchModel.create(req.body);
    
    res.status(201).json(newMatch);
  } catch (err) {
    console.error("Error creating match:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    res.status(500).json({ error: "Failed to create match" });
  }
};

export const updateMatch = async (req, res) => {
  try {
    if (req.body.homeTeam) {
      const homeTeamExists = await TeamModel.exists({ _id: req.body.homeTeam });
      if (!homeTeamExists) {
        return res.status(400).json({ error: "Home team does not exist" });
      }
    }
    
    if (req.body.awayTeam) {
      const awayTeamExists = await TeamModel.exists({ _id: req.body.awayTeam });
      if (!awayTeamExists) {
        return res.status(400).json({ error: "Away team does not exist" });
      }
    }
    
    if (req.body.homeTeam && req.body.awayTeam && 
        req.body.homeTeam === req.body.awayTeam) {
      return res.status(400).json({ 
        error: "Home and away teams must be different" 
      });
    }
    
    const updatedMatch = await MatchModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedMatch) {
      return res.status(404).json({ error: "Match not found" });
    }
    
    res.status(200).json(updatedMatch);
  } catch (err) {
    console.error("Error updating match:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    res.status(500).json({ error: "Failed to update match" });
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await MatchModel.findByIdAndDelete(req.params.id);
    
    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }
    
    res.status(200).json({ message: "Match deleted successfully" });
  } catch (err) {
    console.error("Error deleting match:", err);
    res.status(500).json({ error: "Failed to delete match" });
  }
};

export const addGoal = async (req, res) => {
  try {
    const match = await MatchModel.findById(req.params.id);
    
    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }
    
    const { team, ...goalData } = req.body;
    
    if (team === 'home') {
      match.homeGoals.push(goalData);
      match.score.home += 1;
    } else if (team === 'away') {
      match.awayGoals.push(goalData);
      match.score.away += 1;
    } else {
      return res.status(400).json({ error: "Invalid team specified" });
    }
    
    await match.save();
    
    res.status(201).json(match);
  } catch (err) {
    console.error("Error adding goal:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    res.status(500).json({ error: "Failed to add goal" });
  }
};

export const removeGoal = async (req, res) => {
  try {
    const match = await MatchModel.findById(req.params.matchId);
    
    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }
    
    const goalId = req.params.goalId;
    const team = req.params.team;
    
    if (team === 'home') {
      const goalIndex = match.homeGoals.findIndex(
        goal => goal._id.toString() === goalId
      );
      
      if (goalIndex === -1) {
        return res.status(404).json({ error: "Goal not found" });
      }
      
      match.homeGoals.splice(goalIndex, 1);
      match.score.home = Math.max(0, match.score.home - 1);
    } else if (team === 'away') {
      const goalIndex = match.awayGoals.findIndex(
        goal => goal._id.toString() === goalId
      );
      
      if (goalIndex === -1) {
        return res.status(404).json({ error: "Goal not found" });
      }
      
      match.awayGoals.splice(goalIndex, 1);
      match.score.away = Math.max(0, match.score.away - 1);
    } else {
      return res.status(400).json({ error: "Invalid team specified" });
    }
    
    await match.save();
    
    res.status(200).json(match);
  } catch (err) {
    console.error("Error removing goal:", err);
    res.status(500).json({ error: "Failed to remove goal" });
  }
};