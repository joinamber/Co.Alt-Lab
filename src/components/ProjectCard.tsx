
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;
  
  return (
    <Card className="group relative p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5]/40 to-[#1EAEDB]/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-[#2A2F3C]">
          <Icon className="w-5 h-5 text-[#9b87f5]" />
        </div>
        <h3 className="text-xl font-bold text-[#9b87f5] mb-0">{project.title}</h3>
      </div>
      <span className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">{project.category}</span>
      <p className="text-gray-300 mb-6">{project.description}</p>
      <div className="mt-auto">
        {project.ctaLink.startsWith('http') ? (
          <a 
            href={project.ctaLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#33C3F0] hover:text-[#0FA0CE] transition-colors"
          >
            {project.ctaText}
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        ) : (
          <Link 
            to={project.ctaLink}
            className="inline-flex items-center text-[#33C3F0] hover:text-[#0FA0CE] transition-colors"
          >
            {project.ctaText}
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
