
"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  CirclePlay,
  Ship,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const TRUST_ITEMS = [
  "No Credit Card",
  "Setup in Minutes",
  "U.S. Based Support",
];

const STATS: Stat[] = [
  { icon: Ship, value: "5,773+", label: "Charter Businesses" },
  { icon: BarChart3, value: "+42%", label: "More Direct Bookings" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
  { icon: ShieldCheck, value: "99.9%", label: "Platform Uptime" },
];

const HEADING_LINES = [
  { text: "Run, Book, and", accent: false },
  { text: "Grow Your", accent: false },
  { text: "Charter Business.", accent: true },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-img.webp"
            alt="Fishing charter boat cruising at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center] lg:object-[35%_center]"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-12 px-5 pb-8 pt-28 sm:px-8 lg:pt-32">

        {/* Hero content */}
        <div className="max-w-2xl lg:-translate-x-12 xl:-translate-x-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 sm:text-xs">
              The all-in-one fishing charter platform
            </span>

            <span className="hidden h-px w-10 bg-teal-600 sm:block" />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            {HEADING_LINES.map((line) => (
              <span
                key={line.text}
                className="block overflow-hidden pb-1"
              >
                <span
                  className={
                    line.accent
                      ? "block italic text-teal-700"
                      : "block"
                  }
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-800 sm:text-lg">
            Bookings, payments, customers, and operations — all in one powerful
            platform built for fishing charter operators.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">

            <a
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-800 hover:shadow-xl"
            >
              Start Free Trial

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/65 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              <CirclePlay className="size-5 text-teal-700" />
              Watch 8 Min Bonus
            </a>

          </div>

          {/* Trust indicators */}
          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-800 sm:text-sm"
              >
                <Check
                  className="size-4 text-teal-700"
                  strokeWidth={3}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl shadow-slate-950/15 backdrop-blur-xl sm:p-6 lg:grid-cols-4 lg:gap-0 lg:rounded-full lg:px-10 lg:py-5">

          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 lg:justify-center ${
                i > 0 ? "lg:border-l lg:border-slate-900/10" : ""
              }`}
            >
              <Icon
                className="size-8 shrink-0 text-teal-700 sm:size-9"
                strokeWidth={1.75}
              />

              <div className="min-w-0">
                <p className="text-xl font-extrabold leading-none tracking-tight text-slate-950 sm:text-2xl">
                  {value}
                </p>

                <p className="mt-1 text-[11px] font-medium text-slate-600 sm:text-xs">
                  {label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
