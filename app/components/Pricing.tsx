"use client";

import { useState } from "react";
import {
  Anchor,
  ArrowRight,
  Check,
  Crown,
  Layers,
  Ship,
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
      className="relative overflow-hidden bg-[#f5f9fb] px-5 py-10 sm:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-0 size-[450px] rounded-full bg-[#d9f1ee]/50 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-[#e0f0f7]/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TITLE (first) */}
        <div className="max-w-md">
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
            Pricing
          </p>

          <h2 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-[#0b2338] sm:text-[34px]">
            Simple, Flexible Plans for Your Charter Business.
          </h2>

          <p className="mt-3 text-[13px] leading-relaxed text-[#647887]">
            Choose a plan that fits your operation today, and scale as you grow.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <div
              role="group"
              aria-label="Billing period"
              className="inline-flex rounded-full border border-[#dce9ed] bg-white p-1 shadow-sm"
            >
              <button
                type="button"
                aria-pressed={!yearly}
                onClick={() => setYearly(false)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
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
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  yearly
                    ? "bg-[#0b716b] text-white shadow-md"
                    : "text-[#647887] hover:text-[#0b2338]"
                }`}
              >
                Yearly
              </button>
            </div>

            <span className="rounded-full bg-[#e1f5ec] px-3.5 py-2 text-[11px] font-bold text-[#078052]">
              Save 20%
            </span>
          </div>
        </div>

        {/* PRICING CARDS (below) */}
        <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border border-[#0b716b] bg-gradient-to-b from-[#124e50] via-[#0d4146] to-[#092f3b] pt-7 text-white shadow-[0_25px_60px_rgba(9,60,66,0.2)] xl:-translate-y-2 xl:hover:-translate-y-3"
                    : "border border-white bg-white/90 text-[#0b2338] shadow-[0_15px_45px_rgba(11,35,56,0.06)] backdrop-blur-xl hover:border-[#b9ded9] hover:shadow-[0_25px_55px_rgba(11,35,56,0.10)]"
                }`}
              >
                {/* Popular label */}
                {plan.popular && (
                  <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-[#e9bd60] px-3 py-1.5 text-[10px] font-extrabold text-[#49350b]">
                    <Crown size={11} />
                    Most Popular
                  </div>
                )}

                {/* PLAN HEADER */}
                <div className="flex items-center gap-2">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className={plan.popular ? "text-[#e9bd60]" : "text-[#078f83]"}
                  />
                  <h3 className="text-base font-bold tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <p
                  className={`mt-0.5 text-[11px] ${
                    plan.popular ? "text-white/60" : "text-[#81929c]"
                  }`}
                >
                  {plan.tag}
                </p>

                {/* PRICE */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-[-0.05em]">
                    ${getPrice(plan.monthly)}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      plan.popular ? "text-white/60" : "text-[#81929c]"
                    }`}
                  >
                    /month
                  </span>
                </div>

                {yearly && (
                  <p
                    className={`text-[10px] ${
                      plan.popular ? "text-white/55" : "text-[#81929c]"
                    }`}
                  >
                    ${getPrice(plan.monthly) * 12} billed annually
                  </p>
                )}

                {/* FEATURES */}
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[12px] leading-snug"
                    >
                      <Check
                        size={14}
                        strokeWidth={3}
                        className={`mt-0.5 shrink-0 ${
                          plan.popular ? "text-[#55e0b2]" : "text-[#078f83]"
                        }`}
                      />
                      <span
                        className={
                          plan.popular ? "text-white/85" : "text-[#405b6c]"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.name === "Fleet" ? "#contact" : "/signup"}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b] ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#2bc99a] to-[#0fae87] text-white shadow-lg shadow-black/15 hover:brightness-110"
                      : "border border-[#0b716b]/25 bg-[#f4faf9] text-[#0b716b] hover:border-[#0b716b] hover:bg-[#e3f4f1]"
                  }`}
                >
                  {plan.cta}
                  {plan.popular && (
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}