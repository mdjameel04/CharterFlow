"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  type LucideIcon,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type ContactItem = {
  icon: LucideIcon;
  title: string;
  line: string;
  sub?: string;
  href?: string;
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

// How many questions show in this compact section (rest live on /faq)
const VISIBLE_FAQS = 3;

const contacts: ContactItem[] = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    line: "Get instant help",
    href: "#contact",
  },
  {
    icon: Mail,
    title: "Email Support",
    line: "support@charterflow.com",
    href: "mailto:support@charterflow.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    line: "+1 (800) 672-4367",
    sub: "Mon – Fri, 9 AM – 6 PM ET",
    href: "tel:+18006724367",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f5f9fb] px-5 py-10 sm:px-8"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[400px] rounded-full bg-[#d9f1ee]/40 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[230px_minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
        {/* COL 1: HEADING */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
            FAQ
          </p>

          <h2 className="mt-2 text-[26px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338]">
            Frequently
            <br />
            Asked Questions.
          </h2>

          <a
            href="/faq"
            className="group mt-4 inline-flex items-center gap-2 rounded-full border border-[#0b716b]/40 bg-white/80 px-4 py-2 text-xs font-bold text-[#0b716b] transition hover:border-[#0b716b] hover:bg-[#e3f4f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b716b]"
          >
            View All FAQs
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* COL 2: ACCORDION */}
        <div className="space-y-2.5">
          {faqs.slice(0, VISIBLE_FAQS).map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`overflow-hidden rounded-xl border backdrop-blur-lg transition-all duration-300 ${
                  isOpen
                    ? "border-[#a8d9d2] bg-white shadow-[0_12px_35px_rgba(11,35,56,0.07)]"
                    : "border-white bg-white/80 shadow-[0_6px_20px_rgba(11,35,56,0.05)] hover:border-[#b9ded9]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0b716b]"
                  >
                    <span
                      className={`text-[13px] font-semibold leading-snug ${
                        isOpen ? "text-[#087e78]" : "text-[#0b2338]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {isOpen ? (
                      <Minus size={16} className="shrink-0 text-[#078f83]" />
                    ) : (
                      <Plus size={16} className="shrink-0 text-[#0b2338]" />
                    )}
                  </button>
                </h3>

                <div id={`faq-panel-${index}`} role="region" hidden={!isOpen}>
                  <p className="px-4 pb-4 text-[12.5px] leading-relaxed text-[#647887]">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* COL 3: SUPPORT & CONTACT */}
        <div className="grid items-center gap-5 border-t border-[#0b2338]/15 pt-6 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#087e78]">
              Support &amp; Contact
            </p>

            <h3 className="mt-2 text-[24px] font-extrabold leading-[1.1] tracking-tight text-[#0b2338]">
              Need Help?
              <br />
              We’re Here for You.
            </h3>

            <p className="mt-2 text-[12px] leading-relaxed text-[#647887]">
              Get support, ask questions, or talk to our team about your
              business needs.
            </p>
          </div>

          <ul className="space-y-2">
            {contacts.map((c) => {
              const Icon = c.icon;

              return (
                <li key={c.title}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-3 rounded-xl border border-white bg-white/85 px-3.5 py-2.5 shadow-[0_6px_20px_rgba(11,35,56,0.06)] backdrop-blur-lg transition hover:border-[#b9ded9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0b716b]"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#078f83]"
                    />

                    <div className="min-w-0 leading-tight">
                      <p className="text-[12px] font-bold text-[#0b2338]">
                        {c.title}
                      </p>
                      <p className="truncate text-[11px] text-[#647887]">
                        {c.line}
                      </p>
                      {c.sub && (
                        <p className="text-[10px] text-[#81929c]">{c.sub}</p>
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}