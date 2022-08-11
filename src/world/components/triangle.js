import { Mesh, MeshBasicMaterial, ConeBufferGeometry } from "three";

function createTriangle() {
  // create a geometry
  const geometry = new ConeBufferGeometry(1, 2, 4, 1, true);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const triangle = new Mesh(geometry, material);

  return triangle;
}

export { createTriangle };
