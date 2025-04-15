
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const MobiusStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Adds inertia to controls
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.7;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.5;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    
    // Light setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);
    
    // Möbius strip creation using parametric geometry
    const createMobiusStrip = () => {
      const segments = 100;
      const radius = 2;
      const width = 1;
      
      // Parametric function for Möbius strip
      const mobiusFunction = (u: number, t: number, target: THREE.Vector3) => {
        const v = 2 * Math.PI * u;
        const halfT = t - 0.5; // Center the strip
        
        // Standard Möbius strip parametric equation
        const x = (radius + halfT * width * Math.cos(v / 2)) * Math.cos(v);
        const y = (radius + halfT * width * Math.cos(v / 2)) * Math.sin(v);
        const z = halfT * width * Math.sin(v / 2);
        
        target.set(x, y, z);
      };
      
      const geometry = new THREE.ParametricGeometry(
        mobiusFunction,
        segments,
        segments / 4
      );
      
      // Create gradient material
      const colors = [
        new THREE.Color('#D3E4FD'), // Light blue
        new THREE.Color('#33C3F0'), // Sky blue
        new THREE.Color('#1EAEDB'), // Bright blue
        new THREE.Color('#0FA0CE'), // Deeper blue
      ];
      
      // Apply colors to vertices for gradient effect
      const positionAttribute = geometry.getAttribute('position');
      const colorAttribute = new THREE.Float32BufferAttribute(
        new Float32Array(positionAttribute.count * 3),
        3
      );
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const z = positionAttribute.getZ(i);
        const normalized = (z + width / 2) / width; // Normalize z to 0-1 range
        
        // Choose color based on position
        let color;
        if (normalized < 0.25) {
          color = colors[0].clone().lerp(colors[1], normalized * 4);
        } else if (normalized < 0.5) {
          color = colors[1].clone().lerp(colors[2], (normalized - 0.25) * 4);
        } else if (normalized < 0.75) {
          color = colors[2].clone().lerp(colors[3], (normalized - 0.5) * 4);
        } else {
          color = colors[3].clone().lerp(colors[0], (normalized - 0.75) * 4);
        }
        
        colorAttribute.setXYZ(i, color.r, color.g, color.b);
      }
      
      geometry.setAttribute('color', colorAttribute);
      
      // Material with vertex colors for gradient
      const material = new THREE.MeshPhysicalMaterial({
        side: THREE.DoubleSide,
        vertexColors: true,
        metalness: 0.2,
        roughness: 0.3,
        flatShading: false,
        transparent: true,
        opacity: 0.9,
      });
      
      // Create the mesh and add to scene
      const mobius = new THREE.Mesh(geometry, material);
      scene.add(mobius);
      
      // Add subtle rotation animation
      let lastTime = 0;
      const animate = (time: number) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        // Only auto-rotate if not being dragged
        if (!controls.enabled || !controls.active) {
          mobius.rotation.y += deltaTime * 0.0001;
        }
        
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };
    
    createMobiusStrip();
    
    // Hover effect
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredObject: THREE.Object3D | null = null;
    
    const onMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse position
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Check for intersections
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      
      // Handle hover effects
      if (intersects.length > 0) {
        if (hoveredObject !== intersects[0].object) {
          hoveredObject = intersects[0].object;
          document.body.style.cursor = 'pointer';
          
          // Scale up slightly on hover
          hoveredObject.scale.set(1.05, 1.05, 1.05);
        }
      } else if (hoveredObject) {
        document.body.style.cursor = 'default';
        hoveredObject.scale.set(1, 1, 1);
        hoveredObject = null;
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default MobiusStrip;
