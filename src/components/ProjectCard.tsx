
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
      className="block h-full"
    >
      <Card className="group relative h-full p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9b87f5]/10 flex flex-col">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5]/40 to-[#1EAEDB]/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        
        <div className="flex items-start gap-3 mb-4 flex-shrink-0">
          <div className="p-2.5 rounded-lg bg-[#2A2F3C] flex-shrink-0">
            <Icon className="w-5 h-5 text-[#9b87f5]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold text-[#9b87f5] leading-tight">{project.title}</h3>
            <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 block">{project.category}</span>
          </div>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed flex-1">{project.description}</p>
      </Card>
    </a>
  );
};

export default ProjectCard;
