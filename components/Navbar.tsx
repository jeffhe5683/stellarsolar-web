"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How it works" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-ink focus-ring rounded-sm"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-solar-400">
            <Sun size={16} strokeWidth={2.25} className="solar-spin" />
          </span>
          Stellar S☀lar
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-slate-700 hover:text-ink transition-colors focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white hover:bg-ink-soft transition-colors focus-ring"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden text-ink focus-ring rounded-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[17px] text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center items-center rounded-full bg-ink px-5 py-3 text-[15px] font-medium text-white"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
