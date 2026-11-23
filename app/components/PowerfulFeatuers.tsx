import Image from "next/image";
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
  image: string; // path inside /public
};

const FEATURES: Feature[] = [
  {
    icon: Globe,
    title: "Custom Charter Website",
    description: "A professional, branded site for your charter business.",
    image: "/features/website.webp",
  },
  {
    icon: CalendarCheck,
    title: "Online Booking & Scheduling",
    description: "Real-time availability, trip slots, and confirmations.",
    image: "/features/booking.webp",
  },
  {
    icon: Ship,
    title: "Fleet & Captain Management",
    description: "Manage boats, captains, crew, and assignments.",
    image: "/features/fleet.webp",
  },
  {
    icon: CreditCard,
    title: "Stripe Payments & Deposits",
    description: "Take secure payments, deposits, and refunds.",
    image: "/features/payments.webp",
  },
  {
    icon: MessageSquareText,
    title: "AI Chat Assistant",
    description: "Answer questions, capture leads, and book trips 24/7.",
    image: "/features/chat.webp",
  },
  {
    icon: PhoneCall,
    title: "AI Call Assistant",
    description:
      "Handle common calls, answer inquiries, and book trips automatically.",
    image: "/features/call.webp",
  },
  {
    icon: FileSignature,
    title: "Digital Waivers",
    description: "Collect signed liability waivers before every trip.",
    image: "/features/waivers.webp",
  },
  {
    icon: Users,
    title: "Customer CRM",
    description: "Keep customer details, booking history, and notes.",
    image: "/features/crm.webp",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track bookings, revenue, and business performance.",
    image: "/features/analytics.webp",
  },
];

function FeatureCard({ icon: Icon, title, description, image }: Feature) {
  return (
    <article className="group relative min-h-[170px] overflow-hidden rounded-2xl border border-white/80 bg-white/85 shadow-[0_8px_28px_rgba(11,35,56,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#BFE6E0] hover:shadow-[0_14px_36px_rgba(7,155,145,0.14)]">
      {/* IMAGE: right side, fades into the card from the left */}
      <div
        aria-hidden="true"
        className=" absolute inset-y-0 right-0 w-[48%] opacity-60 transition-transform duration-500 [mask-image:linear-gradient(to_right,transparent_0%,black_55%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_55%)] group-hover:scale-105 sm:opacity-100"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 240px, 45vw"
          className="object-contain object-right-bottom p-2"
        />
      </div>

      {/* TEXT: kept to ~62% width so it never runs over the image */}
      <div className="relative z-10 flex h-full max-w-[62%] flex-col p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4F5F2] text-[#079B91] transition-colors group-hover:bg-[#079B91] group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>

        <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-[#0B2338]">
          {title}
        </h3>

        <p className="mt-1.5 text-[13px] leading-relaxed text-[#486576]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 bg-gradient-to-b from-[#EAF6F8] to-[#F7FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1560px] px-5 sm:px-8 lg:px-12">
        {/* HEADER: title left, link right */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#079B91] sm:text-xs">
              Powerful Features
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,3.2vw,3rem)] font-bold leading-[1.08] tracking-[-0.04em] text-[#0B2338]">
              Everything You Need to Run a Modern{" "}
              <span className="italic text-[#0E8A8A]">Fishing Charter.</span>
            </h2>

            <p className="mt-4 text-[15px] leading-[1.65] text-[#486576]">
              A complete platform to take bookings, manage operations, and grow
              your charter business.
            </p>
          </div>

          <Link
            href="#platform"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gradient-to-r from-[#079B91] to-[#00B88A] px-6 py-3 text-sm font-bold text-white shadow-[0_7px_20px_rgba(7,155,145,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(7,155,145,0.34)] sm:self-auto"
          >
            Explore All Features
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* GRID: 3 x 3 */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}