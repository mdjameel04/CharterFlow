
"use client";

import { useState } from "react";
import {
  Anchor,
  ArrowRight,
  Check,
  Crown,
  Layers,
  Ship,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Plan = {
  name: string;
  icon: LucideIcon;
  tag: string;
  monthly: number;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    icon: Anchor,
    tag: "For solo captains.",
    monthly: 79,
    features: [
      "Online booking system",
      "Customer management",
      "Trip scheduling",
      "Email & SMS notifications",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    icon: Crown,
    tag: "Everything you need to grow.",
    monthly: 149,
    popular: true,
    features: [
      "All Starter features",
      "AI chat & call assistant",
      "Digital waivers & reports",
      "Business analytics & exports",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    icon: Layers,
    tag: "For multi-boat operations.",
    monthly: 249,
    features: [
      "All Growth features",
      "Fleet & captain management",
      "Custom branding",
      "Marketing & automations",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Fleet",
    icon: Ship,
    tag: "For larger charter businesses.",
    monthly: 349,
    features: [
      "All Pro features",
      "Multi-location & fleet management",
      "Advanced analytics & forecasting",
      "Priority support & onboarding",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const getPrice = (monthly: number) =>
    yearly ? Math.round(monthly * 0.8) : monthly;

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#f5f9fb] px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 size-[450px] rounded-full bg-[#d9f1ee]/50 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-[#e0f0f7]/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b9ded9] bg-white/80 px-4 py-2">
            <Sparkles size={15} className="text-[#079b91]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#087e78]">
              Simple & Transparent Pricing
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#0b2338] sm:text-5xl lg:text-6xl">
            Plans that move your
            <span className="block italic text-[#078f83]">
              business forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#647887] sm:text-base">
            Everything you need to manage your fishing charter business.
            Start small, grow confidently, and scale without limits.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div
              role="group"
              aria-label="Billing period"
              className="inline-flex rounded-full border border-[#dce9ed] bg-white p-1.5 shadow-sm"
            >
              <button
                type="button"
                aria-pressed={!yearly}
                onClick={() => setYearly(false)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  !yearly
                    ? "bg-[#0b716b] text-white shadow-md"
                    : "text-[#647887] hover:text-[#0b2338]"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                aria-pressed={yearly}
                onClick={() => setYearly(true)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  yearly
                    ? "bg-[#0b716b] text-white shadow-md"
                    : "text-[#647887] hover:text-[#0b2338]"
                }`}
              >
                Yearly
              </button>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e1f5ec] px-3.5 py-2 text-[11px] font-bold text-[#078052]">
              <Sparkles size={13} />
              Save 20%
            </span>
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border border-[#0b716b] bg-gradient-to-b from-[#124e50] via-[#0d4146] to-[#092f3b] text-white shadow-[0_25px_60px_rgba(9,60,66,0.2)] xl:-translate-y-3 xl:hover:-translate-y-5"
                    : "border border-white bg-white/90 text-[#0b2338] shadow-[0_15px_45px_rgba(11,35,56,0.06)] backdrop-blur-xl hover:border-[#b9ded9] hover:shadow-[0_25px_55px_rgba(11,35,56,0.10)]"
                }`}
              >
                {/* Popular label */}
                {plan.popular && (
                  <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-2xl bg-[#e9bd60] px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#49350b]">
                    <Crown size={12} />
                    Most Popular
                  </div>
                )}

                {/* PLAN HEADER */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-2xl ${
                      plan.popular
                        ? "bg-white/10 text-[#e9bd60]"
                        : "bg-[#e3f4f1] text-[#078f83]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-0.5 text-[11px] ${
                        plan.popular
                          ? "text-white/60"
                          : "text-[#81929c]"
                      }`}
                    >
                      {plan.tag}
                    </p>
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-8 border-b border-current/10 pb-7">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold tracking-[-0.055em]">
                      ${getPrice(plan.monthly)}
                    </span>

                    <span
                      className={`text-xs font-medium ${
                        plan.popular
                          ? "text-white/60"
                          : "text-[#81929c]"
                      }`}
                    >
                      / month
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-[11px] ${
                      plan.popular
                        ? "text-white/55"
                        : "text-[#81929c]"
                    }`}
                  >
                    {yearly
                      ? `$${getPrice(plan.monthly) * 12} billed annually`
                      : "Billed monthly · Cancel anytime"}
                  </p>
                </div>

                {/* FEATURES */}
                <div className="mt-7 flex-1">
                  <p
                    className={`mb-5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                      plan.popular
                        ? "text-white/50"
                        : "text-[#81929c]"
                    }`}
                  >
                    What's included
                  </p>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[12px] leading-relaxed"
                      >
                        <span
                          className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full ${
                            plan.popular
                              ? "bg-[#25bd91]/15 text-[#55e0b2]"
                              : "bg-[#e3f4f1] text-[#078f83]"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span
                          className={
                            plan.popular
                              ? "text-white/85"
                              : "text-[#405b6c]"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={
                    plan.name === "Fleet"
                      ? "#contact"
                      : "/signup"
                  }
                  className={`mt-9 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#2bc99a] to-[#0fae87] text-white shadow-lg shadow-black/15 hover:brightness-110"
                      : "border border-[#0b716b]/25 bg-[#f4faf9] text-[#0b716b] hover:border-[#0b716b] hover:bg-[#e3f4f1]"
                  }`}
                >
                  {plan.cta}

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <p className="mt-10 text-center text-xs leading-relaxed text-[#81929c]">
          Need a custom solution for your fleet?{" "}
          <a
            href="#contact"
            className="font-bold text-[#087e78] underline-offset-4 hover:underline"
          >
            Talk to our team
          </a>
        </p>
      </div>
    </section>
  );
}
