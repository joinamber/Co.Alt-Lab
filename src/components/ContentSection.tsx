
import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ContentSection = () => {
  return (
    <div className="bg-[#1A1F2C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
          Our Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
