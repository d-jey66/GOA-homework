import { useEffect, useState } from "react";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Start fetching songs data
    fetch("http://localhost:5000/api/songs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch songs.");
        return res.json();
      })
      .then((data) => {
        // Set songs data to state
        setSongs(data);
        setLoading(false); // Finished loading
      })
      .catch((err) => {
        setError(err.message); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs once after the first render

  // Show loading text
  if (loading) return <div className="text-white text-center mt-10">Loading Sinatra's songs...</div>;

  // Show error message if fetch fails
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎵 Frank Sinatra Collection</h1>

      {/* Songs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.length === 0 ? (
          <div className="text-center text-white">No songs found in the collection.</div>
        ) : (
          songs.map((song) => (
            <div key={song._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={song.cover || "https://via.placeholder.com/150"}
                alt={song.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{song.title}</h2>
              <p className="text-gray-400">{song.year}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
