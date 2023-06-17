import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelViewer({ width, height, menu3D }) {
  console.log('ez a Modelviewer',menu3D)
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    const loader = new GLTFLoader();
    loader.load('/tv_unit__furniture/scene.gltf', function (gltf) {
      const model = gltf.scene;

  // Traverse through the model's children to find materials
  model.traverse((child) => {
    if (child.isMesh) {
      // Check if the material has a texture
      if (child.material.map) {
        // Load the new texture
        const textureLoader = new THREE.TextureLoader();
        const newTexture = textureLoader.load(menu3D.color);
        child.material.map = newTexture;
        child.material.needsUpdate = true;
      }
    }
  });

      
      // Adjust the model's position and scale
      model.position.set(0, -2, 0);
      model.scale.set(2.5, 2.5, 2.5);

      // Add the model to the scene
      scene.add(model);

      // Add lights if needed
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const animate = function () {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });

    // Set the camera position
    camera.position.z = 5;
  }, [width, height,menu3D]);

  return <canvas ref={canvasRef} />;
}

export default ModelViewer;


//Material_6_baseColor