import { Sun, BatteryCharging, Wrench, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Panels sized and angled for your roof and your usage — not a one-size template. Every design is engineered before a single bracket goes up.",
    points: ["Free shading & structural survey", "Tier-1 panels, 25-year warranty", "Permitting handled end-to-end"],
    accent: "solar",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    description:
      "Store the sun for after it sets. Keep the essentials running through outages and shift usage away from peak utility rates.",
    points: ["Whole-home or partial backup", "Automatic outage switchover", "Pairs with any panel system"],
    accent: "sky",
  },
  {
    icon: Wrench,
    title: "Maintenance & Monitoring",
    description:
      "We watch performance in the background and step in before small issues become lost production, so the system just keeps working.",
    points: ["24/7 remote performance monitoring", "Annual inspection & cleaning", "Priority repair response"],
    accent: "ink",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-solar-600 text-sm font-medium tracking-wide mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-ink max-w-2xl leading-tight">
            Three services. One system that just works.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-line bg-white p-8 hover:shadow-[0_20px_60px_-20px_rgba(10,14,18,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-6 ${
                      s.accent === "solar"
                        ? "bg-solar-50 text-solar-600"
                        : s.accent === "sky"
                        ? "bg-sky-50 text-sky-600"
                        : "bg-ink/5 text-ink"
                    }`}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-ink tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[14px] text-slate-700"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink focus-ring rounded-sm"
                  >
                    Get a quote
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
