import React, { useState } from 'react';
import MusicForm from './components/MusicForm';
import MusicList from './components/MusicList';

function App() {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleEditMusic = (music) => {
    setSelectedMusic(music);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = () => {
    setSelectedMusic(null);
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Music Library App</h1>
      
      <MusicForm 
        music={selectedMusic} 
        onSave={handleSave} 
      />
      
      <MusicList 
        key={refreshTrigger}
        onEdit={handleEditMusic} 
      />
    </div>
  );
}

export default App;