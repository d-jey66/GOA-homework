import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5101;

app.use(cors({
  origin: 'http://localhost:5173'
}));

const user = {
  id: 1,
  name: "gela barkalaia",
  bio: "Software Engineer | Travel Enthusiast",
  profilePicture: "https://example.com/profile.jpg",
  coverPhoto: "https://example.com/cover.jpg",
  friends: 342,
  posts: 56
};

app.get("/api/user", (req, res) => {
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Social server running on http://localhost:${PORT}`);
});