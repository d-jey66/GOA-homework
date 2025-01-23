import React, { useState, useEffect } from 'react';
import './index.css';

const SongCard = ({ song }) => (
  <div className="bg-blue-900 text-white rounded-lg p-4 m-2 w-64">
    <img 
      src={song.albumCover} 
      alt={song.title} 
      className="w-full h-64 object-cover rounded-t-lg"
    />
    <div className="mt-2">
      <h2 className="text-xl font-bold text-yellow-400">{song.title}</h2>
      <p className="text-sm">{song.artist}</p>
      <div className="flex justify-between mt-2">
        <span>{song.album}</span>
        <span>★ {song.rating}</span>
      </div>
    </div>
  </div>
);

const MusicApp = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-blue-950 min-h-screen p-4">
      <h1 className="text-4xl text-center text-yellow-400 mb-6">American Hits</h1>
      <div className="flex flex-wrap justify-center">
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default MusicApp;