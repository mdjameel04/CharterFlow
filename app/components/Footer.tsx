"use client";
// components/Footer.jsx — Next.js + Tailwind + lucide-react
// "use client" is only for the newsletter form handler.

import { ArrowRight,  } from "lucide-react";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const columns = [
  { title: "Product", links: ["Features", "Dashboard", "Mobile App", "Integrations"] },
  { title: "Solutions", links: ["Charter Operators", "Fleet Management", "Custom Setups", "Use Cases"] },
  { title: "Resources", links: ["Blog", "Guides", "Help Center", "API Docs"] },
  { title: "Company", links: ["About Us", "Customers", "Careers", "Contact"] },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-white" aria-label="CharterFlow home">
      <svg viewBox="0 0 40 24" className="h-6 w-10" fill="none" stroke="#3fd6c0" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <path d="M2 14c5-6 9-6 14 0s9 6 14 0 6-3 8-2" />
        <path d="M6 20c5-4 9-4 14 0s9 4 14 0" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">CharterFlow</span>
    </a>
  );
}

const socialLinks = [
  {
    label: "YouTube",
    href: "#",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "#",
    Icon: FaInstagram,
  },
  {
    label: "X",
    href: "#",
    Icon: FaXTwitter,
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0a3b45] to-[#06222e] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_repeat(4,1fr)_1.6fr]">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-white/75">
            The all-in-one platform for fishing charter businesses.
          </p>
          <ul className="mt-4 flex items-center gap-4">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href="#"
                  aria-label={s.label}
                  className="text-white/85 transition hover:text-[#3fd6c0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3fd6c0]"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link columns */}
        {columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3 className="text-[13px] font-bold">{c.title}</h3>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-white/75 transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="text-[13px] font-bold">Stay in the Loop</h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/75">
            Get product updates, fishing industry insights and growth tips.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: connect to your newsletter API
            }}
            className="mt-4 flex overflow-hidden rounded-lg border border-white/25 bg-white/10"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[13px] text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid w-11 place-items-center bg-gradient-to-b from-[#1fd18a] to-[#0fa56a] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/55">
       2026 CharterFlow. All rights reserved.
      </div>
    </footer>
  );
}