import Planet from "./planetConstructor";
import orbirtRings from "./orbitRings";
export default function sketch(p) {
  let scale = 0.00001;

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(window.innerWidth, window.innerHeight, p.P2D);
  };
  let xOffest = 0;
  let yOffest = 0;
  p.draw = function() {
    console.log(scale);
    p.background(0);
    p.translate(xOffest, yOffest);
    p.noStroke();
    p.smooth();
    const sun = new Planet(p, 864340, 0, scale);
    const mercury = new Planet(p, 3031.9 * 100, 35980000, scale);
    const venus = new Planet(p, 7520.8 * 100, 67240000, scale);
    const earth = new Planet(p, 7917.5 * 100, 92960000, scale);
    const mars = new Planet(p, 4212.3 * 100, 141600000, scale);
    const jupiter = new Planet(p, 86881 * 100, 483800000, scale);
    const saturn = new Planet(p, 72367 * 100, 890800000, scale);
    const uranus = new Planet(p, 31518 * 100, 1790000000, scale);
    const neptune = new Planet(p, 30599 * 100, 2793000000, scale);
  };

  p.mouseWheel = event => {
    scale += event.delta * 0.00001;
  };

  p.mouseDragged = event => {
    xOffest += p.mouseX - p.pmouseX;
    yOffest += p.mouseY - p.pmouseY;
  };
}
