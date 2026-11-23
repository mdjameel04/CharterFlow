"use client";

import { Fragment, useRef } from "react";
import {
  CalendarCheck,
  Monitor,
  Rocket,
  Ship,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tile: string; // icon tile gradient + glow
  ring: string; // pulse ring color
  numColor: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: UserRound,
    title: "Create Your Account",
    desc: "Sign up and set up your charter business.",
    tile: "from-sky-400 to-sky-600 shadow-sky-500/30",
    ring: "border-sky-400/60",
    numColor: "text-sky-600",
  },
  {
    num: "02",
    icon: Ship,
    title: "Set Up Your Business",
    desc: "Add trips, boats, prices and photos.",
    tile: "from-violet-400 to-violet-600 shadow-violet-500/30",
    ring: "border-violet-400/60",
    numColor: "text-violet-600",
  },
  {
    num: "03",
    icon: Monitor,
    title: "Publish Your Booking Site",
    desc: "Get a branded site with your trips, pricing, and availability.",
    tile: "from-amber-400 to-orange-500 shadow-amber-500/30",
    ring: "border-amber-400/60",
    numColor: "text-amber-600",
  },
  {
    num: "04",
    icon: CalendarCheck,
    title: "Start Taking Bookings",
    desc: "Go live and manage trips, customers, and payments easily.",
    tile: "from-emerald-400 to-teal-600 shadow-emerald-500/30",
    ring: "border-emerald-400/60",
    numColor: "text-emerald-600",
  },
  {
    num: "05",
    icon: Rocket,
    title: "Grow Your Business",
    desc: "Track bookings and repeat customers as you scale.",
    tile: "from-rose-400 to-pink-600 shadow-rose-500/30",
    ring: "border-rose-400/60",
    numColor: "text-rose-600",
  },
];

export default function HowItWorks() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          desktop: "(min-width: 1024px)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { desktop, reduce } = ctx.conditions as {
            desktop: boolean;
            reduce: boolean;
          };

          // Reduced motion: sab direct dikhao
          if (reduce) {
            gsap.set(
              ".hiw-label, .hiw-line, .hiw-card, .hiw-track, .hiw-track-fill",
              { autoAlpha: 1, x: 0, y: 0, yPercent: 0 },
            );
            gsap.set(".hiw-track-fill", { scale: 1 });
            return;
          }

          const cards = gsap.utils.toArray<HTMLElement>(".hiw-card");
          const icons = gsap.utils.toArray<HTMLElement>(".hiw-icon");
          const rings = gsap.utils.toArray<HTMLElement>(".hiw-ring");
          const nums = gsap.utils.toArray<HTMLElement>(".hiw-num");

          let introDone = false;

          // Intro ke baad icons par pulse loop
          const pulse = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatDelay: 1.6,
          });
          rings.forEach((ring, i) => {
            pulse.fromTo(
              ring,
              { scale: 1, autoAlpha: 0.6 },
              { scale: 1.8, autoAlpha: 0, duration: 1, ease: "power2.out" },
              i * 0.5,
            );
          });

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: root.current,
              start: "top 80%",
              once: true,
            },
            onComplete: () => {
              introDone = true;
              // Hover CSS ke liye leftover transforms hatao
              gsap.set([...cards, ...icons], { clearProps: "transform" });
              pulse.play();
            },
          });

          // Heading: label slide + title masked line reveal
          tl.fromTo(
            ".hiw-label",
            { autoAlpha: 0, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
          ).fromTo(
            ".hiw-line",
            { autoAlpha: 0, yPercent: 100 },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power4.out",
            },
            0.1,
          );

          // Connector line: base fade-in, phir rangeen fill draw hoti hai
          tl.fromTo(
            ".hiw-track",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4 },
            0.4,
          ).fromTo(
            ".hiw-track-fill",
            desktop
              ? { autoAlpha: 1, scaleX: 0, transformOrigin: "left center" }
              : { autoAlpha: 1, scaleY: 0, transformOrigin: "center top" },
            desktop
              ? { scaleX: 1, duration: 2.4, ease: "none" }
              : { scaleY: 1, duration: 2.4, ease: "none" },
            0.75,
          );

          // Step by step choreography (line ke saath sync)
          cards.forEach((card, i) => {
            const at = 0.5 + i * 0.6;
            const counter = { v: 0 };

            tl.fromTo(
              card,
              { autoAlpha: 0, y: 48, scale: 0.94 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.7 },
              at,
            )
              .fromTo(
                icons[i],
                { scale: 0, rotate: -90 },
                { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" },
                at + 0.2,
              )
              .fromTo(
                rings[i],
                { scale: 1, autoAlpha: 0.7 },
                { scale: 1.9, autoAlpha: 0, duration: 0.8, ease: "power2.out" },
                at + 0.5,
              )
              .to(
                counter,
                {
                  v: i + 1,
                  duration: 0.5,
                  snap: { v: 1 },
                  ease: "none",
                  onUpdate: () => {
                    nums[i].textContent = String(counter.v).padStart(2, "0");
                  },
                },
                at + 0.3,
              );
          });

          // Pulse sirf tab chale jab section visible ho
          ScrollTrigger.create({
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => {
              if (!introDone) return;
              if (self.isActive) pulse.play();
              else pulse.pause();
            },
          });
        },
      );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="how-it-works"
      className="bg-[#f5f9fb] px-5 py-14 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <p className="hiw-label text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78] opacity-0">
            How It Works
          </p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338] sm:text-[32px]">
            <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="hiw-line block opacity-0">
                Get Started in 5 Simple Steps.
              </span>
            </span>
          </h2>
        </div>

        {/* Steps */}
        <ol className="relative mx-auto grid max-w-md gap-6 lg:max-w-none lg:grid-cols-5">
          {/* Connector: mobile = vertical (left), desktop = horizontal (icon level) */}
          <span
            aria-hidden="true"
            className="hiw-track pointer-events-none absolute bottom-11 left-[43px] top-11 w-0.5 rounded-full bg-[#d5e4ea] opacity-0 lg:bottom-auto lg:left-[calc((100%-6rem)/10)] lg:right-[calc((100%-6rem)/10)] lg:top-[43px] lg:h-0.5 lg:w-auto"
          />
          <span
            aria-hidden="true"
            className="hiw-track-fill pointer-events-none absolute bottom-11 left-[43px] top-11 w-0.5 rounded-full bg-gradient-to-b from-sky-400 via-amber-400 to-rose-400 opacity-0 lg:bottom-auto lg:left-[calc((100%-6rem)/10)] lg:right-[calc((100%-6rem)/10)] lg:top-[43px] lg:h-0.5 lg:w-auto lg:bg-gradient-to-r"
          />

          {steps.map((s) => (
            <li
              key={s.num}
              className="hiw-card relative z-10 flex items-center gap-4 rounded-[28px] border border-white bg-white p-4 opacity-0 shadow-[0_15px_45px_rgba(11,35,56,0.07)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,35,56,0.13)] lg:flex-col lg:gap-3 lg:text-center"
            >
              <div className="relative shrink-0">
                <span
                  className={`hiw-ring pointer-events-none absolute inset-0 rounded-full border-2 opacity-0 ${s.ring}`}
                />
                <div
                  className={`hiw-icon grid size-14 place-items-center rounded-full bg-gradient-to-br text-white shadow-lg ${s.tile}`}
                >
                  <s.icon size={26} strokeWidth={1.8} />
                </div>
              </div>

              <div className="min-w-0 leading-tight">
                <p
                  className={`hiw-num text-[11px] font-bold tabular-nums ${s.numColor}`}
                >
                  {s.num}
                </p>
                <h3 className="mt-0.5 text-[14px] font-bold text-[#0b2338]">
                  {s.title}
                </h3>
                <p className="mt-1 text-[12px] leading-snug text-[#647887]">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
