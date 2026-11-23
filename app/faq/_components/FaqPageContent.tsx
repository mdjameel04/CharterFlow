"use client";

import { useId, useMemo, useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  Search,
  SearchX,
} from "lucide-react";

type FAQ = { category: string; question: string; answer: string };

const categories = [
  "Getting Started",
  "Pricing & Billing",
  "Bookings & Payments",
  "Website & Branding",
  "Fleet & Team",
  "Support",
] as const;

const faqs: FAQ[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "Do I need a website to use CharterFlow?",
    answer:
      "No. CharterFlow gives you a branded charter website with online booking built in. If you already have a website, you can add the booking widget to it instead.",
  },
  {
    category: "Getting Started",
    question: "How long does setup take?",
    answer:
      "Most charter operators are up and running in minutes. Create your account, add your trips and pricing, and publish your booking site.",
  },
  {
    category: "Getting Started",
    question: "Do I need a credit card to start the free trial?",
    answer:
      "No. You can start your free trial without entering a credit card, and choose a plan when you're ready.",
  },
  // Pricing & Billing
  {
    category: "Pricing & Billing",
    question: "Is there a long-term contract?",
    answer:
      "No. Plans are billed monthly or yearly, and you can cancel anytime from your account settings.",
  },
  {
    category: "Pricing & Billing",
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade or downgrade whenever your business needs change, right from your account settings.",
  },
  {
    category: "Pricing & Billing",
    question: "What do I save with yearly billing?",
    answer:
      "Yearly plans save you 20% compared to paying monthly, billed once per year.",
  },
  // Bookings & Payments
  {
    category: "Bookings & Payments",
    question: "Can I accept payments and deposits online?",
    answer:
      "Yes. Guests can pay in full or put down a deposit at checkout through Stripe. Refunds are handled from your dashboard.",
  },
  {
    category: "Bookings & Payments",
    question: "Can guests see real-time availability?",
    answer:
      "Yes. Your booking page shows live availability and trip slots, so guests can book instantly and get a confirmation right away.",
  },
  {
    category: "Bookings & Payments",
    question: "Are digital waivers included?",
    answer:
      "Yes. You can collect signed liability waivers before every trip, on plans that include digital waivers.",
  },
  // Website & Branding
  {
    category: "Website & Branding",
    question: "Can I customize my charter website?",
    answer:
      "Yes. You can personalize your website with your business branding, photos, trip packages, and contact information.",
  },
  {
    category: "Website & Branding",
    question: "Does my website work on mobile?",
    answer:
      "Yes. Your booking site is fully responsive, so guests can browse trips and book from any phone, tablet, or computer.",
  },
  // Fleet & Team
  {
    category: "Fleet & Team",
    question: "Can I manage multiple boats and captains?",
    answer:
      "Yes. CharterFlow supports fleet and captain management on eligible plans, allowing you to manage schedules and availability in one place.",
  },
  {
    category: "Fleet & Team",
    question: "Can I manage my crew's schedule?",
    answer:
      "Yes. Assign captains and crew to trips and keep everyone's schedule organized from your dashboard.",
  },
  // Support
  {
    category: "Support",
    question: "How can I contact support?",
    answer:
      "You can reach our team by live chat, email, or phone. Support hours are Monday to Friday, 9 AM to 6 PM ET.",
  },
  {
    category: "Support",
    question: "Do you help with onboarding?",
    answer:
      "Yes. Our U.S.-based support team can help you get set up, and larger fleets get priority onboarding.",
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

export default function FaqPageContent() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    faqs.forEach((f) => (map[f.category] = (map[f.category] ?? 0) + 1));
    return map;
  }, []);

  const results = useMemo(() =>
      faqs
        .map((f, id) => ({ ...f, id }))
        .filter((f) => {
          if (searching) {
            return (
              f.question.toLowerCase().includes(q) ||
              f.answer.toLowerCase().includes(q)
            );
          }
          return active === "all" || f.category === active;
        }),
    [q, searching, active],
  );

  const selectCategory = (c: string) => {
    setActive(c);
    setQuery("");
    setOpenId(null);
  };

  const heading = searching
    ? `Results for “${query.trim()}”`
    : active === "all"
      ? "All Questions"
      : active;

  return (
    <main className="bg-[#f5f9fb]">
      {/* ───────── HERO ───────── */}
<section className="relative isolate overflow-hidden px-5 pb-10 pt-16 sm:px-8 sm:pt-20">        <div className="pointer-events-none absolute -right-40 -top-20 size-[420px] rounded-full bg-[#d9f1ee]/60 blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 top-10 size-[380px] rounded-full bg-[#e0f0f7]/70 blur-[100px]" />
            <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 -z-10 hidden bg-cover bg-center opacity-60 sm:block"
  style={{ backgroundImage: "url('/faq-hero.png')" }}
/>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f5f9fb]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
            Help Center
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0b2338] sm:text-5xl">
            How can we{" "}
            <span className="font-serif italic text-[#078f83]">help?</span>
          </h1>
          <Swoosh className="mx-auto mt-1 h-3 w-40" />

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#647887]">
            Find answers about bookings, payments, plans, and running your
            charter business with CharterFlow.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-7 max-w-xl">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <Search
              size={18}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#078f83]"
            />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenId(null);
              }}
              placeholder="Search for answers…"
              className="w-full rounded-full border border-white bg-white/90 py-4 pl-12 pr-5 text-sm text-[#0b2338] shadow-[0_15px_45px_rgba(11,35,56,0.08)] backdrop-blur-xl placeholder:text-[#81929c] focus:border-[#0b716b] focus:outline-none focus:ring-4 focus:ring-[#0b716b]/10"
            />
          </div>
        </div>
      </section>

      {/* ───────── BODY ───────── */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Categories */}
          <nav
            aria-label="FAQ categories"
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
              {["all", ...categories].map((c) => {
                const isActive = !searching && active === c;
                const label = c === "all" ? "All Questions" : c;
                const count = c === "all" ? faqs.length : counts[c];

                return (
                  <li key={c} className="shrink-0">
                    <button
                      type="button"
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => selectCategory(c)}
                      className={`flex w-full items-center justify-between gap-3 rounded-full px-4 py-2.5 text-left text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b] ${
                        isActive
                          ? "bg-[#0b716b] text-white shadow-md"
                          : "bg-white/80 text-[#405b6c] hover:bg-[#e3f4f1] lg:bg-transparent"
                      }`}
                    >
                      <span className="whitespace-nowrap">{label}</span>
                      <span
                        className={`text-[11px] ${
                          isActive ? "text-white/75" : "text-[#81929c]"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Accordion */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0b2338]">
              {heading}
            </h2>
            <p className="mt-1 text-xs text-[#81929c]" aria-live="polite">
              {results.length} {results.length === 1 ? "question" : "questions"}
            </p>

            {results.length > 0 ? (
              <div className="mt-5 space-y-3">
                {results.map((f) => {
                  const isOpen = openId === f.id;

                  return (
                    <article
                      key={f.id}
                      className={`overflow-hidden rounded-2xl border backdrop-blur-lg transition-all duration-300 ${
                        isOpen
                          ? "border-[#a8d9d2] bg-white shadow-[0_12px_35px_rgba(11,35,56,0.07)]"
                          : "border-white bg-white/80 shadow-[0_6px_20px_rgba(11,35,56,0.05)] hover:border-[#b9ded9]"
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${f.id}`}
                          onClick={() => setOpenId(isOpen ? null : f.id)}
                          className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0b716b] sm:px-6"
                        >
                          <span className="min-w-0">
                            {searching && (
                              <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-[#078f83]">
                                {f.category}
                              </span>
                            )}
                            <span
                              className={`text-sm font-bold leading-snug sm:text-[15px] ${
                                isOpen ? "text-[#087e78]" : "text-[#0b2338]"
                              }`}
                            >
                              {f.question}
                            </span>
                          </span>

                          <span
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              isOpen
                                ? "bg-[#078f83] text-white"
                                : "bg-[#e9f5f2] text-[#078f83]"
                            }`}
                          >
                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                          </span>
                        </button>
                      </h3>

                      <div
                        id={`faq-panel-${f.id}`}
                        role="region"
                        hidden={!isOpen}
                      >
                        <div className="px-5 pb-5 sm:px-6">
                          <div className="mb-3 h-px bg-[#e6eff1]" />
                          <p className="max-w-2xl text-[13px] leading-7 text-[#647887] sm:text-sm">
                            {f.answer}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-white bg-white/80 px-6 py-12 text-center shadow-sm">
                <SearchX
                  className="mx-auto size-9 text-[#81929c]"
                  strokeWidth={1.5}
                />
                <p className="mt-3 text-sm font-bold text-[#0b2338]">
                  No answers found
                </p>
                <p className="mt-1 text-xs text-[#647887]">
                  Try different keywords, or contact our team below.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#124e50] via-[#0d4146] to-[#092f3b] px-7 py-10 text-white shadow-[0_25px_60px_rgba(9,60,66,0.2)] sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full border border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
                Still need help?
              </h2>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/70">
                Our U.S.-based team is here Mon – Fri, 9 AM – 6 PM ET. Reach out
                and we’ll get you sorted.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2bc99a] to-[#0fae87] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle size={16} />
                Live Chat
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="mailto:support@charterflow.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail size={16} />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
