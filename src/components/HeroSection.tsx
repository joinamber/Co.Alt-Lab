
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
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Exploring the intersections of technology, design, and innovation
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
