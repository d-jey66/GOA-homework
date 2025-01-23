import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { User, Briefcase, Code, Mail } from 'lucide-react';

const Portfolio = () => {
  const profileRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [profileRef.current, projectsRef.current, skillsRef.current],
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power2.out' 
      }
    );
  }, []); //eseni viswavle

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <div ref={profileRef} className="text-center mb-8">
        <img 
          src="/api/placeholder/200/200" 
          alt="Profile" 
          className="rounded-full mx-auto mb-4 shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800">temuri</h1>
        <p className="text-gray-600">Software Engineer & Web Developer</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div ref={projectsRef} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2 text-blue-500" /> Projects
          </h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <strong>Personal Website</strong>
              <p className="text-sm text-gray-600">React, Tailwind CSS</p>
            </li>
            <li className="border-b pb-2">
              <strong>E-commerce Platform</strong>
              <p className="text-sm text-gray-600">Next.js, GraphQL</p>
            </li>
          </ul>
        </div>

        <div ref={skillsRef} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2 text-green-500" /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Tailwind', 'GSAP'].map((skill) => (
              <span 
                key={skill} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a 
          href="mailto:john.doe@example.com" 
          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          <Mail className="mr-2" /> Contact Me
        </a>
      </div>
    </div>
  );
};

export default Portfolio;