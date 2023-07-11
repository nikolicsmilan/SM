import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ModelViewer({ width, height, menu3D }) {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    const loader = new GLTFLoader();
    loader.load("/tv_unit__furniture/scene.gltf", function (gltf) {
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
      model.scale.set(menu3D.size, menu3D.size, menu3D.size);

      // Add the model to the scene
      scene.add(model);

      // Add lights if needed
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const animate = function () {
        requestAnimationFrame(animate);
        model.rotation.y += menu3D.rotate;
        renderer.render(scene, camera);
      };

      animate();
      setIsLoading(false);
    });

    // Set the camera position
    camera.position.z = 5;
  }, [width, height, menu3D]);

  return (
    <>
      {isLoading && <p>Töltés...</p>}
      <canvas
        ref={canvasRef}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
}

export default ModelViewer;
