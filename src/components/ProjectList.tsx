
import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  // Get unique categories
  const categories = Object.keys(projectsByCategory);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Our Projects</h1>
      
      {categories.map((category) => (
        <div key={category} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#9b87f5]">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsByCategory[category].map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
