// components/platform/laptop/StatCards.tsx
// Row of 4 stat cards. Fixed-pixel sizes on purpose: the whole laptop is
// scaled by DeviceMockup, so no responsive (sm:/lg:) classes in here.

import { stats } from "../data";

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-lg border border-[#e6eff1] bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(11,35,56,0.05)]"
        >
          <p className="text-[8px] font-medium leading-none text-[#647887]">
            {s.label}
          </p>
          <p className="mt-1.5 text-[17px] font-extrabold leading-none tracking-tight text-[#0b2338]">
            {s.value}
          </p>
          <p className="mt-1 text-[7.5px] font-bold leading-none text-[#12a07a]">
            {s.change}
          </p>
        </div>
      ))}
    </div>
  );
}