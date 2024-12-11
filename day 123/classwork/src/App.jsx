import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Mock data for seahorse species
const seahorseData = [
  { 
    id: 1, 
    name: 'Hippocampus kuda', 
    commonName: 'Yellow Seahorse', 
    habitat: 'Indo-Pacific Regions', 
    description: 'A large species of seahorse found in coral reefs and seagrass beds.',
    imageUrl: '/api/placeholder/300/200'
  },
  { 
    id: 2, 
    name: 'Hippocampus bargibanti', 
    commonName: 'Pygmy Seahorse', 
    habitat: 'Western Pacific', 
    description: 'Extremely small seahorse that perfectly camouflages with coral.',
    imageUrl: '/api/placeholder/300/200'
  },
  { 
    id: 3, 
    name: 'Hippocampus erectus', 
    commonName: 'Lined Seahorse', 
    habitat: 'Western Atlantic', 
    description: 'Known for its distinctive lines and ability to change colors.',
    imageUrl: '/api/placeholder/300/200'
  }
];

// Navigation Component
const Navigation = () => (
  <nav className="bg-blue-600 text-white p-4">
    <ul className="flex space-x-4">
      <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
      <li><Link to="/species" className="hover:text-blue-200">Seahorse Species</Link></li>
      <li><Link to="/conservation" className="hover:text-blue-200">Conservation</Link></li>
      <li><Link to="/new-species" className="hover:text-blue-200">Add New Species</Link></li>
    </ul>
  </nav>
);

// Home Page
const HomePage = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Welcome to the Seahorse World</h1>
    <p>Discover the fascinating world of these unique marine creatures!</p>
    <div className="mx-auto my-6 text-blue-500 text-9xl">🐠</div>
  </div>
);

// Species List Page
const SpeciesListPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Seahorse Species</h2>
    <div className="grid md:grid-cols-3 gap-4">
      {seahorseData.map(species => (
        <Link 
          key={species.id} 
          to={`/species/${species.id}`} 
          className="border rounded p-4 hover:bg-blue-50 transition"
        >
          <h3 className="font-bold">{species.commonName}</h3>
          <p>{species.name}</p>
        </Link>
      ))}
    </div>
  </div>
);

// Species Detail Page
const SpeciesDetailPage = () => {
  const id = window.location.pathname.split('/').pop();
  const species = seahorseData.find(s => s.id === parseInt(id));

  if (!species) return <div>Species Not Found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{species.commonName}</h2>
      <img src={species.imageUrl} alt={species.name} className="mb-4" />
      <p><strong>Scientific Name:</strong> {species.name}</p>
      <p><strong>Habitat:</strong> {species.habitat}</p>
      <p>{species.description}</p>
    </div>
  );
};

// Conservation Page
const ConservationPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Seahorse Conservation</h2>
    <p>Seahorses face numerous threats, including habitat destruction and overfishing.</p>
    <ul className="list-disc pl-6">
      <li>Protect marine habitats</li>
      <li>Reduce marine pollution</li>
      <li>Support sustainable fishing practices</li>
    </ul>
  </div>
);

// New Species Form Page
const NewSpeciesPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    commonName: '',
    habitat: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Species submission functionality to be implemented');
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Seahorse Species</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Scientific Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Common Name</label>
          <input 
            type="text" 
            name="commonName"
            value={formData.commonName}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Habitat</label>
          <input 
            type="text" 
            name="habitat"
            value={formData.habitat}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required 
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Species
        </button>
      </form>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/species" element={<SpeciesListPage />} />
          <Route path="/species/:id" element={<SpeciesDetailPage />} />
          <Route path="/conservation" element={<ConservationPage />} />
          <Route path="/new-species" element={<NewSpeciesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;