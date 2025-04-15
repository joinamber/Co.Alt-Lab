
import React from 'react';
import MobiusStrip from './MobiusStrip';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MobiusStrip />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
          Welcome to Co.Alt Lab
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          Exploring the intersections of technology, design, and innovation
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient px-6 py-2 rounded-md text-white hover:opacity-90 transition">
            Explore Projects
          </button>
          <button className="border border-[#9b87f5] px-6 py-2 rounded-md text-white hover:bg-[#9b87f5]/10 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
