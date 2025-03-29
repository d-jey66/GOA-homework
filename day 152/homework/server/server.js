import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js";
import musicRoutes from "./routes/musicRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", musicRoutes);


connectDB();

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
