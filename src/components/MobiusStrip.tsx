
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createMobiusGeometry, createGradientColors } from './mobius/MobiusGeometry';
import { createScene, handleResize } from './mobius/SceneSetup';
import { setupHoverEffects } from './mobius/HoverEffects';

const MobiusStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene, camera, renderer, and controls
    const { scene, camera, renderer, controls } = createScene({
      container: containerRef.current
    });
    
    // Create Möbius strip
    const geometry = createMobiusGeometry({
      segments: 100,
      radius: 2,
      width: 1
    });
    
    // Apply gradient colors
    createGradientColors(geometry, 1);
    
    // Create material and mesh
    const material = new THREE.MeshPhysicalMaterial({
      side: THREE.DoubleSide,
      vertexColors: true,
      metalness: 0.2,
      roughness: 0.3,
      flatShading: false,
      transparent: true,
      opacity: 0.9,
    });
    
    const mobius = new THREE.Mesh(geometry, material);
    scene.add(mobius);
    
    // Set up animation
    let lastTime = 0;
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      if (!controls.enabled || !controls.active) {
        mobius.rotation.y += deltaTime * 0.0001;
      }
      
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    // Set up event listeners
    const cleanup = setupHoverEffects(scene, camera);
    const resizeHandler = () => handleResize(camera, renderer);
    window.addEventListener('resize', resizeHandler);
    
    // Cleanup function
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', resizeHandler);
      cleanup();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-[calc(100%-20px)] h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default MobiusStrip;
