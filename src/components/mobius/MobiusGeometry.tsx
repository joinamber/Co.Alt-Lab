
import * as THREE from 'three';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';

export interface MobiusParams {
  segments: number;
  radius: number;
  width: number;
}

export const createMobiusGeometry = ({ segments, radius, width }: MobiusParams) => {
  const mobiusFunction = (u: number, t: number, target: THREE.Vector3) => {
    const v = 2 * Math.PI * u;
    const halfT = t - 0.5;
    
    const x = (radius + halfT * width * Math.cos(v / 2)) * Math.cos(v);
    const y = (radius + halfT * width * Math.cos(v / 2)) * Math.sin(v);
    const z = halfT * width * Math.sin(v / 2);
    
    target.set(x, y, z);
  };
  
  return new ParametricGeometry(mobiusFunction, segments, segments / 4);
};

export const createGradientColors = (geometry: THREE.BufferGeometry, width: number) => {
  const colors = [
    new THREE.Color('#D3E4FD'),
    new THREE.Color('#33C3F0'),
    new THREE.Color('#1EAEDB'),
    new THREE.Color('#0FA0CE'),
  ];
  
  const positionAttribute = geometry.getAttribute('position');
  const colorAttribute = new THREE.Float32BufferAttribute(
    new Float32Array(positionAttribute.count * 3),
    3
  );
  
  for (let i = 0; i < positionAttribute.count; i++) {
    const z = positionAttribute.getZ(i);
    const normalized = (z + width / 2) / width;
    
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
  return geometry;
};
