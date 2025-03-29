import Song from "../models/Song.js";

export const getAllSongs = async (req, res) => {
  try {
    let songs = await Song.find();

    // If no songs exist, insert default songs only once
    if (songs.length === 0) {
      const defaultSongs = [
        { title: "My Way", year: 1969, cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/My_Way_Album_Cover.jpg/220px-My_Way_Album_Cover.jpg" },
        { title: "Fly Me to the Moon", year: 1964, cover: "https://upload.wikimedia.org/wikipedia/en/d/d8/Fly_Me_to_the_Moon_-_Frank_Sinatra.jpg" },
        { title: "Strangers in the Night", year: 1966, cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Strangers_in_the_Night_-_Frank_Sinatra.jpg/220px-Strangers_in_the_Night_-_Frank_Sinatra.jpg" }
      ];
      
      // Insert the default songs into the database
      songs = await Song.insertMany(defaultSongs);
    }

    // Respond with the songs (either fetched or newly inserted)
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error); // Log the error for debugging
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
