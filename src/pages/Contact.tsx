
import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB] bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch with us to discuss your next project or collaboration.
        </p>
      </div>
    </div>
  );
};

export default Contact;
