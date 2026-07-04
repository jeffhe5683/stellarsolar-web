import type { ReactNode } from "react";
import { ArrowRight, BatteryCharging, ChevronDown, MapPin, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink pt-16 text-white">
      <div className="absolute inset-0 hero-pro-bg" aria-hidden />
      <div className="absolute inset-0 solar-grid opacity-30" aria-hidden />
      <div className="absolute left-[-12rem] top-16 h-[32rem] w-[32rem] rounded-full bg-sky-500/20 blur-[130px] animate-float-slow" aria-hidden />
      <div className="absolute right-[-10rem] top-12 h-[40rem] w-[40rem] rounded-full bg-solar-500/24 blur-[150px] animate-pulse-slow" aria-hidden />

      <div className="relative z-10 max-w-content mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-10 px-6 pb-20 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="relative z-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm text-white/78 shadow-[0_12px_45px_rgba(0,0,0,.25)] backdrop-blur animate-fade-up">
            <Sparkles size={15} className="text-solar-300" />
            Premium Solar Solutions in Adelaide
          </div>

          <h1 className="mt-7 max-w-4xl text-[12vw] font-semibold leading-[0.92] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.55rem] animate-fade-up animation-delay-100">
            Powering Adelaide with <span className="text-gradient-solar">Solar</span>, Battery & EV Charging.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/72 md:text-xl animate-fade-up animation-delay-200">
            Smart energy systems designed for Australian homes and businesses — from rooftop solar to battery storage and EV charging.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up animation-delay-300">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-solar-400 px-7 py-4 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-solar-300 hover:shadow-[0_22px_55px_-24px_rgba(255,171,99,1)] focus-ring">
              Get a Free Quote
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-ring">
              <Phone size={16} /> Call Now
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/68 sm:grid-cols-3 animate-fade-up animation-delay-400">
            <TrustItem icon={<ShieldCheck size={16} />} title="Quality Install" text="Clean workmanship" />
            <TrustItem icon={<Zap size={16} />} title="Fast Quote" text="Simple process" />
            <TrustItem icon={<MapPin size={16} />} title="Local Team" text="Adelaide based" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] animate-fade-up animation-delay-300 lg:-mr-4">
          <div className="absolute -inset-10 rounded-[3.5rem] bg-[radial-gradient(circle_at_55%_45%,rgba(255,171,99,.34),transparent_55%)] blur-[76px]" />
          <div className="hero-device-shell relative overflow-hidden rounded-[2.65rem] border border-white/12 bg-white/[0.075] p-3 shadow-[0_35px_120px_rgba(0,0,0,.5)] backdrop-blur-2xl">
            <ProEnergyScene />
          </div>
        </div>
      </div>

      <a href="#services" aria-label="Scroll to services" className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full text-white/60 transition-colors hover:text-white focus-ring animate-bounce">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

function ProEnergyScene() {
  return (
    <div className="pro-hero-scene" aria-label="Animated solar, battery and EV charging system">
      <div className="pro-sky-stars" aria-hidden />
      <div className="pro-sun" aria-hidden />
      <div className="pro-sun-orbit" aria-hidden />
      <div className="pro-cloud pro-cloud-one" aria-hidden />
      <div className="pro-cloud pro-cloud-two" aria-hidden />
      <div className="pro-hills pro-hills-back" aria-hidden />
      <div className="pro-hills pro-hills-front" aria-hidden />
      <div className="pro-driveway" aria-hidden />

      <svg className="pro-energy-line pro-line-sun" viewBox="0 0 460 250" aria-hidden>
        <path d="M40 74 C130 92 171 112 218 138 C271 168 327 174 414 198" />
      </svg>
      <svg className="pro-energy-line pro-line-house" viewBox="0 0 360 260" aria-hidden>
        <path d="M125 20 C125 70 123 104 120 134 C116 178 178 190 255 196" />
      </svg>
      <svg className="pro-energy-line pro-line-ev" viewBox="0 0 360 180" aria-hidden>
        <path d="M36 74 C96 89 142 92 188 91 C233 90 258 108 320 126" />
      </svg>

      <div className="pro-house" aria-hidden>
        <div className="pro-roof-back" />
        <div className="pro-roof" />
        <div className="pro-solar-panels">
          {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
        </div>
        <div className="pro-house-body" />
        <div className="pro-glass pro-glass-left" />
        <div className="pro-glass pro-glass-right" />
        <div className="pro-garage" />
      </div>

      <div className="pro-inverter" aria-hidden><span /></div>
      <div className="pro-battery" aria-hidden>
        <strong>STELLAR</strong>
        <div className="pro-battery-fill" />
        <BatteryCharging size={34} />
      </div>
      <div className="pro-charger" aria-hidden><span /></div>
      <div className="pro-cable" aria-hidden />
      <div className="pro-car" aria-hidden>
        <div className="pro-car-top" />
        <div className="pro-car-body" />
        <div className="pro-light" />
        <div className="pro-wheel pro-wheel-left" />
        <div className="pro-wheel pro-wheel-right" />
      </div>

      <div className="pro-live-card pro-card-generation">
        <span>Solar Generation</span>
        <strong>8.2 kW</strong>
        <em>Live roof production</em>
      </div>
      <div className="pro-live-card pro-card-storage">
        <span>Battery Storage</span>
        <strong>86%</strong>
        <em>Charging from solar</em>
      </div>

      <div className="pro-timeline">
        <Step number="01" title="Sunrise" text="Clean energy starts" />
        <Step number="02" title="Solar Power" text="Capture the sun" />
        <Step number="03" title="Store" text="Battery backup" />
        <Step number="04" title="EV Charging" text="Power your drive" />
      </div>
    </div>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="pro-step">
      <span>{number}</span>
      <strong>{title}</strong>
      <em>{text}</em>
    </div>
  );
}

function TrustItem({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.065] p-3 backdrop-blur">
      <div className="flex items-center gap-2 text-white">
        <span className="text-solar-300">{icon}</span>
        <strong className="text-sm font-semibold">{title}</strong>
      </div>
      <p className="mt-1 text-xs text-white/50">{text}</p>
    </div>
  );
}
