import SectionHeader from "./SectionHeader";
import RouteStage from "./route/RouteStage";
import FeaturesTimeline from "./FeaturesTimeline";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-teal-50 px-6 py-24">
      <SectionHeader />
      <RouteStage />
      <FeaturesTimeline />
    </section>
  );
}