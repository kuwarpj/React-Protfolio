import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
function ThreeD() {



    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        loader.load('../asset/img/Laptop2.fbx', (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
        });


        // Three.js code goes here
    }, []);

    return (
        <div ref={containerRef}>dfh</div>
    );
}


export default ThreeD;