// components/Integrations.jsx — Next.js + Tailwind + lucide-react
// (Server component, no state needed)

import { CalendarDays, Mail } from "lucide-react";

const pill =
  "flex h-12 items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/75 px-5 shadow-[0_6px_20px_-10px_rgba(11,37,64,0.3)] backdrop-blur-lg";

function TwilioMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#f22f46" />
      <circle cx="8.6" cy="8.6" r="2" fill="#fff" />
      <circle cx="15.4" cy="8.6" r="2" fill="#fff" />
      <circle cx="8.6" cy="15.4" r="2" fill="#fff" />
      <circle cx="15.4" cy="15.4" r="2" fill="#fff" />
    </svg>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="px-5 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-5 lg:grid-cols-[250px_1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#0f766e]">
            Integrations
          </p>
          <h2 className="mt-1 text-lg font-extrabold leading-tight text-[#0b1f33]">
            Connect the tools you already use.
          </h2>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <li className={pill}>
            <span className="text-xl font-extrabold tracking-tight text-[#635bff]">stripe</span>
          </li>
          <li className={pill}>
            <Mail className="h-5 w-5 text-[#0f766e]" strokeWidth={1.8} />
            <span className="text-sm font-semibold text-[#0b1f33]">Email</span>
          </li>
          <li className={pill}>
            <CalendarDays className="h-5 w-5 text-[#0f766e]" strokeWidth={1.8} />
            <span className="text-sm font-semibold text-[#0b1f33]">Calendar</span>
          </li>
          <li className={pill}>
            <TwilioMark />
            <span className="text-lg font-extrabold tracking-tight text-[#f22f46]">twilio</span>
          </li>
          <li className={pill}>
            <span className="text-lg font-extrabold text-[#ff4f00]">✳</span>
            <span className="text-lg font-extrabold tracking-tight text-[#ff4f00]">zapier</span>
          </li>
          <li className={pill}>
            <span className="text-sm font-semibold text-[#0b1f33]">&amp; More</span>
          </li>
        </ul>
      </div>
    </section>
  );
}