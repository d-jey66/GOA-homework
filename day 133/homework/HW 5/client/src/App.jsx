import React, { useState, useEffect } from 'react';
import './index.css';

const VideoCard = ({ video }) => (
  <div className="bg-gray-900 rounded-lg p-2 m-2 w-64">
    <img 
      src={video.thumbnail} 
      alt={video.title} 
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-2 text-white">
      <h3 className="text-lg font-bold truncate">{video.title}</h3>
      <p className="text-sm text-gray-400">{video.channel}</p>
      <div className="flex justify-between mt-2">
        <span>{video.views} views</span>
        <span>{video.uploadDate}</span>
      </div>
    </div>
  </div>
);

const YouTubeClone = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5004/api/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-4xl text-center text-red-600 mb-6">Video Platform</h1>
      <div className="flex flex-wrap justify-center">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default YouTubeClone;