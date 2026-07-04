import { BatteryCharging, Building2, Home, SunMedium } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    icon: Home,
    title: "Residential solar",
    size: "6.6kW",
    copy: "A clean roofline layout for daily household usage, EV-ready upgrades and simple app monitoring.",
  },
  {
    icon: BatteryCharging,
    title: "Solar + battery",
    size: "10kW + 13.5kWh",
    copy: "Designed to shift evening power use away from peak rates and keep essentials available during outages.",
  },
  {
    icon: Building2,
    title: "Small business",
    size: "30kW",
    copy: "Daytime generation for workshops, warehouses and offices with consumption-led design.",
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="bg-white py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-solar-600 text-sm font-medium tracking-wide mb-4">Project styles</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-ink max-w-2xl leading-tight">A pro look for every type of solar customer.</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-50px_rgba(10,14,18,0.45)]">
                  <div className="absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full bg-solar-400/20 blur-3xl transition-transform group-hover:scale-125" />
                  <div className="relative mb-8 aspect-[1.35] overflow-hidden rounded-3xl bg-ink p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-transparent to-solar-500/20" />
                    <div className="relative grid h-full grid-cols-5 gap-2">
                      {Array.from({ length: 15 }).map((_, idx) => (
                        <span key={idx} className="panel-shine rounded-lg border border-sky-300/20 bg-sky-950/80" />
                      ))}
                    </div>
                    <SunMedium className="absolute right-5 top-5 text-solar-300 animate-spin-slow" size={30} />
                  </div>
                  <div className="relative flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-medium text-solar-600">{project.size}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ink shadow-sm">
                      <Icon size={22} />
                    </span>
                  </div>
                  <p className="relative mt-4 text-slate-600 leading-relaxed">{project.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
