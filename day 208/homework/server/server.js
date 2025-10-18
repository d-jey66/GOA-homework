import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const UNSPLASH_KEY = "aFUaC1XYRbgZB60sg-WB7bQ0BS7uTpOZDgSmPSY-LGg";
const UNSPLASH_BASE = "https://api.unsplash.com";

const unsplash = axios.create({
  baseURL: UNSPLASH_BASE,
  headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
});

app.get("/api/photos", async (req, res) => {
  try {
    const response = await unsplash.get("/photos", { params: { per_page: 10 } });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

app.get("/api/photos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await unsplash.get(`/photos/${id}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch photo by ID" });
  }
});

app.get("/api/photos/random", async (req, res) => {
  try {
    const response = await unsplash.get("/photos/random");
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch random photo" });
  }
});

app.get("/api/photos/:id/statistics", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await unsplash.get(`/photos/${id}/statistics`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch statistics" });
  }
});

app.get("/api/photos/:id/download", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await unsplash.get(`/photos/${id}/download`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch download link" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
