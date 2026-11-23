// components/platform/data.ts
// All dummy data for the Platform section lives here.
// Change numbers/text here and every component updates.

import {
  Anchor,
  BarChart3,
  CalendarDays,
  Compass,
  CreditCard,
  LayoutDashboard,
  Settings,
  Ship,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ───────── Section copy (right-side text) ───────── */

export const platformCopy = {
  label: "The Platform",
  heading: "A Clear View of Your Charter Business.",
  description:
    "Manage bookings, trips, customers, and payments from a single, easy-to-use dashboard.",
  cta: { label: "Explore the Dashboard", href: "#dashboard" },
} as const;

export const checklist: string[] = [
  "Real-time bookings and schedule",
  "Trip and crew management",
  "Customer details and history",
  "Payments, deposits, and reports",
];

/* ───────── Dashboard: sidebar ───────── */

export type MenuItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Bookings", icon: CalendarDays },
  { label: "Trips", icon: Compass },
  { label: "Customers", icon: Users },
  { label: "Fleet", icon: Ship },
  { label: "Captains", icon: Anchor },
  { label: "Payments", icon: CreditCard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

/* ───────── Dashboard: header ───────── */

export const dashboardHeader = {
  greeting: "Good morning, Captain",
  emoji: "👋",
  range: "Last 30 Days",
} as const;

/* ───────── Dashboard: stat cards ───────── */

export type Stat = {
  label: string;
  value: string;
  change: string; // shown in green under the value
};

export const stats: Stat[] = [
  { label: "Bookings", value: "24", change: "+24%" },
  { label: "Revenue", value: "$7,680", change: "+34%" },
  { label: "Trips", value: "12", change: "+4%" },
  { label: "Customers", value: "96", change: "+17%" },
];

/* ───────── Dashboard: revenue chart ───────── */

export type ChartPoint = {
  month: string;
  value: number; // revenue in $k, used to draw the line
};

export const revenueChart = {
  title: "Revenue Trend",
  points: [
    { month: "Jan", value: 8 },
    { month: "Feb", value: 14 },
    { month: "Mar", value: 12 },
    { month: "Apr", value: 19 },
    { month: "May", value: 16 },
    { month: "Jun", value: 24 },
    { month: "Jul", value: 21 },
    { month: "Aug", value: 30.11 },
  ] as ChartPoint[],
  // Tooltip bubble sits on the last point
  tooltip: "$30,110",
  // Left-side grid labels (in $k)
  yTicks: [0, 10, 20, 30],
} as const;

/* ───────── Dashboard: upcoming trips ───────── */

export type Trip = {
  name: string;
  when: string;
  thumb: string; // path inside /public
};

export const upcomingTrips = {
  title: "Upcoming Trips",
  items: [
    {
      name: "Offshore Fishing",
      when: "Dec 20, 6:00 AM",
      thumb: "/platform/trip-offshore.webp",
    },
    {
      name: "Reef Fishing",
      when: "Dec 22, 7:00 AM",
      thumb: "/platform/trip-reef.webp",
    },
    {
      name: "Deep Sea Fishing",
      when: "Dec 24, 6:30 AM",
      thumb: "/platform/trip-deep-sea.webp",
    },
  ] as Trip[],
};

/* ───────── Phone: Book a Trip screen ───────── */

export type PhoneField = {
  label: string; // accessible name only; not rendered as a real input
  value: string;
  icon: LucideIcon;
  dropdown?: boolean; // show the chevron on the right
};

export const phoneScreen = {
  banner: "/platform/boat-banner.webp",
  heading: "Book a Trip",
  fields: [
    { label: "Trip type", value: "Offshore Fishing", icon: Ship, dropdown: true },
    { label: "Date", value: "Dec 20, 2026", icon: CalendarDays, dropdown: true },
    { label: "Guests", value: "4 Guests", icon: Users, dropdown: true },
  ] as PhoneField[],
  cta: "Book Now",
} as const;

/* ───────── Images used by this section ───────── */

export const images = {
  background: "/platform/platform-bg.webp",
} as const;