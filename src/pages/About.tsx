
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300">
            Co.Alt Lab is a pioneering technology studio at the intersection of innovation and design.
            We specialize in creating cutting-edge solutions that push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
