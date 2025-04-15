
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const Icon = project.icon;
  
  return (
    <Card className="group relative p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20 hover:border-[#9b87f5]/60 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5]/40 to-[#1EAEDB]/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      {project.screenshot && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={project.screenshot} 
            alt={`${project.title} screenshot`}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-[#2A2F3C]">
          <Icon className="w-5 h-5 text-[#9b87f5]" />
        </div>
        <h3 className="text-xl font-bold text-[#9b87f5] mb-0">{project.title}</h3>
      </div>
      
      <span className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">{project.category}</span>
      <p className="text-gray-300 mb-6">{project.description}</p>
      
      <div className="mt-auto space-y-3">
        {project.projectUrl && (
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-[#9b87f5] transition-colors text-sm"
          >
            <LinkIcon className="w-4 h-4 mr-1" />
            Visit project
          </a>
        )}
        {project.ctaLink.startsWith('http') ? (
          <a 
            href={project.ctaLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#33C3F0] hover:text-[#0FA0CE] transition-colors w-full"
          >
            {project.ctaText}
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        ) : (
          <Link 
            to={project.ctaLink}
            className="inline-flex items-center text-[#33C3F0] hover:text-[#0FA0CE] transition-colors w-full"
          >
            {project.ctaText}
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
