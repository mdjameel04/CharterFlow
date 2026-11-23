// components/platform/laptop/UpcomingTrips.tsx

import { upcomingTrips } from "../data";

export default function UpcomingTrips() {
  return (
    <div className="flex min-h-0 flex-col rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
      <p className="text-[10px] font-bold text-[#0b2338]">
        {upcomingTrips.title}
      </p>

      <ul className="mt-2 flex flex-1 flex-col justify-between gap-1.5">
        {upcomingTrips.items.map((t) => (
          <li
            key={t.name}
            className="flex items-center gap-2 rounded-lg bg-[#f3f8f9] p-1.5"
          >
            {/* Gradient is the fallback if the thumbnail file is missing */}
            <span
              className="size-7 shrink-0 rounded-md bg-cover bg-center"
              style={{
                backgroundImage: `url('${t.thumb}'), linear-gradient(135deg, #5cc3d6, #0b716b)`,
              }}
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[9px] font-bold text-[#0b2338]">
                {t.name}
              </p>
              <p className="text-[8px] text-[#647887]">{t.when}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}