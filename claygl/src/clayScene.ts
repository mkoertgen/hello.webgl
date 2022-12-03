import {application, Camera, Mesh, DirectionalLight} from "claygl";
import {Cube} from "claygl/typescript/geometry/Cube";

function setupCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
  let _camera: Camera = null;
  let _cube: Cube = {};
  let _mainLight = new DirectionalLight([-1, -1, -1]);

  return application.create(canvas, {
    width: width,
    height: height,

    init(app) {
      // Create camera
      _camera = app.createCamera([0, 2, 5], [0, 0, 0]);
      // Create a RED cube
      _cube = app.createCube({
        color: "#f00",
      });

      // Create light
      _mainLight = app.createDirectionalLight([-1, -1, -1]);
    },
    loop(app) {
      _cube.rotation.rotateY(app.frameTime / 1000);
    },
  });
}

export {setupCanvas};
