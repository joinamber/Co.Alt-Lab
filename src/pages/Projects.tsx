
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectList from '../components/ProjectList';
import ProjectDetail from '../components/ProjectDetail';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Routes>
          <Route index element={<ProjectList />} />
          <Route path=":projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
