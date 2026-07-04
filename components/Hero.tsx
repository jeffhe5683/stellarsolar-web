import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden bg-ink pt-16"
    >
      {/* Dawn sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0A0E12 0%, #12202E 38%, #1E3A52 62%, #5A7A8F 78%, #F2A45C 100%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 overflow-hidden" aria-hidden><div className="light-sweep absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"/></div>
      {/* Ambient glow behind the sun */}
      <div
        className="absolute left-1/2 top-[52%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar-400/40 blur-[90px] animate-glow"
        aria-hidden
      />

      {/* Sun disc */}
      <div
        className="absolute left-1/2 top-[54%] h-28 w-28 md:h-36 md:w-36 -translate-x-1/2 -translate-y-1/2 rounded-full animate-rise solar-spin hero-float"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #FFE3BE 0%, #FFAB63 45%, #F2721A 100%)",
          boxShadow: "0 0 60px 10px rgba(255,145,66,0.45)",
        }}
        aria-hidden
      />

      {/* Horizon + panel silhouettes */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden
      >
        <rect x="0" y="120" width="1440" height="100" fill="#0A0E12" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 130 - 40}, 70)`}>
            <polygon
              points="0,60 90,60 120,110 30,110"
              fill="#141B22"
              stroke="#22303B"
              strokeWidth="1"
            />
            <line x1="15" y1="72" x2="105" y2="72" stroke="#22303B" />
            <line x1="22" y1="86" x2="112" y2="86" stroke="#22303B" />
            <line x1="28" y1="100" x2="118" y2="100" stroke="#22303B" />
          </g>
        ))}
      </svg>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-content w-full mx-auto px-6 lg:px-8 pb-28">
        <p className="text-solar-200 text-sm font-medium tracking-wide mb-5">
          Residential &amp; commercial solar
        </p>
        <h1 className="text-white font-semibold tracking-tightest leading-[0.98] text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl">
          Your roof has a
          <br />
          second job.
        </h1>
        <p className="mt-7 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
          Stellar Solar designs, installs, and maintains solar and battery
          systems sized for how you actually live — not a brochure.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="group glow-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink hover:bg-solar-50 transition-all duration-300 focus-ring"
          >
            Get a Free Quote
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium text-white hover:bg-white/10 transition-colors focus-ring"
          >
            See how it works
          </a>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="relative z-10 self-center mb-8 text-white/60 hover:text-white transition-colors animate-bounce focus-ring rounded-full"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
