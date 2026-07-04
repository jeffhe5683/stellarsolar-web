import { Sun, BatteryCharging, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Roof-first design, premium panels, tidy cable runs and a handover your customer can understand.",
    points: ["Residential and small business", "Clean panel layout", "Inverter and monitoring setup"],
    accent: "solar",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    description:
      "Battery-ready systems that help customers use more of their own solar power after sunset.",
    points: ["Backup-ready design", "Peak-rate reduction", "Future upgrade planning"],
    accent: "sky",
  },
  {
    icon: Wrench,
    title: "Maintenance & Monitoring",
    description:
      "Keep systems producing properly with inspections, cleaning, troubleshooting and performance checks.",
    points: ["System health checks", "Fault finding", "Panel cleaning and servicing"],
    accent: "ink",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-paper py-28 md:py-36">
      <div className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-solar-200/35 blur-[100px]" aria-hidden />
      <div className="max-w-content relative mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-solar-600 text-sm font-medium tracking-wide mb-4">What we do</p>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-ink max-w-2xl leading-tight">
              Solar services presented like a premium brand.
            </h2>
            <p className="max-w-md text-slate-600 leading-relaxed">
              Clear cards, strong benefits and visual details help customers understand what you offer quickly.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-50px_rgba(10,14,18,0.55)]">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-solar-500 via-solar-200 to-sky-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-6 ${
                    s.accent === "solar" ? "bg-solar-50 text-solar-600" : s.accent === "sky" ? "bg-sky-50 text-sky-600" : "bg-ink/5 text-ink"
                  }`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-ink tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-solar-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-ink focus-ring rounded-sm">
                    Get a quote
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
