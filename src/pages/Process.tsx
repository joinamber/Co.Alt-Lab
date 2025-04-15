
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Process = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Our Process</h1>
          
          <div className="text-xl text-gray-300 mb-12 space-y-8">
            <p>
              At Co.Alt Lab, we test intentionally. We prototype publicly. 
              Our process is human-first, not model-first.
            </p>
            
            <p>
              Inspired by design thinkers like Jony Ive and Naoto Fukasawa, 
              we believe in simplicity, intentionality, and human-centered design principles.
            </p>
          </div>
          
          <div className="space-y-12 mt-16">
            <div className="border-l-4 border-[#9b87f5] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">Research & Discovery</h3>
              <p className="text-gray-300">
                We begin each project with thorough research to understand the problem space,
                user needs, and existing solutions. We use a combination of qualitative and 
                quantitative research methods to gather insights.
              </p>
            </div>
            
            <div className="border-l-4 border-[#33C3F0] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#33C3F0]">Ideation & Prototyping</h3>
              <p className="text-gray-300">
                We generate multiple concepts and prototypes to explore different approaches.
                We believe in rapid prototyping to test ideas quickly and gather feedback early.
              </p>
            </div>
            
            <div className="border-l-4 border-[#9b87f5] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">Design & Development</h3>
              <p className="text-gray-300">
                Our design process is iterative and collaborative. We work closely with clients
                and users to refine our solutions. We focus on creating experiences that are
                both functional and delightful.
              </p>
            </div>
            
            <div className="border-l-4 border-[#33C3F0] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#33C3F0]">Testing & Validation</h3>
              <p className="text-gray-300">
                We rigorously test our solutions with real users to validate our assumptions
                and identify areas for improvement. We believe in continuous testing and iteration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Process;
