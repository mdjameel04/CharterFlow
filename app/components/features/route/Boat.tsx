import { Ship } from "lucide-react";

// SVG ke andar rehti hai, taaki route ke coordinates mein hi chale
export default function Boat() {
  return (
    <g id="boat">
      <circle r={30} fill="#0d9488" />
      <circle r={30} fill="none" stroke="#99f6e4" strokeWidth={6} strokeOpacity={0.6} />
      <Ship x={-16} y={-16} size={32} color="white" />
    </g>
  );
}