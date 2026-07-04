"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-line shadow-[0_10px_35px_-28px_rgba(10,14,18,0.55)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#top" className="focus-ring rounded-sm" aria-label="Stellar Solar home">
          <BrandLogo />
        </a>

        <div className="hidden md:flex items-center gap-7 rounded-full border border-white/10 bg-white/40 px-5 py-2 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-slate-700 hover:text-ink transition-colors focus-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white hover:bg-ink-soft hover:shadow-[0_12px_30px_-18px_rgba(10,14,18,0.8)] transition-all focus-ring"
        >
          Free Quote
        </a>

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
        <div className="md:hidden bg-paper/95 backdrop-blur-xl border-t border-line px-6 py-6 flex flex-col gap-5 shadow-xl">
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
            Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
