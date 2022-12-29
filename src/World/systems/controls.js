import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  controls.tick = () => controls.update();

  controls.saveState();

  // sometime later:
  controls.reset();

  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  //   enabled control
  //   controls.enabled = false;

  return controls;
}

export default createControls;
