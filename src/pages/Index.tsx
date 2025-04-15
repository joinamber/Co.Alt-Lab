
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default Index;
