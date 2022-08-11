import { Mesh, MeshBasicMaterial, TorusBufferGeometry } from "three";

function createTorus() {
  // create a geometry
  const geometry = new TorusBufferGeometry(1, 0.5, 5, 20, 6.285);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const torus = new Mesh(geometry, material);

  return torus;
}

export { createTorus };
