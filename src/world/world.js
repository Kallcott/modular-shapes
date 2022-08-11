import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createTriangle } from "./components/triangle.js";
import { createTorus } from "./components/torus.js";
import { createSphere } from "./components/sphere.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

// // Note 1-b: These variables are module-scoped: we cannot access them from outside the module.
let camera;
let renderer;
let scene;

class World {
  // 1. Create an instance of the World app
  constructor(container) {
    // // Note 1.a: This implementation would create camera, scene, and rendere in global scope.
    // this.camera = createCamera();
    // this.scene = createScene();
    // this.renderer = createRenderer();

    // Note 1.b: using the scoped variables
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    cube.position.set(-1.2, 1.5, -4);
    cube.rotateY(20);
    cube.rotateX(20);
    scene.add(cube);

    const triangle = createTriangle();
    triangle.position.set(1.2, 1.5, -0.5);
    triangle.rotateY(20);
    triangle.rotateZ(20);
    scene.add(triangle);

    const torus = createTorus();
    torus.position.set(-1.5, -2, -4);
    torus.rotateY(0.3);
    torus.rotateX(0.6);
    torus.rotateZ(0);
    scene.add(torus);

    const sphere = createSphere();
    sphere.position.set(+1.2, -1.4, -0.5);
    scene.add(sphere);

    const resizer = new Resizer(container, camera, renderer);
  }

  // 2. Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
