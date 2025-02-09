import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function PrivacyPolicy() {
  useEffect(() => {
    gsap.from('.privacy-content', {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 to-black text-white px-4 md:px-8">
      <div className="container mx-auto privacy-content">
        <h1 className="text-4xl md:text-5xl font-black mb-8">Privacy Policy</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Collection</h2>
            <p className="text-gray-300">We collect minimal personal information necessary for account creation and game functionality. This includes email, username, and payment details for purchases.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Usage</h2>
            <p className="text-gray-300">Your data is used solely for game-related services, account management, and improving user experience. We never share personal information with third parties without consent.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-gray-300">We employ industry-standard security measures to protect your personal information from unauthorized access or disclosure.</p>
          </section>
        </div>
      </div>
    </div>
  );
};