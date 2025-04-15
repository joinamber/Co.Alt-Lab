
import React from 'react';
import MobiusStrip from '../components/MobiusStrip';

const MobiusTest = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1F2C]">
      <MobiusStrip />
      <div className="relative z-10 p-4">
        <h1 className="text-2xl font-bold text-white">Möbius Strip Test Page</h1>
        <p className="text-white">Interact with the Möbius strip: click and drag to rotate, scroll to zoom.</p>
      </div>
    </div>
  );
};

export default MobiusTest;
