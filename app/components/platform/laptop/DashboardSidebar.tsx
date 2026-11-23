
import { menuItems } from "../data";

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full w-[150px] shrink-0 flex-col select-text bg-[#102b3b] px-2 py-3 text-white">

      {/* Brand */}
      <div className="mb-5 flex items-center gap-1.5 px-1 select-text">
        <span className="select-text text-[10px] font-extrabold tracking-tight">
          CharterFlow
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1">
        {menuItems.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={`flex w-full cursor-default select-text items-center gap-2 rounded-md px-2 py-2 text-left text-[8px] font-medium ${
              active
                ? "bg-[#35d6b0] text-[#073b3b]"
                : "text-[#c1d0d9]"
            }`}
          >
            <Icon
              className="size-3 shrink-0"
              strokeWidth={2}
            />

            <span className="select-text">{label}</span>
          </div>
        ))}
      </nav>

    </aside>
  );
}
