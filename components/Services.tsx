import { Sun, BatteryCharging, Cable, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    id: "services",
    icon: Sun,
    title: "Solar Power",
    subtitle: "Clean & Renewable",
    description: "Premium solar design and installation for Adelaide homes and businesses, with clean roof layouts and strong long-term performance.",
    points: ["High-efficiency panels", "Inverter and monitoring setup", "Clean cabling and handover"],
  },
  {
    id: "battery",
    icon: BatteryCharging,
    title: "Battery Storage",
    subtitle: "Store Energy",
    description: "Store your solar power and use it at night, during peak prices, or when your home needs backup power options.",
    points: ["Battery-ready system design", "Backup options", "Peak-rate reduction planning"],
  },
  {
    id: "ev",
    icon: Cable,
    title: "EV Charging",
    subtitle: "Power Your Drive",
    description: "Smart EV charger installation integrated with solar, battery and home energy monitoring.",
    points: ["Home EV chargers", "Solar-aware charging", "Tidy installation and testing"],
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#05070A] py-28 text-white md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,171,99,.22),transparent_30rem),radial-gradient(circle_at_90%_30%,rgba(62,143,245,.14),transparent_28rem)]" aria-hidden />
      <div className="absolute inset-0 solar-grid opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-content px-6 lg:px-8">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-solar-300">Integrated energy solutions</p>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tightest text-white md:text-5xl">
              One premium system: solar, storage and EV charging.
            </h2>
            <p className="max-w-md leading-relaxed text-white/62">
              Designed to match the hero image style: dark, modern, warm highlights and clear energy-flow messaging.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article id={s.id} className="group h-full scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.085] hover:shadow-[0_30px_90px_-50px_rgba(255,171,99,.35)]">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-solar-400/45 bg-solar-400/10 text-solar-300 shadow-[0_0_35px_-20px_rgba(255,171,99,.95)]">
                      <Icon size={29} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/32">0{i + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-solar-300">{s.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/62">{s.description}</p>
                  <ul className="mt-7 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] text-white/70">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-solar-300" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-solar-300 focus-ring rounded-sm">
                    Get a free quote <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
