
import React from 'react';
import { Card } from './ui/card';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;
  
  return (
    <a 
      href={project.projectUrl}
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="group relative p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5]/40 to-[#1EAEDB]/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-[#2A2F3C]">
            <Icon className="w-5 h-5 text-[#9b87f5]" />
          </div>
          <h3 className="text-xl font-bold text-[#9b87f5] mb-0">{project.title}</h3>
        </div>
        
        <span className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">{project.category}</span>
        <p className="text-gray-300">{project.description}</p>
      </Card>
    </a>
  );
};

export default ProjectCard;
