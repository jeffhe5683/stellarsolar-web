import type { ReactNode } from "react";
import { ArrowRight, ChevronDown, ShieldCheck, Zap, BatteryCharging } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink pt-16 text-white">
      <div className="absolute inset-0 hero-pro-bg" aria-hidden />
      <div className="absolute inset-0 solar-grid opacity-35" aria-hidden />
      <div className="absolute -left-32 top-28 h-80 w-80 rounded-full bg-sky-500/20 blur-[110px] animate-float-slow" aria-hidden />
      <div className="absolute right-[-7rem] top-24 h-[34rem] w-[34rem] rounded-full bg-solar-500/25 blur-[130px] animate-pulse-slow" aria-hidden />
      <div className="sun-rays absolute right-[8%] top-[18%] hidden h-52 w-52 rounded-full md:block" aria-hidden>
        <div className="absolute inset-10 rounded-full bg-solar-400 shadow-[0_0_80px_18px_rgba(255,145,66,0.48)]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm text-white/75 backdrop-blur animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-solar-400 shadow-[0_0_20px_rgba(255,171,99,0.9)]" />
            Adelaide solar & battery installation
          </div>

          <h1 className="mt-7 max-w-4xl text-[13vw] font-semibold leading-[0.92] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.8rem] animate-fade-up animation-delay-100">
            Powering Adelaide with Solar, Battery & EV Charging.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl animate-fade-up animation-delay-200">
            Smart solar, battery storage and EV charging solutions for homes and small businesses across South Australia.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up animation-delay-300">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-solar-50 hover:shadow-[0_18px_50px_-22px_rgba(255,171,99,0.9)] focus-ring">
              Get a Free Quote
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-ring">
              View Pro Design
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/65 sm:grid-cols-3 animate-fade-up animation-delay-400">
            <TrustItem icon={<ShieldCheck size={16} />} text="Clean workmanship" />
            <TrustItem icon={<Zap size={16} />} text="Fast quote process" />
            <TrustItem icon={<BatteryCharging size={16} />} text="Battery ready" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] animate-fade-up animation-delay-300">
          <div className="absolute -inset-8 rounded-[3rem] bg-solar-400/20 blur-[90px]" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl backdrop-blur-xl">
            <div className="stellar-story-scene" aria-label="Animated solar energy story: sunrise, solar panels, battery storage and EV charging">
              <div className="story-stars" aria-hidden />
              <div className="story-sun" aria-hidden />
              <div className="story-sun-glow" aria-hidden />
              <div className="story-hills story-hills-back" aria-hidden />
              <div className="story-hills story-hills-front" aria-hidden />

              <div className="story-house" aria-hidden>
                <div className="story-roof" />
                <div className="story-body" />
                <div className="story-door" />
                <div className="story-window story-window-left" />
                <div className="story-window story-window-right" />
                <div className="story-panels">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
              </div>

              <svg className="energy-path energy-path-solar" viewBox="0 0 300 160" aria-hidden>
                <path d="M55 40 C 95 55, 115 80, 142 92 S 198 105, 238 124" />
              </svg>
              <svg className="energy-path energy-path-battery" viewBox="0 0 260 130" aria-hidden>
                <path d="M42 35 C 85 62, 108 82, 132 86 S 198 92, 226 110" />
              </svg>

              <div className="story-inverter" aria-hidden>
                <span />
              </div>
              <div className="story-battery" aria-hidden>
                <div className="battery-level" />
                <Zap size={28} />
              </div>
              <div className="story-charger" aria-hidden>
                <span />
              </div>
              <div className="story-car" aria-hidden>
                <div className="car-body" />
                <div className="car-top" />
                <div className="wheel wheel-left" />
                <div className="wheel wheel-right" />
              </div>

              <div className="story-caption story-caption-one">
                <span>1. Sunrise</span>
                Clean energy begins.
              </div>
              <div className="story-caption story-caption-two">
                <span>2. Solar</span>
                Panels capture power.
              </div>
              <div className="story-caption story-caption-three">
                <span>3. Battery + EV</span>
                Store energy. Charge your drive.
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#services" aria-label="Scroll to services" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full text-white/60 transition-colors hover:text-white focus-ring animate-bounce">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

function TrustItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur">
      <span className="text-solar-300">{icon}</span>
      {text}
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <p className="text-xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-xs text-white/45">{label}</p>
    </div>
  );
}
