import express from "express";
import { getAllSongs } from "../controllers/musicController.js";

const router = express.Router();

router.get("/songs", getAllSongs);

export default router;
