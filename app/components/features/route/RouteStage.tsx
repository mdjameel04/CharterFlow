
"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { features } from "@/app/data/data";
import { PORT_POINTS, TRACK } from "@/app/data/route";
import RouteSvg from "./RouteSvg";
import Port from "./Port";

const SCROLL_FACTOR = 1.3; // >1 = slow (zyada scroll lagega), <1 = fast

const initialVars = {
  "--port-stage": "rgb(13, 148, 136)",
  "--port-title": "rgb(15, 23, 42)",
  "--port-desc": "rgb(71, 85, 105)",
} as CSSProperties;

export default function RouteStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = stageRef.current!;
      const track = trackRef.current!;
      const section = document.getElementById("features");
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          // track kitna khiskega = track ki chaudai - screen ki chaudai
          const distance = () => Math.max(0, TRACK.width - stage.clientWidth);
          const end = () => `+=${distance() * SCROLL_FACTOR}`;

          gsap.set("#route-progress", { drawSVG: "0%" });

          // 1) Pin + track ko left ki taraf khiskana (ye "container animation" hai)
          const scrollTween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: "top top",
              end,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // 2) Boat + route draw + background + text colours (same scroll range)
          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: stage,
                start: "top top",
                end,
                scrub: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                  if (percentRef.current)
                    percentRef.current.textContent = `${Math.round(self.progress * 100)}%`;
                  if (fillRef.current)
                    fillRef.current.style.width = `${self.progress * 100}%`;
                },
              },
            })
            .to("#route-progress", { drawSVG: "100%" }, 0)
            .to(
              "#boat",
              {
                motionPath: {
                  path: "#route-path",
                  align: "#route-path",
                  alignOrigin: [0.5, 0.5],
                  autoRotate: true, // wave ke slope ke saath halka tilt; pasand na aaye to hata do
                },
                immediateRender: true,
              },
              0
            )
            .to(section, { backgroundColor: "#042f2e" }, 0)
            .to(
              stage,
              {
                "--port-stage": "rgb(94, 234, 212)",
                "--port-title": "rgb(240, 253, 250)",
                "--port-desc": "rgb(153, 246, 228)",
              },
              0
            );

          // 3) Port reveal: track ke khiskne ke hisaab se (containerAnimation)
          gsap.utils.toArray<HTMLElement>(".port").forEach((port) => {
            const dot = port.querySelector(".port-dot");
            const ripple = port.querySelector(".port-ripple");
            const content = port.querySelector(".port-content");

            gsap.set(dot, { scale: 0 });
            gsap.set(ripple, { autoAlpha: 0 });
            gsap.set(content, { autoAlpha: 0, y: 24 });

            const reveal = gsap
              .timeline({ paused: true })
              .to(dot, { scale: 1, duration: 0.5, ease: "back.out(2)" })
              .fromTo(
                ripple,
                { scale: 1, autoAlpha: 0.5 },
                { scale: 2.4, autoAlpha: 0, duration: 0.9, ease: "power2.out" },
                0.1
              )
              .to(
                content,
                { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
                0.15
              );

            ScrollTrigger.create({
              trigger: port,
              containerAnimation: scrollTween,
              start: "left 80%", // port screen ke 80% width pe aate hi
              onEnter: () => reveal.play(),
              onLeaveBack: () => reveal.reverse(),
            });
          });

          document.fonts?.ready.then(() => ScrollTrigger.refresh());
        }
      );

      // Reduced motion: pin nahi, track pe normal horizontal scrollbar
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: reduce)",
        () => {
          gsap.set(stage, { overflowX: "auto" });
          gsap.set("#boat", { autoAlpha: 0 });
        }
      );

      return () => mm.revert();
    },
    { scope: stageRef }
  );

  return (
    <div
      ref={stageRef}
      style={initialVars}
      className="relative hidden h-screen min-h-[760px] items-center overflow-hidden lg:flex"
    >
      <div
        ref={trackRef}
        className="relative shrink-0"
        style={{ width: TRACK.width, height: TRACK.height }}
      >
        <RouteSvg />
        {features.map((feature, index) => (
          <Port
            key={feature.id}
            feature={feature}
            index={index}
            point={PORT_POINTS[index]}
          />
        ))}
      </div>

      {/* Voyage progress bar (track ke saath nahi khiskta) */}
      <div className="absolute bottom-8 left-1/2 flex w-72 -translate-x-1/2 items-center gap-3 text-xs text-[color:var(--port-desc)]">
        <span className="uppercase tracking-widest">Voyage</span>
        <div className="relative h-1 flex-1 rounded-full bg-teal-500/20">
          <div
            ref={fillRef}
            className="absolute left-0 top-0 h-full rounded-full bg-teal-500"
            style={{ width: 0 }}
          />
        </div>
        <span ref={percentRef} className="w-8 text-right tabular-nums">
          0%
        </span>
      </div>
    </div>
  );
}
















// "use client";

// import { useRef } from "react";
// import type { CSSProperties } from "react";
// import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
// import { features } from "@/app/data/data";
// import { PORT_POINTS, ROUTE_VIEWBOX } from "@/app/data/route";
// import RouteSvg from "./RouteSvg";
// import Port from "./Port";

// // Text ke starting colours (light background). GSAP inhe scroll pe badlega.
// const initialVars = {
//   "--port-stage": "rgb(13, 148, 136)", // teal-600
//   "--port-title": "rgb(15, 23, 42)", // slate-900
//   "--port-desc": "rgb(71, 85, 105)", // slate-600
// } as CSSProperties;

// export default function RouteStage() {
//   const stageRef = useRef<HTMLDivElement>(null);
//   const meterRef = useRef<HTMLDivElement>(null);
//   const depthRef = useRef<HTMLSpanElement>(null);
//   const fillRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       const stage = stageRef.current!;
//       const section = document.getElementById("features"); // scope ke bahar, isliye getElementById
//       const mm = gsap.matchMedia();

//       // ---------- Full animation ----------
//       mm.add(
//         "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
//         () => {
//           gsap.set("#route-progress", { drawSVG: "0%" });
//           gsap.set(meterRef.current, { autoAlpha: 0 });

//           // 1) Master timeline: route draw + boat + background + text colours
//           gsap
//             .timeline({
//               defaults: { ease: "none" },
//               scrollTrigger: {
//                 trigger: stage,
//                 start: "top center",
//                 end: "bottom center",
//                 scrub: 1,
//               },
//             })
//             .to("#route-progress", { drawSVG: "100%" }, 0)
//             .to(
//               "#boat",
//               {
//                 motionPath: {
//                   path: "#route-path",
//                   align: "#route-path",
//                   alignOrigin: [0.5, 0.5],
//                 },
//                 immediateRender: true,
//               },
//               0
//             )
//             // Step 8: background light aqua -> deep teal
//             .to(section, { backgroundColor: "#042f2e" }, 0)
//             .to(
//               stage,
//               {
//                 "--port-stage": "rgb(94, 234, 212)", // teal-300
//                 "--port-title": "rgb(240, 253, 250)", // teal-50
//                 "--port-desc": "rgb(153, 246, 228)", // teal-200
//               },
//               0
//             );

//           // 2) Step 6: har port ka reveal
//           gsap.utils.toArray<HTMLElement>(".port").forEach((port) => {
//             const dot = port.querySelector(".port-dot");
//             const ripple = port.querySelector(".port-ripple");
//             const content = port.querySelector(".port-content");

//             gsap.set(dot, { scale: 0 });
//             gsap.set(ripple, { autoAlpha: 0 });
//             gsap.set(content, { autoAlpha: 0, y: 24 });

//             const reveal = gsap
//               .timeline({ paused: true })
//               .to(dot, { scale: 1, duration: 0.5, ease: "back.out(2)" })
//               .fromTo(
//                 ripple,
//                 { scale: 1, autoAlpha: 0.5 },
//                 { scale: 2.4, autoAlpha: 0, duration: 0.9, ease: "power2.out" },
//                 0.1
//               )
//               .to(
//                 content,
//                 { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
//                 0.15
//               );

//             ScrollTrigger.create({
//               trigger: port,
//               start: "top 55%", // thoda jaldi/der chahiye to ye number badlo
//               onEnter: () => reveal.play(),
//               onLeaveBack: () => reveal.reverse(),
//             });
//           });

//           // 3) Step 8: depth meter (fixed pill, sirf is section ke dauran dikhta hai)
//           ScrollTrigger.create({
//             trigger: stage,
//             start: "top center",
//             end: "bottom center",
//             onToggle: (self) =>
//               gsap.to(meterRef.current, {
//                 autoAlpha: self.isActive ? 1 : 0,
//                 duration: 0.3,
//               }),
//             onUpdate: (self) => {
//               if (depthRef.current)
//                 depthRef.current.textContent = `${Math.round(self.progress * 40)}m`;
//               if (fillRef.current)
//                 fillRef.current.style.height = `${self.progress * 100}%`;
//             },
//           });

//           // fonts load hone ke baad positions dobara calculate
//           document.fonts?.ready.then(() => ScrollTrigger.refresh());
//         }
//       );

//       // ---------- Step 10: reduced motion ----------
//       // Sab kuch static dikhega, bas boat chhupa denge (wo (0,0) pe atak jati)
//       mm.add(
//         "(min-width: 1024px) and (prefers-reduced-motion: reduce)",
//         () => {
//           gsap.set("#boat", { autoAlpha: 0 });
//         }
//       );

//       return () => mm.revert();
//     },
//     { scope: stageRef }
//   );

//   return (
//     <>
//       <div
//         ref={stageRef}
//         style={{
//           ...initialVars,
//           aspectRatio: `${ROUTE_VIEWBOX.width} / ${ROUTE_VIEWBOX.height}`,
//         }}
//         className="relative mx-auto mt-20 hidden w-full max-w-5xl lg:block"
//       >
//         <RouteSvg />
//         {features.map((feature, index) => (
//           <Port
//             key={feature.id}
//             feature={feature}
//             index={index}
//             point={PORT_POINTS[index]}
//           />
//         ))}
//       </div>

//       {/* Depth meter */}
//       <div
//         ref={meterRef}
//         className="fixed left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-teal-950/80 px-3 py-4 text-white backdrop-blur xl:flex"
//       >
//         <span className="text-[10px] uppercase tracking-widest text-teal-200">
//           Depth
//         </span>
//         <div className="relative h-32 w-1 rounded-full bg-white/20">
//           <div
//             ref={fillRef}
//             className="absolute left-0 top-0 w-full rounded-full bg-teal-300"
//             style={{ height: 0 }}
//           />
//         </div>
//         <span ref={depthRef} className="text-sm font-semibold tabular-nums">
//           0m
//         </span>
//       </div>
//     </>
//   );
// }