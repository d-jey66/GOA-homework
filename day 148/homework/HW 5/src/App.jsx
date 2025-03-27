import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Menu 
} from 'lucide-react';

const HuddleLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-purple-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-50">
        <div className="w-32 h-32 bg-purple-400/30 rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-24 h-24 bg-purple-400/30 rotate-45 translate-x-1/2 mt-16"></div>
      </div>

      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center text-white">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-bold text-xl">Huddle</span>
        </div>
        <Menu className="text-white" />
      </nav>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between mt-10">
        <div className="w-full md:w-1/2 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-6 shadow-xl">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex space-x-2 mb-4">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded w-full"></div>
                <div className="h-2 bg-white/30 rounded w-3/4"></div>
                <div className="h-2 bg-white/30 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-6">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-lg mb-8">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition">
            Register
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-4">
        <Facebook className="text-white hover:text-purple-200 cursor-pointer" />
        <Twitter className="text-white hover:text-purple-200 cursor-pointer" />
        <Instagram className="text-white hover:text-purple-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default HuddleLanding;