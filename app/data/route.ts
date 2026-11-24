
export const TRACK = { width: 4300, height: 700 };

const CENTER = 350; // wave ki beech wali line
const AMP = 70; // crest/trough kitna upar-neeche
const START_X = 450; // pehle port ki x position
const GAP = 480; // ports ke beech ki doori

// Even ports crest pe (upar), odd ports trough pe (neeche)
export const PORT_POINTS = Array.from({ length: 8 }, (_, i) => ({
  x: START_X + i * GAP,
  y: CENTER + (i % 2 === 0 ? -AMP : AMP),
}));

// Start aur end thoda andar rakhe taaki boat screen se cut na ho
const points = [
  { x: 60, y: CENTER },
  ...PORT_POINTS,
  { x: TRACK.width - 60, y: CENTER },
];

// Har do points ke beech ek smooth S-curve (control points beech mein, horizontal tangent)
export const ROUTE_PATH = points.reduce((d, p, i) => {
  if (i === 0) return `M ${p.x} ${p.y}`;
  const prev = points[i - 1];
  const mid = (prev.x + p.x) / 2;
  return `${d} C ${mid} ${prev.y}, ${mid} ${p.y}, ${p.x} ${p.y}`;
}, "");












// for horizontal lines 
// export const ROUTE_VIEWBOX = { width: 1000, height: 1700 };

// // Ek vertical S-curve. Har "S" ek naya mod banata hai.
// export const ROUTE_PATH =
//   "M 500 20 " +
//   "C 500 120, 300 120, 300 220 " +
//   "S 700 320, 700 420 " +
//   "S 300 520, 300 620 " +
//   "S 700 720, 700 820 " +
//   "S 300 920, 300 1020 " +
//   "S 700 1120, 700 1220 " +
//   "S 300 1320, 300 1420 " +
//   "S 700 1520, 700 1620";

// // Har port ek segment ka end point hai, to ye points path ke upar hi hain.
// export const PORT_POINTS = [
//   { x: 300, y: 220 },
//   { x: 700, y: 420 },
//   { x: 300, y: 620 },
//   { x: 700, y: 820 },
//   { x: 300, y: 1020 },
//   { x: 700, y: 1220 },
//   { x: 300, y: 1420 },
//   { x: 700, y: 1620 },
// ];