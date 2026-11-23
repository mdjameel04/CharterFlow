// app/faq/page.tsx
import type { Metadata } from "next";
import FaqPageContent from "./_components/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ | CharterFlow",
  description:
    "Answers about bookings, payments, plans, and running your fishing charter business with CharterFlow.",
};

export default function FaqPage() {
  return <FaqPageContent />;
}