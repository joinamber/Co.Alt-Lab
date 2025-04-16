
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export interface SceneProps {
  container: HTMLDivElement;
}

export const createScene = ({ container }: SceneProps) => {
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
  renderer.setSize(window.innerWidth - 20, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);
  
  // Controls setup
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.7;
  controls.enableZoom = true;
  controls.zoomSpeed = 0.5;
  controls.minDistance = 3;
  controls.maxDistance = 10;
  
  // Lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 2);
  scene.add(directionalLight);
  
  return { scene, camera, renderer, controls };
};

export const handleResize = (
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  const width = window.innerWidth - 20;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};
