import express from "express";
import { apiMusicRoutes } from "./api.music.js";
import { favoritesRoutes } from "./api.favite.js";
import { playerRoutes } from "./api.player.js";

const apiRoutes = express.Router();

apiRoutes.use("/music", apiMusicRoutes);
apiRoutes.use("/favorites", favoritesRoutes);
apiRoutes.use("/player", playerRoutes);

export { apiRoutes };