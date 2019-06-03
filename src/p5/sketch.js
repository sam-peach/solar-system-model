// import earth from "./earth";
// import sun from "./sun";
import Planet from "./planetConstructor";
import { yieldExpression } from "@babel/types";

export default function sketch(p) {
  let scale = 0.001;

  p.setup = function() {
    p.pixelDensity(1);
    p.createCanvas(window.innerWidth, window.innerHeight, p.P2D);
  };
  let xOffest = 0;
  let yOffest = 0;
  p.draw = function() {
    p.translate(xOffest, yOffest);
    p.background(0);
    p.noStroke();
    p.smooth();
    const sun = new Planet(p, 864340, 0, scale);
    const mercury = new Planet(p, 3031.9 * 100, 35980000, scale);
    const venus = new Planet(p, 7520.8 * 100, 67240000, scale);
    const earth = new Planet(p, 7917.5 * 100, 92960000, scale);
  };

  p.mouseWheel = event => {
    scale += event.delta * 0.0000001;
  };

  p.mouseDragged = event => {
    xOffest += p.mouseX - p.pmouseX;
    yOffest += p.mouseY - p.pmouseY;
  };
}
