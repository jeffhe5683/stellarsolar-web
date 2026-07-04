import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Roof & bill review", description: "We check usage patterns, roof direction, shade and the customer’s real goals before recommending a system." },
  { n: "02", title: "Custom solar design", description: "Panel layout, inverter sizing and battery options are designed around the property, not a generic package." },
  { n: "03", title: "Clean installation", description: "Licensed installation with tidy cable runs, proper labelling, commissioning and safety checks." },
  { n: "04", title: "Handover & support", description: "Customers get monitoring setup, a simple explanation and ongoing support when they need it." },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="absolute inset-0 solar-grid opacity-15" aria-hidden />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-solar-500/15 blur-[120px]" aria-hidden />
      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-solar-400 text-sm font-medium tracking-wide mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-tight">
            A process that feels organised from the first call.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid md:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-solar-400/10 text-sm font-medium text-solar-300 ring-1 ring-solar-300/20">
                  {step.n}
                </span>
                <h3 className="mt-8 text-white text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
