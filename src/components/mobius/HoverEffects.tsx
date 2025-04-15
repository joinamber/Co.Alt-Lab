
import * as THREE from 'three';

export const setupHoverEffects = (
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredObject: THREE.Object3D | null = null;
  
  const onMouseMove = (event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
      if (hoveredObject !== intersects[0].object) {
        hoveredObject = intersects[0].object;
        document.body.style.cursor = 'pointer';
        hoveredObject.scale.set(1.05, 1.05, 1.05);
      }
    } else if (hoveredObject) {
      document.body.style.cursor = 'default';
      hoveredObject.scale.set(1, 1, 1);
      hoveredObject = null;
    }
  };
  
  window.addEventListener('mousemove', onMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
  };
};
