import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="bg-paper py-4 md:py-8">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 md:px-20 md:py-24 text-center">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-solar-500/30 blur-[100px]"
              aria-hidden
            />
            <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tightest text-white max-w-2xl mx-auto leading-tight">
              See what your roof is worth in sunlight.
            </h2>
            <p className="relative mt-5 text-white/65 max-w-lg mx-auto">
              A free quote takes about ten minutes and comes with a real
              design, not a rough estimate.
            </p>
            <a
              href="#contact"
              className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-medium text-ink hover:bg-solar-50 transition-colors focus-ring"
            >
              Get a Free Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
