export default function sun(p, scale) {
  let diameter = 864340 * scale;
  p.fill(255, 0, 0);
  p.ellipse(p.width / 2, p.height / 2, diameter, diameter);
}
