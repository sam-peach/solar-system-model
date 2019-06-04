export default class Planet {
  constructor(p, diameter, distanceFromSun, scale) {
    this.distanceFromSun = distanceFromSun / 100;
    this.scale = scale;
    this.diameter = (diameter / 100) * scale;
    this.x = p.width / 2 - this.distanceFromSun * scale;
    this.y = p.height / 2;
    this.orbitRing(p);
    this.draw(p);
  }

  draw(p) {
    p.noStroke();
    p.fill(255, 0, 0);
    p.ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  orbitRing(p) {
    p.noFill();
    p.stroke(255);
    p.strokeWeight(1);
    p.ellipse(
      p.width / 2,
      p.height / 2,
      this.distanceFromSun * this.scale * 2,
      this.distanceFromSun * this.scale * 2
    );
  }
}

// let diameter = 864340 * scale;
// p.fill(255, 0, 0);
// p.ellipse(p.width / 2, p.height / 2, diameter, diameter);
