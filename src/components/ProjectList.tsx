
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';

const ProjectList = () => {
  const projects = [
    { id: '1', title: 'Project Alpha', description: 'AI-driven analytics platform' },
    { id: '2', title: 'Project Beta', description: 'Blockchain integration service' },
    { id: '3', title: 'Project Gamma', description: 'IoT connectivity solution' },
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <Card className="p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20 hover:border-[#9b87f5]/40 transition">
              <h3 className="text-xl font-bold text-[#9b87f5] mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
