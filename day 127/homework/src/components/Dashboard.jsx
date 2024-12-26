import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { TreePine, Gift, GalleryThumbnails, Snowflake, PanelRightOpen, PanelLeftOpen } from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { icon: <TreePine size={24} />, title: 'Decorations', path: 'decorations' },
    { icon: <Gift size={24} />, title: 'Gifts', path: 'gifts' },
    { icon: <GalleryThumbnails size={24} />, title: 'Events', path: 'events' },
    { icon: <Snowflake size={24} />, title: 'Winter', path: 'winter' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-red-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className={`font-bold ${sidebarOpen ? 'block' : 'hidden'}`}>Christmas Dashboard</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <PanelRightOpen size={24} /> : <PanelLeftOpen size={24} />}
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(`/dashboard/${item.path}`)}
              className="flex items-center p-4 hover:bg-red-700 cursor-pointer"
            >
              {item.icon}
              {sidebarOpen && <span className="ml-4">{item.title}</span>}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-8">
        <Routes>
          <Route path="decorations" element={<h1>Decorations Page</h1>} />
          <Route path="gifts" element={<h1>Gifts Page</h1>} />
          <Route path="events" element={<h1>Events Page</h1>} />
          <Route path="winter" element={<h1>Winter Page</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
