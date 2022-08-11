import { World } from "./world/world.js";

// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

// call main to start the app
// main();

const button = document.querySelector("#button");

button.addEventListener("click", main);
