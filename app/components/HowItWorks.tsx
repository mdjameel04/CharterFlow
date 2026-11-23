import { Fragment } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Monitor,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: UserRound,
    title: "Create Your Account",
    desc: "Sign up and set up your charter business.",
  },
  {
    num: "02",
    icon: Monitor,
    title: "Publish Your Booking Site",
    desc: "Get a branded site with your trips, pricing, and availability.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Start Taking Bookings",
    desc: "Go live and manage trips, customers, and payments easily.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f9fb] px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[250px_1fr] lg:gap-8">
        {/* Heading */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
            How It Works
          </p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338]">
            Get Started in
            <br />3 Simple Steps.
          </h2>
        </div>

        {/* Steps */}
        <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-3">
          {steps.map((s, i) => (
            <Fragment key={s.num}>
              <li className="flex flex-1 items-center gap-4 rounded-[28px] border border-white bg-white/90 px-4 py-4 shadow-[0_15px_45px_rgba(11,35,56,0.07)] backdrop-blur-xl">
                <div className="grid size-14 shrink-0 place-items-center rounded-full border border-[#b9ded9] bg-gradient-to-b from-white to-[#e3f4f1] text-[#078f83] shadow-sm">
                  <s.icon size={26} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 leading-tight">
                  <p className="text-[11px] font-bold text-[#078f83]">{s.num}</p>
                  <h3 className="mt-0.5 text-[14px] font-bold text-[#0b2338]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-snug text-[#647887]">
                    {s.desc}
                  </p>
                </div>
              </li>

              {i < steps.length - 1 && (
                <li
                  aria-hidden="true"
                  className="flex shrink-0 justify-center text-[#0b2338]"
                >
                  <ArrowRight size={18} className="hidden lg:block" />
                  <ArrowDown size={18} className="lg:hidden" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}