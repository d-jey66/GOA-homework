import express from "express";
import { 
  getAllTeams, 
  getTeamById, 
  createTeam, 
  updateTeam, 
  deleteTeam,
  uploadTeamLogo,
  addPlayer,
  removePlayer,
  getFileInfo,
  listFiles
} from "../controllers/football.controller.js";
import {
  getAllMatches,
  getMatchesByTeam,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
  addGoal,
  removeGoal
} from "../controllers/match.controller.js";
import fileUpload from "express-fileupload";

const footballRoutes = express.Router();

footballRoutes.use(fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
  createParentPath: true
}));

footballRoutes.get("/teams", getAllTeams);
footballRoutes.get("/teams/:id", getTeamById);
footballRoutes.post("/teams", createTeam);
footballRoutes.put("/teams/:id", updateTeam);
footballRoutes.delete("/teams/:id", deleteTeam);

footballRoutes.post("/teams/:id/logo", uploadTeamLogo);

footballRoutes.post("/teams/:id/players", addPlayer);
footballRoutes.delete("/teams/:teamId/players/:playerId", removePlayer);

footballRoutes.get("/matches", getAllMatches);
footballRoutes.get("/matches/:id", getMatchById);
footballRoutes.get("/teams/:teamId/matches", getMatchesByTeam);
footballRoutes.post("/matches", createMatch);
footballRoutes.put("/matches/:id", updateMatch);
footballRoutes.delete("/matches/:id", deleteMatch);

footballRoutes.post("/matches/:id/goals", addGoal);
footballRoutes.delete("/matches/:matchId/goals/:team/:goalId", removeGoal);

footballRoutes.get("/files/info", getFileInfo);
footballRoutes.get("/files/list", listFiles);

export { footballRoutes };