import * as THREE from "three";
import gsap from "gsap";

console.log(gsap);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Animating with gsap

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 1, x: 0 });

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations

// requestAnimationFrame

// Previous time

// let time = Date.now();

// Clock

const clock = new THREE.Clock();

const tick = () => {
  // Current Time, delta and updating time for the next tick

  //   const currentTime = Date.now();
  //   const delta = currentTime - time;
  //   time = currentTime;

  //   console.log(delta);

  // Clock

  const elapsedTime = clock.getElapsedTime();

  // Testing elapsedTime

  //   console.log(elapsedTime);
  // Update objects

  //   mesh.position.x += 0.01;
  //   mesh.rotation.y += 0.001 * delta;

  //   mesh.rotation.y = elapsedTime * Math.PI * 2;

  // Object moving

  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime);

  // Camera moving + looking at the center of the cube

  // camera.position.y = Math.sin(elapsedTime);
  // camera.position.x = Math.cos(elapsedTime);
  // camera.lookAt(mesh.position);

  // Render

  renderer.render(scene, camera);

  // Call the function 'tick' again on the next frame

  window.requestAnimationFrame(tick);
};

tick();
