import { Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink py-14">
      <div className="max-w-content mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <a href="#top" className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-solar-400">
            <Sun size={16} strokeWidth={2.25} />
          </span>
          Stellar Solar
        </a>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[14px] text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">How it works</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <p className="text-[13px] text-white/35">
          &copy; {new Date().getFullYear()} Stellar Solar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
