export default class Planet {
  constructor(p, diameter, distanceFromSun, scale) {
    this.diameter = diameter * scale;
    this.x = p.width / 2 - distanceFromSun * scale;
    this.y = p.height / 2 - distanceFromSun * scale;
    this.draw(p);
  }

  draw(p) {
    p.fill(255, 0, 0);
    p.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

// let diameter = 864340 * scale;
// p.fill(255, 0, 0);
// p.ellipse(p.width / 2, p.height / 2, diameter, diameter);
