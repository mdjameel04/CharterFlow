import { ROUTE_PATH, TRACK } from "@/app/data/routeConfig";
import Boat from "./Boat";

export default function RouteSvg() {
  return (
    <svg
      viewBox={`0 0 ${TRACK.width} ${TRACK.height}`}
      width={TRACK.width}
      height={TRACK.height}
      className="absolute left-0 top-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        id="route-path"
        d={ROUTE_PATH}
        stroke="#14b8a6"
        strokeOpacity={0.35}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="4 14"
      />
      <path
        id="route-progress"
        d={ROUTE_PATH}
        stroke="#0d9488"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <Boat />
    </svg>
  );
}






// import { ROUTE_PATH, ROUTE_VIEWBOX } from "@/app/data/route";
// import Boat from "./Boat";

// export default function RouteSvg() {
//   return (
//     <svg
//       viewBox={`0 0 ${ROUTE_VIEWBOX.width} ${ROUTE_VIEWBOX.height}`}
//       className="absolute inset-0 h-full w-full"
//       fill="none"
//       aria-hidden="true"
//     >
//       {/* base: dashed, hamesha dikhta hai */}
//       <path
//         id="route-path"
//         d={ROUTE_PATH}
//         stroke="#14b8a6"
//         strokeOpacity={0.35}
//         strokeWidth={4}
//         strokeLinecap="round"
//         strokeDasharray="4 14"
//       />

//       {/* progress: solid, scroll ke saath draw hota hai */}
//       <path
//         id="route-progress"
//         d={ROUTE_PATH}
//         stroke="#0d9488"
//         strokeWidth={5}
//         strokeLinecap="round"
//       />

//       <Boat />
//     </svg>
//   );
// }   