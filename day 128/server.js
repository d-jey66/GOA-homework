import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./DB/connectDB.js";
import { UserModel } from "./models/userModel.js";

dotenv.config();


connectDB();

const app = express();
const port = 1011;

app.get("/", async (req, res) => {
    const user = await UserModel.find()
    res.status(200).json({message: user})
});

app.listen(port, () => {
    console.log(`app listening on localhost:${port}`);
});

process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err.message);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
    process.exit(1);
});
