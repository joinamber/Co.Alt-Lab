
import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ContentSection = () => {
  return (
    <div className="bg-[#1A1F2C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
          Our Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            "We test intentionally. We prototype publicly. Our process is human-first, not model-first."
          </p>
          <p className="text-gray-400">
            Inspired by design thinkers like Jony Ive and Naoto Fukasawa, we believe in simplicity, 
            intentionality, and human-centered design principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
