import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { PlayCircle, Star } from 'lucide-react';
import videoSource from '../assets/videos/gta6.mp4';

export const Hero = () => {
  useEffect(() => {
    gsap.fromTo('.hero-title', 
      { x: -200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 3, ease: "power4.out" }
    );
    
    gsap.fromTo('.hero-subtitle', 
      { x: 200, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 3, delay: 0.5, ease: "power4.out" }
    );
    
    gsap.fromTo('.hero-icon', 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 3, delay: 1, stagger: 0.2, ease: "back.out(1.7)" }
    );
    
    
  }, []);

  return (
    <div id="home" className="h-screen relative overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover brightness-100 contrast-100"
        autoPlay 
        loop 
        muted 
        playsInline
        src={videoSource}
      />
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col justify-center h-screen">
          <h1 className="hero-title text-white text-4xl md:text-7xl lg:text-[100px] font-black max-w-[900px] leading-tight" style={{
            textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
          }}>
            GAME SERIES OF ROCKSTAR
          </h1>
          <p className="hero-subtitle text-white text-xl md:text-3xl mt-4 max-w-[600px] font-bold" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>
            Experience the most immersive and groundbreaking open-world games
          </p>
          <div className="flex gap-4 mt-8">
            <PlayCircle className="hero-icon text-white" size={40} style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
            }} />
            <Star className="hero-icon text-white" size={40} style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};