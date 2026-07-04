# Stellar Solar

A modern, Apple-inspired marketing site for a fictional solar company, built with Next.js (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## What's included

- **Hero** — full-viewport section with an animated dawn horizon (ambient sun glow + solar-panel silhouettes), headline, and two CTAs.
- **Services** — Solar Installation, Battery Storage, and Maintenance & Monitoring, each with detail points and a "Get a quote" link.
- **Process** — the real four-step sequence from consultation to monitoring.
- **Stats** — quick proof points (installs, output, warranty, rating).
- **CTA banner** — secondary conversion moment before the contact form.
- **Contact form** — client-side validated form (name, email, phone, address, service interest, message) with a success state. Currently simulates submission — wire the `handleSubmit` function in `components/ContactForm.tsx` up to your backend, form service (e.g. Formspree, Resend), or API route.
- **Smooth scroll + scroll-reveal animations** — anchor nav links scroll smoothly; sections fade/slide into view on scroll via `components/Reveal.tsx` (respects `prefers-reduced-motion`).
- **Fully responsive** — mobile nav menu, fluid type scale, stacked layouts on small screens.

## Structure

```
app/
  layout.tsx      — root layout, font loading, metadata
  page.tsx         — assembles all sections
  globals.css      — base styles, smooth scroll, reveal animation utilities
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  Process.tsx
  Stats.tsx
  CTASection.tsx
  ContactForm.tsx
  Footer.tsx
  Reveal.tsx       — scroll-reveal wrapper (IntersectionObserver)
tailwind.config.ts — design tokens (colors, type scale, keyframes)
```

## Customizing

- **Colors**: edit the `solar`, `sky`, and `ink` palettes in `tailwind.config.ts`.
- **Copy**: all text lives directly in the component files — no CMS layer.
- **Contact info**: update the phone/email/address in `components/ContactForm.tsx`.
- **Form backend**: replace the `setTimeout` simulation in `ContactForm.tsx`'s `handleSubmit` with a real request (e.g. `fetch('/api/contact', ...)` or a form service).
