import * as THREE from "three";

// Instantiate a scene

const scene = new THREE.Scene();

// Object

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
