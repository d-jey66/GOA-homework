// routes/api.routes.js
import express from "express";
import { signUp, login, forgotPassword, resetPassword } from "../controllers/authentication.collections.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/register", signUp);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export const apiRoutes = router;