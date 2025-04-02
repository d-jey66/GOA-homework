import React, { useState, useEffect } from 'react';
import { getAllMusic, deleteMusic } from '../services/api.service';

const MusicList = ({ onEdit }) => {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMusic = async () => {
    try {
      setLoading(true);
      const data = await getAllMusic();
      setMusicList(data);
      setError(null);
    } catch (err) {
      setError('Failed to load music data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this music?')) {
      try {
        await deleteMusic(id);
        fetchMusic();
      } catch (err) {
        setError('Failed to delete music');
      }
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Music Library</h2>
      {musicList.length === 0 ? (
        <p>No music entries found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {musicList.map((music) => (
            <div key={music._id} className="bg-white rounded-lg shadow-md p-4">
              {music.imageUrl && (
                <img 
                  src={music.imageUrl} 
                  alt={music.title} 
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h3 className="text-xl font-semibold">{music.title}</h3>
              <p className="text-gray-700">Artist: {music.artist}</p>
              <p className="text-gray-700">Genre: {music.genre}</p>
              <p className="text-gray-700">Year: {music.releaseYear}</p>
              <div className="mt-4 flex space-x-2">
                <button 
                  onClick={() => onEdit(music)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(music._id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicList;