
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
          
          <div className="text-xl text-gray-300 mb-12">
            <p className="mb-8">
              At Co.Alt Lab, we blend rapid iteration with creative exploration to build technology that truly serves people. Inspired by the accelerator mindset of Y Combinator and the interdisciplinary, experimental spirit of the MIT Media Lab, our process is both agile and rigorous:
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="border-l-4 border-[#9b87f5] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">1. Discovery & Ideation</h3>
              <p className="text-gray-300">
                We start by deeply understanding user needs and context, bringing together designers, engineers, and thought leaders to brainstorm bold ideas and identify opportunities for human-first innovation.
              </p>
            </div>
            
            <div className="border-l-4 border-[#33C3F0] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#33C3F0]">2. Rapid Prototyping & Experimentation</h3>
              <p className="text-gray-300">
                Leveraging lean, iterative cycles, we quickly build prototypes and test ideas in real-world scenarios. This allows us to learn fast, validate concepts early, and pivot as needed—similar to the fast iteration loops championed by Y Combinator.
              </p>
            </div>
            
            <div className="border-l-4 border-[#9b87f5] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">3. Collaborative Refinement</h3>
              <p className="text-gray-300">
                Through open workshops and public feedback, we refine our prototypes using continuous, interdisciplinary collaboration. Much like the MIT Media Lab's model, our approach fosters cross-domain creativity and transparency.
              </p>
            </div>
            
            <div className="border-l-4 border-[#33C3F0] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#33C3F0]">4. Practical Integration</h3>
              <p className="text-gray-300">
                Once validated, ideas are scaled into robust solutions through agile methodologies, ensuring that each innovation is both cutting-edge and practical enough to address real challenges.
              </p>
            </div>

            <div className="border-l-4 border-[#9b87f5] pl-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#9b87f5]">5. Continuous Learning</h3>
              <p className="text-gray-300">
                Our process is an ongoing loop of discovery, prototyping, and refinement. By staying open to new insights and adapting quickly, we ensure that our work always evolves to meet changing human needs.
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
