import { MapPin, ShieldCheck, Star, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  { icon: MapPin, title: "Local Adelaide team", text: "Service focused on Adelaide homes, small businesses and South Australian energy needs." },
  { icon: ShieldCheck, title: "Professional installation", text: "Tidy workmanship, safe commissioning and clear handover for every customer." },
  { icon: Star, title: "Premium brand feel", text: "A website style that builds trust quickly and makes Stellar Solar look established." },
  { icon: Wrench, title: "Solar + battery support", text: "From design to monitoring, maintenance and future upgrade planning." },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#090D12] py-28 text-white md:py-36">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(255,171,99,.20),transparent_28rem)]" aria-hidden />
      <div className="relative mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-solar-300">About Stellar Solar</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tightest md:text-5xl">
            Built to look like a serious solar brand from day one.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/62">
            The website follows the reference image: cinematic house background, warm solar glow, clear service blocks and a direct quote journey.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 90}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-solar-400/10 text-solar-300 ring-1 ring-solar-300/25">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
