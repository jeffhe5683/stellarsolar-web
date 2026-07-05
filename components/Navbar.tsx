"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Solar" },
  { href: "#battery", label: "Battery" },
  { href: "#ev", label: "EV Charging" },
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const onScroll = () => {
      const current = ids.findLast((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top <= 120 : false;
      });
      if (current) setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070A]/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-7 lg:px-10 xl:px-12">
        <a href="#top" className="focus-ring rounded-sm" aria-label="Stellar Solar home">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`relative pb-2 text-[15px] transition-colors focus-ring rounded-sm ${active === l.href ? "text-solar-300" : "text-white/82 hover:text-white"}`}>
              {l.label}
              {active === l.href && <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-solar-400" />}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-xl bg-solar-400 px-7 py-3.5 text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-solar-300 md:inline-flex focus-ring">
          Get a Quote
        </a>

        <button className="text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#05070A]/96 px-7 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/82">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl bg-solar-400 px-5 py-3 text-center font-semibold text-ink">Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
