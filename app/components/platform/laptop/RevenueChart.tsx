// components/platform/laptop/RevenueChart.tsx
// Pure SVG chart, drawn from the points in data.ts (no chart library).

import { useId } from "react";
import { revenueChart } from "../data";

const W = 300;
const H = 150;
const PAD = { l: 26, r: 8, t: 20, b: 18 };
const Y_MAX = 35; // top of the chart in $k

export default function RevenueChart() {
  const id = useId();
  const { points, tooltip, yTicks, title } = revenueChart;

  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;

  const pts = points.map((p, i) => ({
    x: PAD.l + (i * innerW) / (points.length - 1),
    y: PAD.t + (1 - p.value / Y_MAX) * innerH,
    month: p.month,
  }));

  // Smooth curve (Catmull-Rom -> cubic Bezier)
  const line = pts.reduce((acc, p, i, a) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const p0 = a[i - 2] ?? a[i - 1];
    const p1 = a[i - 1];
    const p3 = a[i + 1] ?? p;
    const c1x = p1.x + (p.x - p0.x) / 6;
    const c1y = p1.y + (p.y - p0.y) / 6;
    const c2x = p.x - (p3.x - p1.x) / 6;
    const c2y = p.y - (p3.y - p1.y) / 6;
    return `${acc} C${c1x},${c1y} ${c2x},${c2y} ${p.x},${p.y}`;
  }, "");

  const first = pts[0];
  const last = pts[pts.length - 1];
  const baseY = H - PAD.b;
  const area = `${line} L${last.x},${baseY} L${first.x},${baseY} Z`;

  return (
    <div className="flex min-h-0 flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 select-text">
      <p className="text-[10px] font-bold text-[#0b2338]">{title}</p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-1 min-h-0 w-full flex-1"
        role="presentation"
      >
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2bc99a" stopOpacity="0.45" />
            <stop offset="1" stopColor="#2bc99a" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Grid + y labels */}
        {yTicks.map((t) => {
          const y = PAD.t + (1 - t / Y_MAX) * innerH;
          return (
            <g key={t}>
              <line
                x1={PAD.l}
                x2={W - PAD.r}
                y1={y}
                y2={y}
                stroke="#e3ecef"
                strokeDasharray="3 3"
              />
              <text x={PAD.l - 5} y={y + 2.5} textAnchor="end" fontSize="7" fill="#81929c">
                {t}K
              </text>
            </g>
          );
        })}

        {/* Area + line */}
        <path d={area} fill={`url(#${id}-fill)`} />
        <path
          d={line}
          fill="none"
          stroke="#12a07a"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Month labels */}
        {pts.map((p) => (
          <text
            key={p.month}
            x={p.x}
            y={H - 5}
            textAnchor="middle"
            fontSize="7"
            fill="#81929c"
          >
            {p.month}
          </text>
        ))}

        {/* Tooltip on the last point */}
        <circle cx={last.x} cy={last.y} r="3" fill="#fff" stroke="#12a07a" strokeWidth="2" />
        <g>
          <rect
            x={last.x - 36}
            y={last.y - 22}
            width="42"
            height="15"
            rx="4"
            fill="#0f9b82"
          />
          <text
            x={last.x - 15}
            y={last.y - 12}
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#fff"
          >
            {tooltip}
          </text>
        </g>
      </svg>
    </div>
  );
}