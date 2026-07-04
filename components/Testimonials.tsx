import { Star } from "lucide-react";
import Reveal from "./Reveal";

const quotes = [
  {
    quote: "Clean installation, clear communication and a system that looks like it belongs on the house.",
    name: "Residential customer",
    area: "Adelaide suburbs",
  },
  {
    quote: "The design made sense for our usage, not just the biggest system they could sell us.",
    name: "Battery customer",
    area: "South Australia",
  },
  {
    quote: "Fast quote, tidy work and everything explained before handover.",
    name: "Small business owner",
    area: "Metro Adelaide",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-solar-600 text-sm font-medium tracking-wide mb-4">Customer confidence</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-ink leading-tight">A premium website should build trust fast.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <figure className="h-full rounded-3xl border border-line bg-white p-7 shadow-[0_18px_60px_-45px_rgba(10,14,18,0.4)]">
                <div className="mb-5 flex gap-1 text-solar-500" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="text-lg leading-relaxed text-ink">“{q.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-slate-600">
                  <span className="font-medium text-ink">{q.name}</span><br />{q.area}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
