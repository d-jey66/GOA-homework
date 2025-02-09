import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

export const Contacts = () => {
  useEffect(() => {

    gsap.from('.contacts-form', {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });
    gsap.to('.contacts-form', {
        scale: 0.9,
        opacity: 1,
        duration: 1.5,
      });
  }, []);

  return (
    <div id="contacts" className="min-h-screen bg-zinc-900 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="contacts-form max-w-2xl mx-auto">
          <h2 className="text-blue-500 text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-blue-900/20 text-white pl-12 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-blue-900/20 text-white pl-12 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 text-blue-500" size={20} />
              <textarea 
                placeholder="Your Message"
                rows="6"
                className="w-full bg-blue-900/20 text-white pl-12 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
