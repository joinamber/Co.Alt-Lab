
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Project Details</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-gray-300">
          Detailed information about project {projectId} will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
