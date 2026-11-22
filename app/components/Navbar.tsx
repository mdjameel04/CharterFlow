
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  LayoutDashboard,
  CalendarDays,
  BarChart3,
  Ship,
  Users,
  BookOpen,
  Headset,
} from "lucide-react";

const links = [
  {
    label: "Product",
    href: "#platform",
    children: [
      {
        label: "Dashboard",
        description: "Manage your charter business",
        href: "#platform",
        icon: LayoutDashboard,
      },
      {
        label: "Online Booking",
        description: "Accept bookings around the clock",
        href: "#features",
        icon: CalendarDays,
      },
      {
        label: "Analytics",
        description: "Track revenue and performance",
        href: "#features",
        icon: BarChart3,
      },
    ],
  },
  {
    label: "Solutions",
    href: "#features",
    children: [
      {
        label: "Charter Operators",
        description: "Everything for your charter business",
        href: "#features",
        icon: Ship,
      },
      {
        label: "Fleet Management",
        description: "Manage boats, captains and crew",
        href: "#features",
        icon: Users,
      },
    ],
  },
  {
    label: "Customers",
    href: "#customers",
  },
  {
    label: "Resources",
    href: "#resources",
    children: [
      {
        label: "Help Center",
        description: "Get help when you need it",
        href: "#faq",
        icon: Headset,
      },
      {
        label: "Guides",
        description: "Learn how to grow your business",
        href: "#resources",
        icon: BookOpen,
      },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full px-4 pt-3 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-[68px] w-full max-w-[1680px] items-center justify-between border border-transparent bg-transparent px-2 sm:px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="CharterFlow home"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2 justify-self-start"
        >
          <Image
            src="/logo1.png"
            alt="CharterFlow"
            width={52}
            height={52}
            priority
            className="h-12 w-12 object-contain"
          />

          <div className="flex flex-col justify-center">
            <span className="text-[22px] font-extrabold leading-none tracking-[-1px] text-[#0B2338] sm:text-[24px]">
              CharterFlow
            </span>

            <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-[#66808D] sm:block">
              Powering Fishing Charters.
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children && setOpenDropdown(link.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.label}
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === link.label ? null : link.label
                      )
                    }
                    className="group flex items-center gap-1.5 py-3 text-[14px] font-semibold text-[#0B2338] transition-colors hover:text-[#079B91]"
                  >
                    {link.label}

                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      openDropdown === link.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="rounded-2xl border border-[#D9E7EC] bg-white p-2 shadow-[0_15px_45px_rgba(11,35,56,0.12)]">
                      {link.children.map((child) => {
                        const Icon = child.icon;

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#F2F8FA]"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4F5F2] text-[#079B91] transition-colors group-hover:bg-[#079B91] group-hover:text-white">
                              <Icon size={19} />
                            </span>

                            <span className="flex flex-col gap-1">
                              <span className="text-[14px] font-bold text-[#0B2338]">
                                {child.label}
                              </span>

                              <span className="text-[11px] text-[#71838F]">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="py-3 text-[14px] font-semibold text-[#0B2338] transition-colors hover:text-[#079B91]"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          <Link
            href="/login"
            className="rounded-full border border-[#B9CDD6] bg-white/40 px-5 py-2.5 text-[13px] font-semibold text-[#0B2338] backdrop-blur-sm transition-all hover:border-[#079B91] hover:bg-white/80"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#079B91] to-[#00B88A] px-6 py-3 text-[13px] font-bold text-white shadow-[0_5px_15px_rgba(7,155,145,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(7,155,145,0.32)]"
          >
            Start Free Trial

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-xl p-2.5 text-[#0B2338] transition-colors hover:bg-white/60 lg:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[calc(100dvh-110px)] overflow-y-auto rounded-2xl border border-[#D9E7EC] bg-white p-5 shadow-[0_15px_45px_rgba(11,35,56,0.14)] sm:p-6 lg:hidden">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-[#EDF3F5] last:border-0"
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileDropdown === link.label}
                        onClick={() =>
                          setMobileDropdown((prev) =>
                            prev === link.label ? null : link.label
                          )
                        }
                        className="flex w-full items-center justify-between py-4 text-[15px] font-semibold text-[#0B2338]"
                      >
                        {link.label}

                        <ChevronDown
                          size={18}
                          className={`text-[#079B91] transition-transform ${
                            mobileDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileDropdown === link.label && (
                        <div className="flex flex-col gap-1 pb-3 pl-3">
                          {link.children.map((child) => {
                            const Icon = child.icon;

                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#F2F8FA]"
                              >
                                <Icon
                                  size={18}
                                  className="shrink-0 text-[#079B91]"
                                />

                                <span className="text-sm font-medium text-[#294558]">
                                  {child.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block py-4 text-[15px] font-semibold text-[#0B2338] transition-colors hover:text-[#079B91]"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* MOBILE ACTIONS */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex items-center justify-center rounded-full border border-[#D9E7EC] py-3.5 text-sm font-semibold text-[#0B2338]"
              >
                Log In
              </Link>

              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#079B91] to-[#00B88A] py-3.5 text-sm font-bold text-white shadow-md"
              >
                Start Free Trial
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
