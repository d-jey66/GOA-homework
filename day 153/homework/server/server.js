// server.js - Main entry point
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { authRoutes } from "./routes/auth.js"; // Fixed import path
import { apiRoutes } from "./routes/api.routes.js";

dotenv.config();
const PORT = process.env.PORT || 9999;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));