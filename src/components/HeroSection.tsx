
import React from 'react';
import { Link } from 'react-router-dom';
import MobiusStrip from './MobiusStrip';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MobiusStrip />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#33C3F0] to-[#0FA0CE] bg-clip-text text-transparent">
          Welcome to Co.Alt Lab
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          Exploring the intersections of technology, design, and innovation
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/projects">
            <button className="w-full sm:w-auto bg-gradient px-6 py-3 rounded-md text-white hover:opacity-90 transition">
              Explore Projects
            </button>
          </Link>
          <Link to="/contact">
            <button className="w-full sm:w-auto border border-[#33C3F0] px-6 py-3 rounded-md text-white hover:bg-[#33C3F0]/10 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
