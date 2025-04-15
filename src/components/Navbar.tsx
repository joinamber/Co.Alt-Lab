
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-[#1A1F2C] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
              Co.Alt Lab
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/about">
                <Button variant="ghost" className="text-gray-300 hover:text-white">About</Button>
              </Link>
              <Link to="/projects">
                <Button variant="ghost" className="text-gray-300 hover:text-white">Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-gray-300 hover:text-white">Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
