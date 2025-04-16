
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Contact Us</h1>
          <p className="text-xl text-gray-300 mb-12">
            Get in touch with us to discuss your next project or collaboration. We're always open to new ideas and opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-opacity-10 bg-white backdrop-blur-lg border border-[#9b87f5]/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-3 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold">Email</h2>
              </div>
              <a 
                href="mailto:hello@coaltlab.com" 
                className="text-[#33C3F0] hover:text-[#0FA0CE] transition-colors flex items-center"
              >
                hello@coaltlab.com
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-opacity-10 bg-white backdrop-blur-lg border border-[#9b87f5]/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Linkedin className="w-5 h-5 mr-3 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold">LinkedIn</h2>
              </div>
              <a 
                href="https://www.linkedin.com/company/coalt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33C3F0] hover:text-[#0FA0CE] transition-colors flex items-center"
              >
                linkedin.com/company/coalt
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-opacity-10 bg-white backdrop-blur-lg border border-[#9b87f5]/20 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Twitter className="w-5 h-5 mr-3 text-[#9b87f5]" />
                <h2 className="text-xl font-semibold">X (Twitter)</h2>
              </div>
              <a 
                href="https://x.com/coaltlab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#33C3F0] hover:text-[#0FA0CE] transition-colors flex items-center"
              >
                x.com/coaltlab
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-16 text-gray-400">
            <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
