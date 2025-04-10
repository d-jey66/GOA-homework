import express from "express";
import {
    playMusic,
    getPlaylist,
    getUserPlaylist
} from "../controllers/player.collections.js";

const playerRoutes = express.Router();

playerRoutes.get("/play/:id", playMusic);

playerRoutes.post("/playlist", getPlaylist);

playerRoutes.get("/user-playlist/:userId/:playlistIndex", getUserPlaylist);

export { playerRoutes };