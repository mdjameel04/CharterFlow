import { BarChart3, CalendarCheck, CreditCard, FileSignature, Globe, LucideIcon, MessageSquare, Ship, Users } from "lucide-react";

export type Feature ={
     id: string;
  stage: string; // route pe chhota label (journey ka step)
  title: string;
  description: string;
  icon: LucideIcon;
  mockup: MockupKey;
};

export type MockupKey =
  | "website"
  | "chat"
  | "booking"
  | "waiver"
  | "payment"
  | "fleet"
  | "crm"
  | "analytics";

export const features: Feature[] = [
    {
    id: "website",
    stage: "Discover",
    title: "Custom Charter Website",
    description: "A professional, branded site for your charter business.",
    icon: Globe,
    mockup: "website",
  },
  {
    id: "chat",
    stage: "Engage",
    title: "AI Chat Assistant",
    description: "Answer questions, capture leads, and book trips 24/7.",
    icon: MessageSquare,
    mockup: "chat",
  },
  {
    id: "booking",
    stage: "Book",
    title: "Online Booking & Scheduling",
    description: "Real-time availability, trip slots, and confirmations.",
    icon: CalendarCheck,
    mockup: "booking",
  },
  {
    id: "waivers",
    stage: "Sign",
    title: "Digital Waivers",
    description: "Collect signed liability waivers before every trip.",
    icon: FileSignature,
    mockup: "waiver",
  },
  {
    id: "payments",
    stage: "Pay",
    title: "Stripe Payments & Deposits",
    description: "Take secure payments, deposits, and refunds.",
    icon: CreditCard,
    mockup: "payment",
  },
  {
    id: "fleet",
    stage: "Operate",
    title: "Fleet & Captain Management",
    description: "Manage boats, captains, crew, and assignments.",
    icon: Ship,
    mockup: "fleet",
  },
  {
    id: "crm",
    stage: "Retain",
    title: "Customer CRM",
    description: "Keep customer details, booking history, and notes.",
    icon: Users,
    mockup: "crm",
  },
  {
    id: "analytics",
    stage: "Grow",
    title: "Business Analytics",
    description: "Track bookings, revenue, and business performance.",
    icon: BarChart3,
    mockup: "analytics",
  },
];