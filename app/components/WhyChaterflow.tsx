import { useId } from "react";
import { BarChart3, HandHeart, Layers, Zap } from "lucide-react";
import { Caveat } from "next/font/google";

// Script font for "Why CharterFlow?"
const script = Caveat({ subsets: ["latin"], weight: ["600", "700"] });

/*
  Image: save your banner as /public/why-charterflow-bg.webp (or .png and
  change the path below). It's a wide strip with the fisherman on the left
  and misty sky on the right, so it works as the full section background.
*/
const BG = "/why-charterflow-bg.png";

const benefits = [
  {
    icon: BarChart3,
    title: "More Direct Bookings",
    desc: "Own your customers and keep more revenue.",
  },
  {
    icon: Zap,
    title: "Less Admin Work",
    desc: "Automate repetitive tasks and stay organized.",
  },
  {
    icon: HandHeart,
    title: "Smoother Guest Experience",
    desc: "Easy booking, clear communication, and reminders.",
  },
  {
    icon: Layers,
    title: "Built for Growth",
    desc: "From solo captains to multi-boat operations.",
  },
];

function Swoosh({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 200 18"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1">
          <stop offset="0" stopColor="#0fa296" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#0b8f86" />
          <stop offset="1" stopColor="#0b716b" />
        </linearGradient>
      </defs>
      <path
        d="M3 13 C 40 4, 100 2, 197 8"
        stroke={`url(#${id})`}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyCharterFlow() {
  return (
    <section id="why" className="relative isolate overflow-hidden bg-[#eef4f7]">
      {/* Desktop background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-cover bg-left bg-no-repeat lg:block"
        style={{ backgroundImage: `url('${BG}')` }}
      />

      {/* Mobile banner image */}
      <div
        aria-hidden="true"
        className="h-40 w-full bg-cover bg-left bg-no-repeat sm:h-52 lg:hidden"
        style={{ backgroundImage: `url('${BG}')` }}
      />

      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-8 sm:px-8 lg:min-h-[260px] lg:grid-cols-[27%_17%_28%_28%] lg:gap-0 lg:px-0 lg:py-10">
        {/* Col 1: spacer so the fisherman in the image stays visible */}
        <div className="hidden lg:block" />

        {/* Col 2: script title */}
        <div className="lg:pl-2">
          <p
            className={`${script.className} -rotate-6 text-[#0b2338] lg:text-left`}
          >
            <span className="block text-4xl leading-none sm:text-5xl">Why</span>
            <span className="-mt-1 block text-5xl leading-none sm:text-6xl">
              CharterFlow?
            </span>
          </p>
          <Swoosh className="-mt-1 h-3 w-36 -rotate-3 sm:w-44" />
        </div>

        {/* Col 3: heading */}
        <div className="lg:pl-6 lg:pr-4">
          <h2 className="text-[26px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338] sm:text-[30px]">
            More Bookings.
            <br />
            Less Work.
            <br />
            A Bigger Charter Business.
          </h2>
          <Swoosh className="mt-1 h-3 w-48 sm:w-60" />
        </div>

        {/* Col 4: benefits */}
        <ul className="space-y-3 border-t border-[#0b2338]/20 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pr-8 lg:pt-0">
          {benefits.map((b) => (
            <li key={b.title} className="flex items-start gap-3">
              <b.icon
                className="mt-0.5 size-5 shrink-0 text-[#12a07a]"
                strokeWidth={1.8}
              />
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-[#0b2338]">{b.title}</p>
                <p className="text-[11.5px] text-[#4a6272]">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}