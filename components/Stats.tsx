import Reveal from "./Reveal";

const stats = [
  { value: "1,200+", label: "Systems installed" },
  { value: "4.6M kWh", label: "Generated in 2025" },
  { value: "25 yr", label: "Panel performance warranty" },
  { value: "9.4 / 10", label: "Average customer rating" },
];

export default function Stats() {
  return (
    <section id="results" className="bg-paper py-24 border-y border-line">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <p className="text-3xl md:text-4xl font-semibold tracking-tightest text-ink">
                  {s.value}
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
