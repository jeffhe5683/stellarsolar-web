"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const address = String(data.get("address") || "").trim();

    if (!name) next.name = "Enter your name.";
    if (!email) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!address) next.address = "Enter your address so we can check your roof.";

    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    // Simulated submit — wire this up to your backend or form service.
    window.setTimeout(() => {
      setStatus("success");
    }, 900);
  }

  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          <Reveal className="lg:col-span-2">
            <p className="text-solar-600 text-sm font-medium tracking-wide mb-4">
              Get in touch
            </p>
            <h2 className="text-4xl font-semibold tracking-tightest text-ink leading-tight">
              Let&rsquo;s see what your roof can do.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-sm">
              Tell us a bit about your home and someone from our design team
              will follow up with a free, no-pressure quote.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-slate-700 hover:text-ink transition-colors focus-ring rounded-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-line">
                  <Phone size={16} />
                </span>
                (800) 555-1234
              </a>
              <a
                href="mailto:hello@stellarsolar.example"
                className="flex items-center gap-3 text-slate-700 hover:text-ink transition-colors focus-ring rounded-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-line">
                  <Mail size={16} />
                </span>
                hello@stellarsolar.example
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-line">
                  <MapPin size={16} />
                </span>
                Serving the greater metro area
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={100}>
            {status === "success" ? (
              <div className="rounded-3xl border border-line bg-paper p-10 flex flex-col items-start">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-solar-50 text-solar-600 mb-5">
                  <CheckCircle2 size={24} />
                </span>
                <h3 className="text-xl font-semibold text-ink">
                  Request received.
                </h3>
                <p className="mt-2 text-slate-600 max-w-sm">
                  A member of our team will reach out within one business day
                  with your free quote.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid sm:grid-cols-2 gap-5"
              >
                <Field
                  label="Full name"
                  name="name"
                  autoComplete="name"
                  error={errors.name}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={errors.email}
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="sm:col-span-2"
                  required={false}
                />
                <Field
                  label="Property address"
                  name="address"
                  autoComplete="street-address"
                  className="sm:col-span-2"
                  error={errors.address}
                />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="block text-[13px] font-medium text-slate-700 mb-2"
                  >
                    I&rsquo;m interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Solar Installation"
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink focus-ring focus:outline-none"
                  >
                    <option>Solar Installation</option>
                    <option>Battery Storage</option>
                    <option>Maintenance &amp; Monitoring</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-slate-700 mb-2"
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink focus-ring focus:outline-none resize-none"
                    placeholder="Roof age, recent electric bill, timeline — whatever's helpful."
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-white hover:bg-ink-soft transition-colors focus-ring disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Request my free quote"}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  className = "",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-[13px] font-medium text-slate-700 mb-2"
      >
        {label}
        {required && <span className="text-solar-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-paper px-4 py-3 text-[15px] text-ink focus-ring focus:outline-none ${
          error ? "border-red-400" : "border-line"
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-[13px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
