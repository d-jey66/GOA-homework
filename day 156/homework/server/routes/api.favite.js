import express from "express";
import {
    getFavorites,
    addToFavorites,
    removeFromFavorites
} from "../controllers/getFavorite.collections.js";

const favoritesRoutes = express.Router();

favoritesRoutes.get("/:userId", getFavorites);

favoritesRoutes.post("/:userId/:musicId", addToFavorites);

favoritesRoutes.delete("/:userId/:musicId", removeFromFavorites);

export { favoritesRoutes };