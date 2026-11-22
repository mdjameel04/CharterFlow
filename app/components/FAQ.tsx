
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type ContactItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  detail?: string;
};

const faqs: FAQItem[] = [
  {
    question: "Do I need a website to use CharterFlow?",
    answer:
      "No. CharterFlow gives you a branded charter website with online booking built in. If you already have a website, you can add the booking widget to it instead.",
  },
  {
    question: "Can I accept payments and deposits online?",
    answer:
      "Yes. Guests can pay in full or put down a deposit at checkout through Stripe. Refunds are handled from your dashboard.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Plans are billed monthly or yearly, and you can cancel anytime from your account settings.",
  },
  {
    question: "Can I manage multiple boats and captains?",
    answer:
      "Yes. CharterFlow supports fleet and captain management on eligible plans, allowing you to manage schedules and availability in one place.",
  },
  {
    question: "Can I customize my charter website?",
    answer:
      "Yes. You can personalize your website with your business branding, photos, trip packages, and contact information.",
  },
];

const contacts: ContactItem[] = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Contact our team by email",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    detail: "Available during support hours",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5f9fb] px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[400px] rounded-full bg-[#d9f1ee]/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b9ded9] bg-white/80 px-4 py-2">
            <Headphones size={15} className="text-[#079b91]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#087e78]">
              Help & Support
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#0b2338] sm:text-5xl lg:text-6xl">
            Questions?
            <span className="block italic text-[#078f83]">
              We've got answers.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#647887] sm:text-base">
            Everything you need to know about CharterFlow,
            from getting started to growing your charter business.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)] lg:gap-12">

          {/* FAQ ACCORDION */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#a8d9d2] bg-white shadow-[0_12px_35px_rgba(11,35,56,0.07)]"
                      : "border-[#e0ebee] bg-white/80 hover:border-[#b9ded9]"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className={`text-sm font-bold leading-relaxed sm:text-[15px] ${
                          isOpen
                            ? "text-[#087e78]"
                            : "text-[#0b2338]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-[#078f83] text-white"
                            : "bg-[#e9f5f2] text-[#078f83]"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    hidden={!isOpen}
                  >
                    <div className="px-5 pb-6 sm:px-6">
                      <div className="mb-4 h-px bg-[#e6eff1]" />

                      <p className="max-w-xl text-[13px] leading-7 text-[#647887] sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087e78] transition-colors hover:text-[#065e59]"
            >
              Still have questions? Contact us
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* SUPPORT CARD */}
          <aside className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#124e50] via-[#0d4146] to-[#092f3b] p-7 text-white shadow-[0_25px_60px_rgba(9,60,66,0.15)] sm:p-9">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full border border-white/10" />

            <div className="relative">
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/10">
                <Headphones size={24} className="text-[#65dfc0]" />
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#65dfc0]">
                Support & Contact
              </p>

              <h3 className="mt-3 max-w-xs font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Need a hand?
                <span className="block italic text-[#65dfc0]">
                  We're here to help.
                </span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                Have a question about your charter business?
                Reach out to our team and we'll help you find
                the right solution.
              </p>

              {/* CONTACT OPTIONS */}
              <div className="mt-8 space-y-3">
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <div
                      key={contact.title}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#65dfc0]">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white">
                          {contact.title}
                        </p>

                        <p className="mt-1 text-xs text-white/60">
                          {contact.description}
                        </p>

                        {contact.detail && (
                          <p className="mt-1 text-[11px] text-white/45">
                            {contact.detail}
                          </p>
                        )}
                      </div>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  );
                })}
              </div>

              {/* CONTACT CTA */}
              <a
                href="#contact"
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#27c99b] px-6 py-4 text-sm font-bold text-[#073b39] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#51dfb7]"
              >
                Get in Touch

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <p className="mt-4 text-center text-[11px] text-white/45">
                We're happy to answer your questions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
