
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const MobiusStrip = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sketchRef.current) return;

    const sketch = (p: p5) => {
      let angle = 0;
      let mouseX = 0;
      let mouseY = 0;

      p.setup = () => {
        p.createCanvas(window.innerWidth, 600, p.WEBGL);
      };

      p.draw = () => {
        p.background(26, 31, 44, 0);
        p.smooth();
        
        // Update position based on mouse
        const targetX = p.mouseX - p.width / 2;
        const targetY = p.mouseY - p.height / 2;
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        
        p.translate(mouseX * 0.1, mouseY * 0.1, 0);
        p.rotateX(angle);
        p.rotateY(angle * 0.3);
        
        p.noFill();
        p.stroke(155, 135, 245);
        p.strokeWeight(2);
        
        // Draw Möbius strip
        for (let i = 0; i < p.TWO_PI; i += 0.1) {
          p.beginShape();
          for (let j = 0; j < p.TWO_PI; j += 0.1) {
            const r = 100;
            const nx = r * p.cos(j) * p.cos(i / 2);
            const ny = r * p.sin(j);
            const nz = r * p.cos(j) * p.sin(i / 2);
            p.vertex(nx, ny, nz);
          }
          p.endShape(p.CLOSE);
        }
        
        angle += 0.01;
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, 600);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={sketchRef} className="absolute top-0 left-0 w-full h-[600px] -z-10" />;
};

export default MobiusStrip;
