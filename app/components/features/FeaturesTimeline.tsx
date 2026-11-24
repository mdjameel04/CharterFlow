import { features } from "@/app/data/data";
import { MOCKUPS } from "./mockups/Mockups";

export default function FeaturesTimeline() {
  return (
    <ol className="relative mx-auto mt-16 max-w-md lg:hidden">
      {/* vertical line: dot ka center = left-5 (40px dot ka aadha) */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700"
      />

      {features.map((feature, index) => {
        const Icon = feature.icon;
        const Mockup = MOCKUPS[feature.mockup];

        return (
          <li key={feature.id} className="relative pb-12 pl-16 last:pb-0">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white ring-4 ring-teal-100">
              <Icon size={18} />
            </span>

            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              {index + 1}. {feature.stage}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{feature.description}</p>
            <Mockup />
          </li>
        );
      })}
    </ol>
  );
}