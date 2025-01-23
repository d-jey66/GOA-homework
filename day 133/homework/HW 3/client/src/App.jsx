import React, { useState, useEffect } from 'react';
import './index.css';

const ImageCard = ({ image }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden m-2 w-64 shadow-lg">
    <img 
      src={image.url} 
      alt={image.title} 
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-white">
      <h3 className="text-lg font-bold text-yellow-400">{image.title}</h3>
      <p className="text-sm text-gray-300">{image.description}</p>
    </div>
  </div>
);

const ImagesApp = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5002/api/images')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-4xl text-center text-yellow-500 mb-6">Image Gallery</h1>
      <div className="flex flex-wrap justify-center">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImagesApp;