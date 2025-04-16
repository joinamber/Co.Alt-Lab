
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-opacity-90 bg-[#1A1F2C] backdrop-blur-sm shadow-md' : 'bg-opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">
              Co.Alt Lab
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/about">
                <Button variant="ghost" className="text-gray-300 hover:text-white">About</Button>
              </Link>
              <Link to="/projects">
                <Button variant="ghost" className="text-gray-300 hover:text-white">Projects</Button>
              </Link>
              <Link to="/process">
                <Button variant="ghost" className="text-gray-300 hover:text-white">Our Process</Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="text-gray-300 hover:text-white">Contact</Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-gray-300"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1F2C] bg-opacity-95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white">About</Button>
            </Link>
            <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white">Projects</Button>
            </Link>
            <Link to="/process" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white">Our Process</Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-left text-gray-300 hover:text-white">Contact</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
