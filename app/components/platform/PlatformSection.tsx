
"use client";

import { ArrowRight, Check } from "lucide-react";
import DeviceMockup from "./DeviceMockup";
import { checklist, platformCopy } from "./data";
import Image from "next/image";

export default function PlatformSection() {
  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden bg-[#f5f9fb]"
    >
      {/* Background scene */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/platform-bg.png"
          alt="Coastal ocean and lighthouse scenery"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Soft background overlay */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-16 bg-gradient-to-b from-[#f5f9fb] to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-[#f5f9fb] to-transparent" />

      {/* Mobile / Tablet background fade */}
      <div className="pointer-events-none absolute inset-x-0 top-[40%] z-0 hidden h-[20%] bg-gradient-to-b from-transparent to-[#f5f9fb] lg:block" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 select-text sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-6 lg:py-20">

        {/* Device Mockup */}
        <div className="relative z-10 w-full min-w-0">
          <DeviceMockup />
        </div>

        {/* Platform Content */}
        <div className="relative z-10 max-w-md lg:max-w-[420px] lg:justify-self-start lg:pr-6">

          {/* Label */}
          <div className="flex items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
              {platformCopy.label}
            </p>

            <span className="h-px w-12 bg-[#0f766e]/40" />
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338] sm:text-[34px]">
            A Clear View of Your
            <br />
            Charter Business.
          </h2>

          {/* Description */}
          <p className="mt-4 text-[13px] leading-relaxed text-[#35516a] sm:text-sm">
            {platformCopy.description}
          </p>

          {/* Checklist */}
          <ul className="mt-5 space-y-2.5">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[13px] font-medium text-[#0b2338]"
              >
                <Check
                  className="size-4 shrink-0 text-[#12a07a]"
                  strokeWidth={3}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={platformCopy.cta.href}
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#0b2338]/60 bg-white/70 px-5 py-2.5 text-[13px] font-bold text-[#0b2338] backdrop-blur-md transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b]"
          >
            {platformCopy.cta.label}

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
