"use client";

// components/platform/DeviceMockup.tsx
//
// Puts the laptop + phone on ONE fixed-size "stage" and scales the whole stage
// to fit its container. Everything inside (LaptopFrame, PhoneFrame, ...) is
// designed at these exact pixel sizes, so tiny text never breaks.
//
//   Desktop (>=1024px): laptop + phone overlapping
//   Tablet / mobile   : laptop only, phone hidden

import { useEffect, useRef, useState } from "react";

import LaptopFrame from "./laptop/LaptopFrame";
import DashboardScreen from "./laptop/DashboardScreen";
import PhoneFrame from "./phone/PhoneFrame";
import PhoneScreen from "./phone/PhoneScreen";

/* ───────── Design sizes (px). Child frames MUST use these exact sizes ───────── */
export const LAPTOP = { w: 720, h: 420 } as const; // LaptopFrame
export const PHONE = { w: 210, h: 400 } as const; //  PhoneFrame
const PHONE_LEFT = 700; // phone overlaps the laptop's right edge by 20px

const STAGE_WIDE = { w: PHONE_LEFT + PHONE.w, h: LAPTOP.h }; // laptop + phone (910 x 420)
const STAGE_NARROW = { w: LAPTOP.w, h: LAPTOP.h }; //             laptop only  (720 x 420)

export default function DeviceMockup({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [wide, setWide] = useState(false); // true when the phone is visible (lg+)
  const [hostWidth, setHostWidth] = useState(0);

  // Track the lg breakpoint (same as Tailwind's `lg`: 1024px)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Track the available width
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setHostWidth(entry.contentRect.width)
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const stage = wide ? STAGE_WIDE : STAGE_NARROW;
  const ready = hostWidth > 0;
  const scale = ready ? Math.min(1, hostWidth / stage.w) : 1;

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`w-full select-none  ${className}`}
    >
      {/* Sizer: reserves the *scaled* space so the page layout is correct */}
      <div
        className={`mx-auto transition-opacity duration-300 lg:mx-0 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ width: stage.w * scale, height: stage.h * scale }}
      >
        {/* Stage: fixed design size, scaled from the top-left corner */}
        <div
          className="relative origin-top-left"
          style={{
            width: stage.w,
            height: stage.h,
            transform: `scale(${scale})`,
          }}
        >
          {/* Laptop */}
          <div
            className="absolute left-0 top-0 drop-shadow-[0_30px_40px_rgba(11,35,56,0.28)]"
            style={{ width: LAPTOP.w, height: LAPTOP.h }}
          >
            <LaptopFrame>
              <DashboardScreen />
            </LaptopFrame>
          </div>

          {/* Phone (desktop only), bottom-aligned, overlapping the laptop */}
          <div
            className="absolute bottom-0 hidden drop-shadow-[0_24px_32px_rgba(11,35,56,0.35)] lg:block"
            style={{ left: PHONE_LEFT, width: PHONE.w, height: PHONE.h }}
          >
            <PhoneFrame>
              <PhoneScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </div>
  );
}