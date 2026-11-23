// components/platform/laptop/DashboardScreen.tsx
// Fills the laptop screen area (704 x 388 px).

import { ChevronDown } from "lucide-react";
import { dashboardHeader } from "../data";
import DashboardSidebar from "./DashboardSidebar";
import StatCards from "./StatCards";
import RevenueChart from "./RevenueChart";
import UpcomingTrips from "./UpcomingTrips";

export default function DashboardScreen() {
  return (
    <div className="flex h-full w-full bg-[#eef5f7] text-[#0b2338] select-text">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-[13px] font-extrabold tracking-tight">
            {dashboardHeader.greeting} {dashboardHeader.emoji}
          </h3>

          <span className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[8px] font-semibold text-[#405b6c] shadow-sm ring-1 ring-black/5">
            {dashboardHeader.range}
            <ChevronDown className="size-2.5" />
          </span>
        </div>

        <StatCards />

        {/* Chart + trips */}
        <div className="grid min-h-0 flex-1 grid-cols-[1.55fr_1fr] gap-2.5">
          <RevenueChart />
          <UpcomingTrips />
        </div>
      </div>
    </div>
  );
}