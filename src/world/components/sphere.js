import {
  CircleBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  TorusBufferGeometry,
} from "three";

function createSphere() {
  // create a geometry
  const geometry = new CircleBufferGeometry(1, 40);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };
