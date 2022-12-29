import createCamera from "./components/camera";
import createCube from "./components/cube";
import createLights from "./components/lights";
import createScene from "./components/scene";
import createControls from "./systems/controls";
import Loop from "./systems/Loop";
import createRenderer from "./systems/renderer";
import Resizer from "./systems/Resize";

// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    controls.addEventListener('change', () => {
      this.render();
      });

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();

    // loop.updatables.push(cube);
    loop.updatables.push(controls);

    controls.target.copy(cube.position);
    scene.add(cube, ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World;
