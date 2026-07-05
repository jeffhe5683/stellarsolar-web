import type { ReactNode } from "react";
import { ArrowRight, BatteryCharging, Leaf, MonitorSmartphone, ShieldCheck, Sun, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#05070A] text-white">
      <div className="absolute inset-0 hero-v2-bg" aria-hidden />
      <div className="absolute inset-0 hero-v2-shade" aria-hidden />

      <div className="absolute left-[31%] top-[35%] z-[3] hidden h-[18px] w-[18px] rounded-full bg-[#fff7cf] shadow-[0_0_48px_18px_rgba(255,190,73,.9)] lg:block hero-v2-sun-dot" aria-hidden />
      <div className="absolute left-[34%] top-[36%] z-[3] hidden h-[3px] w-[26vw] origin-left rotate-[-12deg] rounded-full bg-gradient-to-r from-[#fff7cf] via-[#ffb82e] to-transparent shadow-[0_0_22px_rgba(255,184,46,1)] lg:block hero-v2-flow hero-v2-flow-one" aria-hidden />
      <div className="absolute right-[44.5%] top-[38%] z-[3] hidden h-[27%] w-[3px] rounded-full bg-gradient-to-b from-[#fff7cf] via-[#ffb82e] to-transparent shadow-[0_0_22px_rgba(255,184,46,1)] lg:block hero-v2-flow hero-v2-flow-two" aria-hidden />
      <div className="absolute right-[23%] bottom-[29%] z-[3] hidden h-[3px] w-[28vw] rounded-full bg-gradient-to-r from-[#ffb82e] via-[#fff1ad] to-transparent shadow-[0_0_22px_rgba(255,184,46,1)] lg:block hero-v2-flow hero-v2-flow-three" aria-hidden />

      <div className="relative z-10 flex min-h-screen items-center px-6 pb-40 pt-32 lg:px-14 xl:px-20">
        <div className="max-w-[650px]">
          <div className="mb-7 text-sm font-semibold uppercase tracking-[0.24em] text-solar-300 drop-shadow-[0_4px_16px_rgba(0,0,0,.75)] animate-fade-up">
            Smart Energy Solutions
          </div>

          <h1 className="text-[13vw] font-bold leading-[0.94] tracking-tight text-white drop-shadow-[0_12px_36px_rgba(0,0,0,.75)] sm:text-6xl md:text-7xl lg:text-[5.25rem] animate-fade-up animation-delay-100">
            Smart Energy.<br />
            Brighter Future<span className="text-solar-400">.</span>
          </h1>

          <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-white/90 drop-shadow-[0_6px_22px_rgba(0,0,0,.8)] md:text-xl animate-fade-up animation-delay-200">
            Integrated solar, battery and EV charging solutions for homes and businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up animation-delay-300">
            <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-solar-400 px-8 py-4 text-[15px] font-semibold text-ink shadow-[0_24px_60px_-22px_rgba(255,171,99,.95)] transition-all hover:-translate-y-0.5 hover:bg-solar-300 focus-ring">
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-11 grid max-w-[560px] grid-cols-3 gap-0 rounded-3xl border border-white/10 bg-black/18 py-5 text-center shadow-[0_25px_80px_-55px_rgba(0,0,0,1)] backdrop-blur-sm animate-fade-up animation-delay-400">
            <MiniService icon={<Sun size={34} />} title="Solar Power" subtitle="Clean & Renewable" />
            <MiniService icon={<BatteryCharging size={34} />} title="Battery Storage" subtitle="Store Energy" bordered />
            <MiniService icon={<Zap size={34} />} title="EV Charging" subtitle="Power Your Drive" bordered />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#05070A]/90 px-6 py-7 backdrop-blur-xl lg:px-14 xl:px-20">
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
      <div className="mx-auto mb-3 grid h-14 w-14 place-items-center text-solar-300 drop-shadow-[0_0_24px_rgba(255,171,99,.6)]">
        {icon}
      </div>
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-sm text-white/70">{subtitle}</p>
    </div>
  );
}

function Benefit({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-5 border-white/10 md:border-r md:pr-6 last:border-r-0">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-solar-400/80 text-solar-300 shadow-[0_0_30px_-14px_rgba(255,171,99,1)]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/64">{text}</p>
      </div>
    </div>
  );
}
