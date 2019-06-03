export default function earth(p, scale) {
  const diameter = 7917.5 * scale * 100;
  const location = 92960000 * scale - (864340 * scale) / 2;
  p.fill(0, 255, 0);
  p.ellipse(p.width - location, 50, diameter, diameter);
}
