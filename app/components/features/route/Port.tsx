import type { Feature } from "@/app/data/data";

import { MOCKUPS } from "../mockups/Mockups";
import { TRACK } from "@/app/data/routeConfig";

type PortProps = {
  feature: Feature;
  index: number;
  point: { x: number; y: number };
};

export default function Port({ feature, index, point }: PortProps) {
  const Icon = feature.icon;
  const Mockup = MOCKUPS[feature.mockup];

  const above = point.y < TRACK.height / 2;

  return (
    <div className="port absolute" style={{ left: point.x, top: point.y }}>
      <span className="port-ripple absolute -left-6 -top-6 h-12 w-12 rounded-full bg-teal-400" />

      <span className="port-dot absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg ring-8 ring-teal-100">
        <Icon size={22} />
      </span>

      <div
        className={`absolute -left-[120px] w-60 text-center ${
          above ? "bottom-12" : "top-12"
        }`}
      >
        <div className="port-content relative">
          <span
            className={`absolute left-1/2 h-6 w-px -translate-x-1/2 bg-teal-400/60 ${
              above ? "top-full" : "bottom-full"
            }`}
          />

          <div className={above ? "flex flex-col-reverse" : "flex flex-col"}>
            {/* Text card: fixed colours, background se independent */}
            <div className="rounded-2xl bg-white/95 p-3 shadow-lg shadow-teal-950/10 ring-1 ring-teal-100 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                {index + 1}. {feature.stage}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
            <Mockup />
          </div>
        </div>
      </div>
    </div>
  );
}














// import type { Feature } from "@/app/data/data";
// import { ROUTE_VIEWBOX } from "@/app/data/route";
// import { MOCKUPS } from "../mockups/Mockups";

// type PortProps = {
//   feature: Feature;
//   index: number;
//   point: { x: number; y: number };
// };

// export default function Port({ feature, index, point }: PortProps) {
//   const Icon = feature.icon;
//   const Mockup = MOCKUPS[feature.mockup];

//   // left side ka dot -> content bahar (left), right side ka dot -> content bahar (right)
//   const onLeft = point.x < ROUTE_VIEWBOX.width / 2;

//   return (
//     <div
//       className="port absolute"
//       style={{
//         left: `${(point.x / ROUTE_VIEWBOX.width) * 100}%`,
//         top: `${(point.y / ROUTE_VIEWBOX.height) * 100}%`,
//       }}
//     >
//       {/* ripple: dot ke peeche phailne wala ring */}
//       <span className="port-ripple absolute -left-6 -top-6 h-12 w-12 rounded-full bg-teal-400" />

//       <span className="port-dot absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg ring-8 ring-teal-100">
//         <Icon size={22} />
//       </span>

//       {/* outer = position (CSS transform), inner = GSAP animation. Dono alag rakhe taaki transforms na takraayein */}
//       <div
//         className={`absolute top-0 w-60 -translate-y-1/2 ${
//           onLeft ? "right-10 text-right" : "left-10 text-left"
//         }`}
//       >
//         <div className="port-content">
//           <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--port-stage)]">
//             {index + 1}. {feature.stage}
//           </p>
//           <h3 className="mt-1 text-lg font-semibold text-[color:var(--port-title)]">
//             {feature.title}
//           </h3>
//           <p className="mt-1 text-sm text-[color:var(--port-desc)]">
//             {feature.description}
//           </p>
//           <Mockup />
//         </div>
//       </div>
//     </div>
//   );
// }