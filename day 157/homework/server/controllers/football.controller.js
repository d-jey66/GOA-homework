import { TeamModel } from "../models/team.model.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export const getAllTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find();
    res.status(200).json(teams);
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (err) {
    console.error("Error fetching team:", err);
    res.status(500).json({ error: "Failed to fetch team" });
  }
};
export const createTeam = async (req, res) => {
  try {
    const newTeam = await TeamModel.create(req.body);
    res.status(201).json(newTeam);
  } catch (err) {
    console.error("Error creating team:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    if (err.code === 11000) {
      return res.status(400).json({ error: "Team already exists" });
    }
    
    res.status(500).json({ error: "Failed to create team" });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const updatedTeam = await TeamModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedTeam) {
      return res.status(404).json({ error: "Team not found" });
    }
    
    res.status(200).json(updatedTeam);
  } catch (err) {
    console.error("Error updating team:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    res.status(500).json({ error: "Failed to update team" });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params.id);
    
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    
    if (team.logo && team.logo.startsWith('/uploads/')) {
      const logoPath = path.join(__dirname, '..', team.logo);
      if (fs.existsSync(logoPath)) {
        fs.unlinkSync(logoPath);
      }
    }
    
    team.players.forEach(player => {
      if (player.image && player.image.startsWith('/uploads/')) {
        const imagePath = path.join(__dirname, '..', player.image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
    });
    
    await TeamModel.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ message: "Team deleted successfully" });
  } catch (err) {
    console.error("Error deleting team:", err);
    res.status(500).json({ error: "Failed to delete team" });
  }
};

export const uploadTeamLogo = async (req, res) => {
  try {
    if (!req.files || !req.files.logo) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    const teamId = req.params.id;
    const team = await TeamModel.findById(teamId);
    
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    
    const logoFile = req.files.logo;
    const fileName = `team_${teamId}_${Date.now()}${path.extname(logoFile.name)}`;
    const filePath = path.join(uploadsDir, fileName);
    
    if (team.logo && team.logo.startsWith('/uploads/')) {
      const oldLogoPath = path.join(__dirname, '..', team.logo);
      if (fs.existsSync(oldLogoPath)) {
        fs.unlinkSync(oldLogoPath);
      }
    }
    
    await logoFile.mv(filePath);
    
    team.logo = `/uploads/${fileName}`;
    await team.save();
    
    res.status(200).json({ 
      message: "Logo uploaded successfully", 
      logoUrl: team.logo 
    });
  } catch (err) {
    console.error("Error uploading logo:", err);
    res.status(500).json({ error: "Failed to upload logo" });
  }
};

export const addPlayer = async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params.id);
    
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    
    team.players.push(req.body);
    await team.save();
    
    res.status(201).json(team.players[team.players.length - 1]);
  } catch (err) {
    console.error("Error adding player:", err);
    
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({ error: messages });
    }
    
    res.status(500).json({ error: "Failed to add player" });
  }
};

export const removePlayer = async (req, res) => {
  try {
    const team = await TeamModel.findById(req.params.teamId);
    
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    
    const playerId = req.params.playerId;
    const playerIndex = team.players.findIndex(
      player => player._id.toString() === playerId
    );
    
    if (playerIndex === -1) {
      return res.status(404).json({ error: "Player not found" });
    }
    
    const player = team.players[playerIndex];
    if (player.image && player.image.startsWith('/uploads/')) {
      const imagePath = path.join(__dirname, '..', player.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    team.players.splice(playerIndex, 1);
    await team.save();
    
    res.status(200).json({ message: "Player removed successfully" });
  } catch (err) {
    console.error("Error removing player:", err);
    res.status(500).json({ error: "Failed to remove player" });
  }
};

export const getFileInfo = (req, res) => {
  try {
    const filePath = req.query.path;
    
    if (!filePath) {
      return res.status(400).json({ error: "File path is required" });
    }
    
    const absolutePath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ error: "File not found" });
    }
    
    const stats = fs.statSync(absolutePath);
    
    const fileInfo = {
      name: path.basename(absolutePath),
      size: stats.size,
      createdAt: stats.birthtime,
      modifiedAt: stats.mtime,
      isDirectory: stats.isDirectory(),
      extension: path.extname(absolutePath),
    };
    
    res.status(200).json(fileInfo);
  } catch (err) {
    console.error("Error getting file info:", err);
    res.status(500).json({ error: "Failed to get file info" });
  }
};

export const listFiles = (req, res) => {
  try {
    const directoryPath = req.query.path || '/uploads';
    const absolutePath = path.join(__dirname, '..', directoryPath);
    
    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ error: "Directory not found" });
    }
    
    const files = fs.readdirSync(absolutePath);
    
    const fileList = files.map(file => {
      const filePath = path.join(absolutePath, file);
      const stats = fs.statSync(filePath);
      
      return {
        name: file,
        path: path.join(directoryPath, file),
        size: stats.size,
        isDirectory: stats.isDirectory(),
        createdAt: stats.birthtime,
        modifiedAt: stats.mtime,
      };
    });
    
    res.status(200).json(fileList);
  } catch (err) {
    console.error("Error listing files:", err);
    res.status(500).json({ error: "Failed to list files" });
  }
};