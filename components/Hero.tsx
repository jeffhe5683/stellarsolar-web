import type { ReactNode } from "react";
import { ArrowRight, BatteryCharging, Leaf, MonitorSmartphone, Play, ShieldCheck, Sun, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#05070A] text-white">
      <div className="absolute inset-0 hero-image-bg" aria-hidden />
      <div className="absolute inset-0 hero-image-overlay" aria-hidden />

      <div className="absolute left-[28%] top-[33%] z-[2] hidden h-4 w-4 rounded-full bg-solar-300 shadow-[0_0_35px_12px_rgba(255,193,91,.85)] md:block hero-energy-dot" aria-hidden />
      <div className="absolute left-[33%] top-[34%] z-[2] hidden h-[2px] w-[25vw] origin-left rotate-[-11deg] bg-gradient-to-r from-solar-200 via-solar-400 to-transparent shadow-[0_0_18px_rgba(255,171,99,.95)] md:block hero-energy-beam" aria-hidden />
      <div className="absolute right-[43%] top-[37%] z-[2] hidden h-[24%] w-[2px] bg-gradient-to-b from-solar-200 via-solar-400 to-transparent shadow-[0_0_18px_rgba(255,171,99,.95)] md:block hero-energy-down" aria-hidden />
      <div className="absolute right-[23%] bottom-[26%] z-[2] hidden h-[2px] w-[28vw] bg-gradient-to-r from-solar-400 via-solar-300 to-transparent shadow-[0_0_18px_rgba(255,171,99,.95)] md:block hero-energy-car" aria-hidden />

      <div className="relative z-10 flex min-h-screen items-center px-6 pb-36 pt-28 lg:px-14 xl:px-20">
        <div className="max-w-[620px]">
          <div className="mb-7 text-sm font-semibold uppercase tracking-[0.22em] text-solar-300 animate-fade-up">
            Smart Energy Solutions
          </div>

          <h1 className="text-[13vw] font-bold leading-[0.94] tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,.45)] sm:text-6xl md:text-7xl lg:text-[5.4rem] animate-fade-up animation-delay-100">
            Smart Energy.<br />
            Brighter Future<span className="text-solar-400">.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-white/86 md:text-xl animate-fade-up animation-delay-200">
            Integrated solar, battery and EV charging solutions for homes and businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up animation-delay-300">
            <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-solar-400 px-8 py-4 text-[15px] font-semibold text-ink shadow-[0_22px_55px_-28px_rgba(255,171,99,.95)] transition-all hover:-translate-y-0.5 hover:bg-solar-300 focus-ring">
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="group inline-flex items-center justify-center gap-3 rounded-2xl px-5 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10 focus-ring">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/35 bg-black/20 backdrop-blur">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Video
            </a>
          </div>

          <div className="mt-11 grid max-w-[560px] grid-cols-3 gap-0 text-center animate-fade-up animation-delay-400">
            <MiniService icon={<Sun size={32} />} title="Solar Power" subtitle="Clean & Renewable" />
            <MiniService icon={<BatteryCharging size={32} />} title="Battery Storage" subtitle="Store Energy" bordered />
            <MiniService icon={<Zap size={32} />} title="EV Charging" subtitle="Power Your Drive" bordered />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#05070A]/88 px-6 py-7 backdrop-blur-xl lg:px-14 xl:px-20">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-4">
          <Benefit icon={<Leaf size={30} />} title="Clean Energy" text="Reduce your carbon footprint with clean, renewable solar power." />
          <Benefit icon={<ShieldCheck size={30} />} title="Energy Independence" text="Store energy and power your home day and night." />
          <Benefit icon={<span className='text-4xl leading-none'>$</span>} title="Save More" text="Lower your energy bills and maximise long-term savings." />
          <Benefit icon={<MonitorSmartphone size={30} />} title="Smart Monitoring" text="Monitor and control your energy anytime, anywhere." />
        </div>
      </div>
    </section>
  );
}

function MiniService({ icon, title, subtitle, bordered = false }: { icon: ReactNode; title: string; subtitle: string; bordered?: boolean }) {
  return (
    <div className={`px-4 ${bordered ? "border-l border-white/20" : ""}`}>
      <div className="mx-auto mb-3 grid h-14 w-14 place-items-center text-solar-300 drop-shadow-[0_0_20px_rgba(255,171,99,.45)]">
        {icon}
      </div>
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/65">{subtitle}</p>
    </div>
  );
}

function Benefit({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-5 border-white/10 md:border-r md:pr-6 last:border-r-0">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-solar-400/80 text-solar-300 shadow-[0_0_28px_-18px_rgba(255,171,99,.95)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/62">{text}</p>
      </div>
    </div>
  );
}
