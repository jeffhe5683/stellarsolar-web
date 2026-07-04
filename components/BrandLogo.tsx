import { Sun } from "lucide-react";

export default function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <span
        className={`relative flex h-8 w-8 items-center justify-center rounded-full border ${
          dark
            ? "border-white/15 bg-white/10 text-solar-400"
            : "border-ink/10 bg-ink text-solar-400"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-solar-400/20 blur-sm animate-pulse-slow" />
        <Sun size={17} strokeWidth={2.3} className="relative animate-spin-slow" />
      </span>
      <span className={dark ? "text-white" : "text-ink"}>
        Stellar S<span className="text-solar-500">o</span>lar
      </span>
    </span>
  );
}
