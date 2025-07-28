import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import { connetDb } from './config/conntectDb.js';
import router from "./routers/router.js"

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config()

app.use("/api", router)

app.listen(process.env.PORT, () => {
  connetDb()
  console.log("server is chilling at port:", process.env.PORT)
})
