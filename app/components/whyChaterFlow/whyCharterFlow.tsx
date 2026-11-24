"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import WaveMaskDef from "./WaveMaskDef";
import BenefitItem, { BENEFITS } from "./BenefitItem";
gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function WhyCharterFlow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop + motion allowed: pinned scroll timeline
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(".img-wrap", { xPercent: -50, yPercent: -50 });
          gsap.set(".title", { y: 30 });
          gsap.set(".left-text", { x: -60 });
          gsap.set(".benefit", { x: 60 });

          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=250%",
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Stage 1: mask expands to full screen, image dims, title appears
          tl.to(".img-wrap", { width: "160vw", height: "160vh", ease: "none", duration: 4 }, 0)
            .to(".dim", { opacity: 1, duration: 2 }, 2)
            .to(".title", { opacity: 1, y: 0, duration: 1.5 }, 2.5)
            // Stage 2: title leaves, left shade comes in for text
            .to(".title", { opacity: 0, y: -40, duration: 1.5 }, 5.5)
            .to(".shade", { opacity: 1, duration: 1.5 }, 5.5)
            // Stage 3: heading left, benefits right
            .to(".left-text", { opacity: 1, x: 0, duration: 1.5 }, 6.5)
            .to(".benefit", { opacity: 1, x: 0, duration: 1, stagger: 0.4 }, 7)
            .to({}, { duration: 1 }); // short hold at the end
        }
      );

      // Desktop + reduced motion: no animation, show final state
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: reduce)",
        () => {
          gsap.set(".img-wrap", { xPercent: -50, yPercent: -50, width: "160vw", height: "160vh" });
          gsap.set([".dim", ".shade", ".left-text", ".benefit"], { opacity: 1 });
        }
      );
      // Mobile (<768px): normal stacked layout, no pinning
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="why-charterflow"
      className="relative overflow-hidden bg-[#06222b] text-white md:h-screen"
    >
      <WaveMaskDef />

      {/* Image in wave mask */}
      <div
        className="img-wrap relative h-64 w-full md:absolute md:left-1/2 md:top-1/2 md:h-[38vh] md:w-[48vw]"
        style={{ clipPath: "url(#wave-mask)" }}
      >
        <Image
          src="/captain.jpg"
          alt="Charter boat captain looking out at the sea"
          fill
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
        {/* uniform dim */}
        <div className="dim absolute inset-0 hidden bg-black/45 opacity-0 md:block" />
        {/* left-side shade so left text stays readable over the captain image */}
        <div className="shade absolute inset-0 hidden bg-gradient-to-r from-[#04141c]/90 via-[#04141c]/55 to-transparent opacity-0 md:block" />
      </div>

      {/* "Why CharterFlow?" */}
      <div className="title relative px-6 pb-4 pt-10 text-center md:pointer-events-none md:absolute md:inset-0 md:flex md:items-center md:justify-center md:p-0 md:opacity-0">
        <h2 className="font-display text-4xl font-bold sm:text-5xl md:text-7xl">
          Why CharterFlow?
        </h2>
      </div>

      {/* Left heading + right benefits */}
      <div className="content relative grid gap-10 px-6 pb-16 pt-6 md:absolute md:inset-0 md:grid-cols-2 md:items-center md:gap-16 md:px-[8vw] md:py-0">
        <h3 className="left-text font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl md:opacity-0">
          More Bookings.
          <br />
          Less Work.
          <br />
          A Bigger Charter Business.
        </h3>

        <div className="space-y-6 md:border-l md:border-white/20 md:pl-12">
          {BENEFITS.map((b) => (
            <BenefitItem key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}