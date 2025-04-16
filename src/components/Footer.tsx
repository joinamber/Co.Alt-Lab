
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#171B24] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
              Co.Alt Lab
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Exploring the intersections of technology, design, and innovation to create AI-powered
              solutions that are human-centered and impactful.
            </p>
          </div>
          
          <div className="md:ml-auto">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              <a href="mailto:hello@coaltlab.com" className="hover:text-[#33C3F0] transition-colors">
                hello@coaltlab.com
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/company/coalt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#33C3F0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/coaltlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#33C3F0] transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-sm text-gray-500">
            © {currentYear} Co.Alt Lab. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-[#33C3F0] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-[#33C3F0] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
