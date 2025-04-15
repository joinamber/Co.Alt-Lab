
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MobiusStrip = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sketchRef.current) return;

    const sketch = (p: p5) => {
      let angle = 0;
      let mouseX = p.width / 2;
      let mouseY = p.height / 2;

      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        // Make sure the canvas is visible and takes up space
        canvas.style('display', 'block');
        canvas.style('position', 'absolute');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '1'); // Changed from -10 to 1 to ensure visibility
      };

      p.draw = () => {
        p.clear(); // Clear the canvas each frame
        p.background(26, 31, 44, 150); // Less transparent background
        p.smooth();
        
        // More pronounced mouse following
        const targetX = p.mouseX - p.width / 2;
        const targetY = p.mouseY - p.height / 2;
        mouseX += (targetX - mouseX) * 0.1;
        mouseY += (targetY - mouseY) * 0.1;
        
        // Make the strip much larger and more visible
        p.translate(mouseX * 0.2, mouseY * 0.2, 0);
        p.rotateX(angle * 0.5);
        p.rotateY(angle * 0.6);
        
        // Much more vibrant visuals
        p.noFill();
        p.stroke(255, 135, 245); // Brighter purple color for better visibility
        p.strokeWeight(8); // Even thicker lines for better visibility
        
        // Draw Möbius strip with more detail
        const detail = 30; // Higher detail for smoother curves
        for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / detail) {
          p.beginShape();
          for (let j = 0; j < p.TWO_PI; j += p.TWO_PI / detail) {
            const r = 250; // Even larger radius
            const nx = r * p.cos(j) * p.cos(i / 2);
            const ny = r * p.sin(j);
            const nz = r * p.cos(j) * p.sin(i / 2);
            p.vertex(nx, ny, nz);
          }
          p.endShape(p.CLOSE);
        }
        
        // Add a second visual layer with different color for depth
        p.push();
        p.stroke(30, 174, 219, 230); // Blue color with less transparency
        p.strokeWeight(5);
        p.rotateX(angle * 0.3);
        p.rotateY(angle * 0.4);
        
        for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / detail) {
          p.beginShape();
          for (let j = 0; j < p.TWO_PI; j += p.TWO_PI / detail) {
            const r = 220; // Slightly smaller radius
            const nx = r * p.cos(j) * p.cos(i / 2);
            const ny = r * p.sin(j);
            const nz = r * p.cos(j) * p.sin(i / 2);
            p.vertex(nx, ny, nz);
          }
          p.endShape(p.CLOSE);
        }
        p.pop();
        
        // Add a third layer for more visual interest
        p.push();
        p.stroke(255, 255, 255, 200); // White color with less transparency
        p.strokeWeight(3);
        p.rotateX(angle * 0.7);
        p.rotateY(angle * 0.8);
        
        for (let i = 0; i < p.TWO_PI; i += p.TWO_PI / detail) {
          p.beginShape();
          for (let j = 0; j < p.TWO_PI; j += p.TWO_PI / detail) {
            const r = 190; // Even smaller radius
            const nx = r * p.cos(j) * p.cos(i / 2);
            const ny = r * p.sin(j);
            const nz = r * p.cos(j) * p.sin(i / 2);
            p.vertex(nx, ny, nz);
          }
          p.endShape(p.CLOSE);
        }
        p.pop();
        
        angle += 0.01;
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return (
    <div 
      ref={sketchRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ zIndex: 1 }} // Changed from -10 to 1 to ensure visibility
    />
  );
};

export default MobiusStrip;
