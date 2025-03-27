import React from 'react';

const QRCodeCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#D5E1EF] p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs w-full">
        <div className="bg-[#2B70F9] p-6 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <img 
              src="/api/placeholder/160/160" 
              alt="QR Code" 
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
        <div className="p-6 text-center">
          <h2 className="text-[#2B2D3C] text-xl font-bold mb-4">
            Improve your front-end skills by building small projects
          </h2>
          <p className="text-[#7B7D8C] text-sm">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeCard;