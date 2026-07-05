export default function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 font-semibold tracking-tight">
      <span className="relative h-11 w-11 shrink-0 text-solar-400" aria-hidden>
        <span className="absolute left-2 top-1 h-5 w-7 rounded-t-full bg-solar-400 shadow-[0_0_18px_rgba(255,171,99,.55)]" />
        <span className="absolute left-0 top-6 h-[1.8px] w-11 bg-white/80" />
        <span className="absolute left-2 top-7 h-[1.8px] w-7 bg-white/80" />
        <span className="absolute left-4 top-9 h-[1.8px] w-4 bg-white/80" />
        <span className="absolute left-[8px] top-[25px] h-4 w-[1.8px] rotate-[15deg] bg-white/80" />
        <span className="absolute left-[32px] top-[25px] h-4 w-[1.8px] rotate-[-15deg] bg-white/80" />
        <span className="absolute left-1 top-0 h-[1.5px] w-3 rotate-[-35deg] bg-solar-400" />
        <span className="absolute left-[20px] -top-1 h-3 w-[1.5px] bg-solar-400" />
        <span className="absolute right-1 top-0 h-[1.5px] w-3 rotate-[35deg] bg-solar-400" />
      </span>
      <span className="leading-[0.92] tracking-[0.18em] uppercase">
        <span className={dark ? "block text-white" : "block text-white"}>Stellar</span>
        <span className="block text-solar-400">Solar</span>
      </span>
    </span>
  );
}
