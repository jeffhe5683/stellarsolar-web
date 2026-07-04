import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { to: 1200, suffix: "+", label: "Systems installed" },
  { to: 4.6, suffix: "M kWh", label: "Clean energy generated", decimals: 1 },
  { to: 25, suffix: " yr", label: "Panel performance warranty" },
  { to: 9.4, suffix: "/10", label: "Average customer rating", decimals: 1 },
];

export default function Stats() {
  return (
    <section id="results" className="relative overflow-hidden bg-paper py-24 border-y border-line">
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-solar-50 to-transparent" aria-hidden />
      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-solar-600 text-sm font-medium tracking-wide mb-3">Results</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest text-ink leading-tight">Performance you can show clients.</h2>
            </div>
            <p className="max-w-md text-slate-600 leading-relaxed">Use these numbers as placeholders now. Replace them later with your real installations, ratings and generation data.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full rounded-3xl border border-line bg-white p-6 shadow-[0_18px_60px_-45px_rgba(10,14,18,0.4)]">
                <p className="text-3xl md:text-4xl font-semibold tracking-tightest text-ink">
                  <AnimatedCounter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </p>
                <p className="mt-2 text-sm text-slate-600">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
