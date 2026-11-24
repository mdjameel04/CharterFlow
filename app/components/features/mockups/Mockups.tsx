import type { ComponentType, ReactNode } from "react";
import { Check } from "lucide-react";
import type { MockupKey } from "@/app/data/data";

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 rounded-2xl border border-teal-100 bg-white p-3 text-left text-xs text-slate-700 shadow-lg shadow-teal-900/10">
      {children}
    </div>
  );
}

function WebsiteMockup() {
  return (
    <Card>
      <div className="mb-2 flex gap-1">
        <i className="h-2 w-2 rounded-full bg-red-300" />
        <i className="h-2 w-2 rounded-full bg-amber-300" />
        <i className="h-2 w-2 rounded-full bg-emerald-300" />
      </div>
      <div className="rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 p-3 text-white">
        <p className="font-semibold">Sea Hawk Charters</p>
        <p className="text-[10px] opacity-80">Book your offshore trip</p>
        <span className="mt-2 inline-block rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-teal-700">
          Book now
        </span>
      </div>
    </Card>
  );
}

function ChatMockup() {
  return (
    <Card>
      <p className="mr-8 rounded-xl rounded-bl-sm bg-slate-100 px-2 py-1.5">
        Any slots this Saturday?
      </p>
      <p className="ml-8 mt-1.5 rounded-xl rounded-br-sm bg-teal-600 px-2 py-1.5 text-white">
        Yes! 2 spots left on the 6am trip.
      </p>
      <span className="mt-1.5 inline-block rounded-full bg-teal-50 px-2 py-0.5 font-medium text-teal-700">
        Book now →
      </span>
    </Card>
  );
}

function BookingMockup() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <Card>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((d) => (
          <span
            key={d}
            className={`rounded-md py-1 ${
              [6, 7].includes(d)
                ? "bg-teal-600 font-semibold text-white"
                : "bg-slate-50"
            }`}
          >
            {d}
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between rounded-lg bg-teal-50 px-2 py-1.5">
        <span className="font-medium">Sunrise Offshore</span>
        <span className="text-teal-700">6 spots left</span>
      </div>
    </Card>
  );
}

function WaiverMockup() {
  return (
    <Card>
      <p className="font-medium">Liability Waiver</p>
      <div className="mt-2 border-b border-slate-300 pb-1 font-serif text-lg italic text-teal-700">
        John Carter
      </div>
      <p className="mt-1.5 flex items-center gap-1 text-emerald-600">
        <Check size={12} /> Signed digitally
      </p>
    </Card>
  );
}

function PaymentMockup() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <span>Deposit</span>
        <span className="text-base font-semibold">$250.00</span>
      </div>
      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
        <Check size={12} /> Paid via Stripe
      </span>
    </Card>
  );
}

function FleetMockup() {
  const rows = [
    { boat: "Sea Hawk", captain: "Capt. Mike", dot: "bg-emerald-500" },
    { boat: "Blue Marlin", captain: "Capt. Sara", dot: "bg-amber-400" },
  ];
  return (
    <Card>
      {rows.map((r) => (
        <div key={r.boat} className="flex items-center gap-2 py-1">
          <span className={`h-2 w-2 rounded-full ${r.dot}`} />
          <span className="font-medium">{r.boat}</span>
          <span className="ml-auto text-slate-500">{r.captain}</span>
        </div>
      ))}
    </Card>
  );
}

function CrmMockup() {
  const customers = [
    { name: "John Carter", trips: 5 },
    { name: "Emma Lee", trips: 3 },
    { name: "Raj Patel", trips: 2 },
  ];
  return (
    <Card>
      {customers.map((c) => (
        <div key={c.name} className="flex items-center gap-2 py-1">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-[10px] font-semibold text-teal-700">
            {c.name[0]}
          </span>
          <span className="font-medium">{c.name}</span>
          <span className="ml-auto text-slate-500">{c.trips} trips</span>
        </div>
      ))}
    </Card>
  );
}

function AnalyticsMockup() {
  const bars = [40, 65, 50, 80, 70, 95];
  return (
    <Card>
      <p className="text-base font-semibold">$12.4k</p>
      <p className="text-slate-500">Revenue this month</p>
      <div className="mt-2 flex h-14 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </Card>
  );
}

export const MOCKUPS: Record<MockupKey, ComponentType> = {
  website: WebsiteMockup,
  chat: ChatMockup,
  booking: BookingMockup,
  waiver: WaiverMockup,
  payment: PaymentMockup,
  fleet: FleetMockup,
  crm: CrmMockup,
  analytics: AnalyticsMockup,
};