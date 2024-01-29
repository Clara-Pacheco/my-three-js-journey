import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const gui = new GUI();
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Loading textures

// Door textures

const textureLoader = new THREE.TextureLoader();
const doorColorTexture = textureLoader.load("../textures/door/color.jpg");

// Encode in SRGB (used as map)

doorColorTexture.colorSpace = THREE.SRGBColorSpace;

const alphaTexture = textureLoader.load("../textures/door/alpha.jpg");
const ambientOcclusionTexture = textureLoader.load(
  "../textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("../textures/door/height.jpg");
const metalnessTexture = textureLoader.load("../textures/door/metalness.jpg");
const doorNormalTexture = textureLoader.load("../textures/door/normal.jpg");
const roughnessTexture = textureLoader.load("../textures/door/roughness.jpg");

// Matcaps textures

const matcap1Texture = textureLoader.load("../textures/matcaps/1.png");
const matcap2Texture = textureLoader.load("../textures/matcaps/2.png");
const matcap3Texture = textureLoader.load("../textures/matcaps/3.png");
const matcap4Texture = textureLoader.load("../textures/matcaps/4.png");
const matcap5Texture = textureLoader.load("../textures/matcaps/5.png");
const matcap6Texture = textureLoader.load("../textures/matcaps/6.png");
const matcap7Texture = textureLoader.load("../textures/matcaps/7.png");
const matcap8Texture = textureLoader.load("../textures/matcaps/8.png");

// Encode in SRGB (used as matcap)

matcap1Texture.colorSpace = THREE.SRGBColorSpace;

// Gradient textures

const gradientTexture = textureLoader.load("../textures/gradients/3.jpg");

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Mesh
 */
// Create the three geometries

const SphereGeometry = new THREE.SphereGeometry(0.5, 64, 64);
const PlaneGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);
const TorusGeometry = new THREE.TorusGeometry(0.3, 0.2, 64, 128);
const TorusKnotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const ConeGeometry = new THREE.ConeGeometry(1, 2, 4);
const IcosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);

// Create lights and add them to the scene

// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 30);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.x = 4;
// scene.add(pointLight);

// Enviorment Map

// Instantiate a rgbeLoader

const rgbeLoader = new RGBELoader();

// Use its load() method to load the enviorment texture

rgbeLoader.load("../textures/environmentMap/2k.hdr", (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping;

  scene.background = environmentMap;
  scene.environment = environmentMap;
});

// Create the MeshBasicMaterial

// const material = new THREE.MeshBasicMaterial({
//   side: THREE.DoubleSide,
//   map: doorColorTexture,
//   color: "red",
//   wireframe: true,
//   transparent: true,
//   alphaMap: alphaTexture,
//   opacity: 0.5,
// });

// Create a MeshNormalMaterial

// const material = new THREE.MeshNormalMaterial({
//   wireframe: true,
//   flatShading: true,
// });

// Create a MeshMatcapMaterial

// const material = new THREE.MeshMatcapMaterial({
//   matcap: matcap8Texture,
// });

// Create a MeshDepthMaterial

// const material = new THREE.MeshDepthMaterial();

// Create a MeshLambertMaterial

// const material = new THREE.MeshLambertMaterial();

// Create a MeshPhongMaterial

// const material = new THREE.MeshPhongMaterial({
//   shininess: 100,
//   specular: new THREE.Color(0x1188ff),
// });

// Create a MeshToonMaterial

// gradientTexture.minFilter = THREE.NearestFilter;
// gradientTexture.magFilter = THREE.NearestFilter;
// gradientTexture.generateMipmaps = false;

// const material = new THREE.MeshToonMaterial({
//   gradientMap: gradientTexture,
// });

// Create a MeshStandardMaterial

const material = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 1,
  map: doorColorTexture,
  aoMap: ambientOcclusionTexture,
  aoMapIntensity: 1,
  // displacementMap: doorHeightTexture,
  // displacementScale: 0.1,
  metalnessMap: metalnessTexture,
  roughnessMap: roughnessTexture,
  normalMap: doorNormalTexture,
  // alphaMap: alphaTexture,
  // transparent: true,
});

gui.add(material, "metalness").min(0).max(1).step(0.0001);
gui.add(material, "roughness").min(0).max(1).step(0.0001);

// Create a MeshPhysicalMaterial

const material2 = new THREE.MeshPhysicalMaterial({
  metalness: 1,
  roughness: 1,
  map: doorColorTexture,
  aoMap: ambientOcclusionTexture,
  aoMapIntensity: 1,
  // displacementMap: doorHeightTexture,
  // displacementScale: 0.1,
  metalnessMap: metalnessTexture,
  roughnessMap: roughnessTexture,
  normalMap: doorNormalTexture,
  // alphaMap: alphaTexture,
  // transparent: true,
  // clearcoat: 1,
  // clearcoatRoughness: 0,
  // sheen: 1,
  // sheenRoughness: 0.25,
  iridescence: 1,
  iridescenceIOR: 1,
  iridescenceThicknessRange: [100, 800],
});

material2.sheenColor.set(1, 1, 1);

// gui.add(material2, "clearcoat").min(0).max(1).step(0.0001);
// gui.add(material2, "clearcoatRoughness").min(0).max(1).step(0.0001);
// gui.add(material2, "sheen").min(0).max(1).step(0.0001);
// gui.add(material2, "sheenRoughness").min(0).max(1).step(0.0001);
// gui.addColor(material2, "sheenColor");
gui.add(material2, "iridescence").min(0).max(1).step(0.0001);
gui.add(material2, "iridescenceIOR").min(1).max(2.333).step(0.0001);
gui.add(material2.iridescenceThicknessRange, "0").min(1).max(1000).step(1);
gui.add(material2.iridescenceThicknessRange, "1").min(1).max(1000).step(1);

// Create the 3 objects(meshs)

const mesh1 = new THREE.Mesh(SphereGeometry, material);
mesh1.position.x = -2;
const mesh2 = new THREE.Mesh(PlaneGeometry, material);
const mesh3 = new THREE.Mesh(TorusGeometry, material);
mesh3.position.x = 2;

const mesh4 = new THREE.Mesh(TorusKnotGeometry, material2);
mesh4.position.x = -30;
const mesh5 = new THREE.Mesh(ConeGeometry, material2);
mesh5.position.x = 6;
const mesh6 = new THREE.Mesh(IcosahedronGeometry, material2);
mesh6.position.x = 10;

// Add the 3 objects to the scene
// scene.add(mesh1, mesh2, mesh3);
// or
scene.add(mesh1);
scene.add(mesh2);
scene.add(mesh3);
scene.add(mesh4);
scene.add(mesh5);
scene.add(mesh6);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects by rotating them in the 'y' axis

  mesh1.rotation.y = 0.1 * elapsedTime;
  mesh2.rotation.y = 0.1 * elapsedTime;
  mesh3.rotation.y = 0.1 * elapsedTime;
  mesh4.rotation.y = 0.1 * elapsedTime;
  mesh5.rotation.y = 0.1 * elapsedTime;
  mesh6.rotation.y = 0.1 * elapsedTime;

  // Update the objects by rotatring them on the 'x' axis

  mesh1.rotation.x = -0.15 * elapsedTime;
  mesh2.rotation.x = -0.15 * elapsedTime;
  mesh3.rotation.x = -0.15 * elapsedTime;
  mesh4.rotation.x = -0.15 * elapsedTime;
  mesh5.rotation.x = -0.15 * elapsedTime;
  mesh6.rotation.x = -0.15 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
