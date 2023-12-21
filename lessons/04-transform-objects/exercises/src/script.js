import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Methods length(), distanceTo(), normalize() and set()

console.log(mesh.position.length());

console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2)));

// mesh.position.normalize();
// console.log(mesh.position.length());

// Axes Helper

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Position the camera

camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

console.log(mesh.position.distanceTo(camera.position));

// Scale

// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

mesh.scale.set(2, 0.5, 0.5);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
