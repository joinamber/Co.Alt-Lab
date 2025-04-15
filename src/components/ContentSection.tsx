
import React from 'react';
import { Card } from "@/components/ui/card";

const ContentSection = () => {
  return (
    <div className="bg-[#1A1F2C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Our Mission</h2>
            <p className="text-gray-300">
              Co.Alt Lab is dedicated to pushing the boundaries of technological innovation while maintaining a strong focus on human-centered design and sustainable development practices.
            </p>
          </Card>
          <Card className="p-6 bg-opacity-10 bg-white backdrop-blur-lg border-[#9b87f5]/20">
            <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">Our Approach</h2>
            <p className="text-gray-300">
              We combine cutting-edge technology with creative thinking to develop solutions that address real-world challenges and create meaningful impact.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
