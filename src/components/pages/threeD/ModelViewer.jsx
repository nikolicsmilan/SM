import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimation } from '../utils/animations'; // Importáld be az animációhoz szükséges függvényt

function ModelViewer({ width, height, menu3D }) {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { animate } = useAnimation(); // Használd az animációhoz szükséges függvényt

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(width, height);

    const loader = new GLTFLoader();
    loader.load('/gazebo_1/scene.gltf', function (gltf) {
      const model = gltf.scene;

      // Adjust the model's position and scale
      model.position.set(0, -2, 0);
      model.scale.set(menu3D.size, menu3D.size, menu3D.size);

      // Add the model to the scene
      scene.add(model);

      // Add lights if needed
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      setIsLoading(false);
      animate(renderer, scene, camera); // Indítsd el az animációt a modellel

      // Ha nem szükséges az animáció folyamatos frissítése, akkor hozd létre csak egyszer és hívd meg egyszer
      // Ha folyamatos frissítésre van szükség, akkor helyezd a requestAnimationFrame hívást az useEffect függvénybe, és az animate függvényt hívd meg ott
    });

    // Set the camera position
    camera.position.z = 5;
  }, [width, height, menu3D]);

  return (
    <>
      {isLoading && <p>Töltés...</p>}
      <canvas ref={canvasRef} style={{ display: isLoading ? 'none' : 'block' }} />
    </>
  );
}

export default ModelViewer;





//return <div><canvas ref={canvasRef} /></div>;

//Material_6_baseColor

/*
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ModelViewer({ width, height, menu3D }) {
  console.log("ez a Modelviewer", menu3D);
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
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
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    });

    // Set the camera position
    camera.position.z = 5;
  }, [width, height, menu3D]);
  const rulerWidth = 100; // Adjust the width of the ruler based on your requirements
  const rulerScale = menu3D.size * 100; // Scale the ruler according to the model scale (adjust the factor as needed)

  return (
    <div>
      <canvas ref={canvasRef} />
      <div>
        <div style={{ width: rulerWidth, height: 20, border: '1px solid black', position: 'relative' }}>
          <div
            style={{
              width: rulerScale,
              height: '100%',
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.5,
            }}
          />
        </div>
        <div>Current Scale: {menu3D.size.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ModelViewer;
*/
