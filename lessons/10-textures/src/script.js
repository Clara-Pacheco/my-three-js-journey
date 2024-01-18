import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Textures
 */

// const image = new Image();
// const texture = new THREE.Texture(image);
// texture.colorSpace = THREE.SRGBColorSpace;
// image.onload = () => {
//   texture.needsUpdate = true;
// };

// image.src = "./textures/door/color.jpg";

//Using textureLoader

const loadManager = new THREE.LoadingManager();
loadManager.onStart = () => {
  console.log("Started loading");
};

loadManager.onLoad = () => {
  console.log("Finished loading");
};

loadManager.onProgress = () => {
  console.log("Progress loading");
};

loadManager.onError = () => {
  console.log("Error loading");
};

loadManager.on;
const textureLoader = new THREE.TextureLoader(loadManager);
const colorTexture = textureLoader.load(
  "/textures/minecraft.png",
  () => {
    console.log("load");
  },
  () => {
    console.log("progress");
  },
  () => {
    console.log("error");
  }
);
colorTexture.colorSpace = THREE.SRGBColorSpace;

/**
 * Repeat Property
 */

// colorTexture.repeat.x = 2;
// colorTexture.repeat.y = 3;

// colorTexture.wrapS = THREE.RepeatWrapping;
// colorTexture.wrapT = THREE.RepeatWrapping;

// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;

/**
 * Offset Property
 */

// colorTexture.offset.x = 0.5;
// colorTexture.offset.y = 0.5;

/**
 * Rotate Property
 */

// colorTexture.rotation = Math.PI * 0.25;

// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;

colorTexture.generateMipmaps = false;
colorTexture.minFilter = THREE.NearestFilter;

// const alphaTexture = textureLoader.load(
//   "/textures/door/alpha.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );
// alphaTexture.colorSpace = THREE.SRGBColorSpace;

// const heightTexture = textureLoader.load(
//   "/textures/door/height.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );
// heightTexture.colorSpace = THREE.SRGBColorSpace;

// const normalTexture = textureLoader.load(
//   "/textures/door/normal.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );
// normalTexture.colorSpace = THREE.SRGBColorSpace;

// const ambientOcclusionTexture = textureLoader.load(
//   "/textures/door/ambientOcclusion.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );

// ambientOcclusionTexture.colorSpace = THREE.SRGBColorSpace;

// const metalTexture = textureLoader.load(
//   "/textures/door/metalness.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );
// metalTexture.colorSpace = THREE.SRGBColorSpace;

// const roughnessTexture = textureLoader.load(
//   "/textures/door/roughness.jpg",
//   () => {
//     console.log("load");
//   },
//   () => {
//     console.log("progress");
//   },
//   () => {
//     console.log("error");
//   }
// );
// roughnessTexture.colorSpace = THREE.SRGBColorSpace;
/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: colorTexture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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
camera.position.z = 1;
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

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
