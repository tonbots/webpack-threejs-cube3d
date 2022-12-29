import "./main.css";
import World from "./World/Wolrd";

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // produce a single frame (render on demand)
  world.render();

  // start the loop (produce a stream of frames)
  world.start();
}
main();
