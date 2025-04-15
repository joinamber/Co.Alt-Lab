
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
        canvas.style('display', 'block');
        canvas.style('position', 'absolute');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '1');
      };

      p.draw = () => {
        p.clear();
        p.background(26, 31, 44, 100); // More transparent background
        p.smooth();
        
        const targetX = p.mouseX - p.width / 2;
        const targetY = p.mouseY - p.height / 2;
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        
        p.translate(mouseX * 0.1, mouseY * 0.1, 0);
        p.rotateX(angle * 0.3);
        p.rotateY(angle * 0.4);
        
        // Main Möbius strip with subtle gray
        p.noFill();
        p.stroke('#8E9196'); // Neutral gray
        p.strokeWeight(2);
        
        const detail = 50; // Higher detail for smoother curves
        const u = 1; // Width of the strip
        
        for (let t = 0; t < p.TWO_PI; t += p.TWO_PI / detail) {
          p.beginShape(p.TRIANGLE_STRIP);
          for (let i = 0; i <= detail; i++) {
            const phi = (i * p.TWO_PI) / detail;
            
            // Möbius strip parametric equations
            const x = (2 + u * p.cos(phi / 2)) * p.cos(phi);
            const y = (2 + u * p.cos(phi / 2)) * p.sin(phi);
            const z = u * p.sin(phi / 2);
            
            p.vertex(x * 100, y * 100, z * 100);
            
            const phi2 = ((i + 1) * p.TWO_PI) / detail;
            const x2 = (2 + u * p.cos(phi2 / 2)) * p.cos(phi2);
            const y2 = (2 + u * p.cos(phi2 / 2)) * p.sin(phi2);
            const z2 = u * p.sin(phi2 / 2);
            
            p.vertex(x2 * 100, y2 * 100, z2 * 100);
          }
          p.endShape();
        }
        
        // Secondary subtle layer
        p.push();
        p.stroke('#F1F0FB'); // Soft gray
        p.strokeWeight(1);
        p.rotateX(angle * 0.2);
        p.rotateY(angle * 0.3);
        
        for (let t = 0; t < p.TWO_PI; t += p.TWO_PI / detail) {
          p.beginShape(p.TRIANGLE_STRIP);
          for (let i = 0; i <= detail; i++) {
            const phi = (i * p.TWO_PI) / detail;
            
            const x = (1.8 + u * p.cos(phi / 2)) * p.cos(phi);
            const y = (1.8 + u * p.cos(phi / 2)) * p.sin(phi);
            const z = u * p.sin(phi / 2);
            
            p.vertex(x * 100, y * 100, z * 100);
            
            const phi2 = ((i + 1) * p.TWO_PI) / detail;
            const x2 = (1.8 + u * p.cos(phi2 / 2)) * p.cos(phi2);
            const y2 = (1.8 + u * p.cos(phi2 / 2)) * p.sin(phi2);
            const z2 = u * p.sin(phi2 / 2);
            
            p.vertex(x2 * 100, y2 * 100, z2 * 100);
          }
          p.endShape();
        }
        p.pop();
        
        angle += 0.005; // Slower rotation
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
      style={{ zIndex: 1 }}
    />
  );
};

export default MobiusStrip;
