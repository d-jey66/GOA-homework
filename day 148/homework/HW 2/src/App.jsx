import React from 'react';

const ProfileCard = () => {
  const socialLinks = [
    { name: 'GitHub', url: '#' },
    { name: 'Frontend Mentor', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-80 bg-[#1A1A1A] rounded-xl shadow-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <img 
            src="/api/placeholder/120/120" 
            alt="Profile" 
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">Dachi Jananashvili</h2>
        <p className="text-lime-400 text-sm mb-4">Tbilisi, Georgia</p>
        <p className="text-gray-400 text-sm mb-6">"Front-end developer"</p>
        
        <div className="space-y-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="block w-full py-3 text-white text-center 
                         bg-[#333333] rounded-lg 
                         hover:bg-lime-400 hover:text-black 
                         transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;