import React from 'react';

const ProfileStatsCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-80 overflow-hidden">
        <div className="bg-[#7BE4D5] bg-opacity-30 h-24 relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img 
              src="/api/placeholder/120/120" 
              alt="Profile" 
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
        
        <div className="pt-16 text-center">
          <h2 className="text-xl font-bold text-gray-800">Dachi Jananashvili 
            <span className="text-gray-500 font-normal ml-2">14</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1"></p>
          
          <div className="flex justify-around mt-6 border-t py-4">
            <div className="text-center">
              <h3 className="font-bold text-gray-800">5K</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Followers</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800">10K</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Likes</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-gray-800">200</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatsCard;