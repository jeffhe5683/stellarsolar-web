import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consultation",
    description:
      "We look at your roof, your bill, and your goals, then tell you honestly whether solar makes sense for your home.",
  },
  {
    n: "02",
    title: "Custom design",
    description:
      "Our engineers lay out panels and battery capacity around your actual roof geometry and usage — not a standard package.",
  },
  {
    n: "03",
    title: "Installation",
    description:
      "Licensed crews install and permit the system, typically in one to two days, then walk you through how it works.",
  },
  {
    n: "04",
    title: "Monitoring",
    description:
      "Your system reports performance to our team continuously, so if output ever dips, we usually catch it before you do.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-solar-400 text-sm font-medium tracking-wide mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-white max-w-2xl leading-tight">
            From first call to full power, in four steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 90}>
              <div className="flex gap-6 border-t border-white/10 pt-6">
                <span className="text-solar-400/70 text-sm font-medium tracking-wide pt-1">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-white text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-white/60 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
