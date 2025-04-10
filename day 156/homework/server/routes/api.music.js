import express from "express";
import {
    getMusics,
    getOneMusic,
    addMusic,
    updateMusic,
    deleteMusic
} from "../controllers/music.collections.js";

const apiMusicRoutes = express.Router();

apiMusicRoutes.get("/", getMusics);

apiMusicRoutes.get("/:id", getOneMusic);

apiMusicRoutes.post("/", addMusic);

apiMusicRoutes.put("/:id", updateMusic);

apiMusicRoutes.delete("/:id", deleteMusic);

export { apiMusicRoutes };