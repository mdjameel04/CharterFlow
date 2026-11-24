import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CreditCard,
  FileSignature,
  Globe,
  MessageSquareText,
  PhoneCall,
  Ship,
  Users,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const TOP_ROW: Feature[] = [
  {
    icon: Globe,
    title: "Custom Charter Website",
    description: "A professional, branded site for your charter business.",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking & Scheduling",
    description: "Real-time availability, trip slots, and confirmations.",
  },
  {
    icon: Ship,
    title: "Fleet & Captain Management",
    description: "Manage boats, captains, crew, and assignments.",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments & Deposits",
    description: "Take secure payments, deposits, and refunds.",
  },
];

const BOTTOM_ROW: Feature[] = [
  {
    icon: MessageSquareText,
    title: "AI Chat Assistant",
    description: "Answer questions, capture leads, and book trips 24/7.",
  },
 
  {
    icon: FileSignature,
    title: "Digital Waivers",
    description: "Collect signed liability waivers before every trip.",
  },
  {
    icon: Users,
    title: "Customer CRM",
    description: "Keep customer details, booking history, and notes.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track bookings, revenue, and business performance.",
  },
];

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/80 bg-white/80 p-5 shadow-[0_8px_28px_rgba(11,35,56,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#BFE6E0] hover:shadow-[0_14px_36px_rgba(7,155,145,0.14)]">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4F5F2] text-[#079B91] transition-colors group-hover:bg-[#079B91] group-hover:text-white">
        <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
      </span>

      <h3 className="mt-4 font-sans text-[15px] font-bold leading-snug tracking-tight text-[#0B2338]">
        {title}
      </h3>

      <p className="mt-1.5 text-[13px] leading-relaxed text-[#486576]">
        {description}
      </p>
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-gradient-to-b from-[#EAF6F8] to-[#F7FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1560px] gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12 lg:px-12">
        {/* LEFT: HEADING */}
        <div className="max-w-[420px]">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#079B91] sm:text-xs">
              Powerful Features
            </p>
          </div>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B2338]">
            Everything You Need to Run a Modern{" "}
            <span className="italic text-[#0E8A8A]">Fishing Charter.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.65] text-[#486576]">
            A complete platform to take bookings, manage operations, and grow
            your charter business.
          </p>

          <Link
            href="#platform"
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#079B91] to-[#00B88A] px-6 py-3 text-sm font-bold text-white shadow-[0_7px_20px_rgba(7,155,145,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(7,155,145,0.34)]"
          >
            Explore All Features
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* RIGHT: FEATURE GRID (4 + 5) */}
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {TOP_ROW.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {BOTTOM_ROW.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}