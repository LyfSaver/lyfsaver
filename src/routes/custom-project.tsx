import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mascot } from "@/components/site/Mascot";
import { toast } from "sonner";

export const Route = createFileRoute("/custom-project")({
  head: () => ({
    meta: [
      { title: "Custom Final Year Project Development | LYF SAVER" },
      {
        name: "description",
        content:
          "Have your own final year project idea? LYF SAVER builds 100% custom projects for CSE, AIML, Data Science & more — at a price lower than any quote you've received.",
      },
      { property: "og:title", content: "Custom Final Year Project Development" },
      { property: "og:description", content: "Tell us your idea — we'll build it and beat any quote." },
      { property: "og:url", content: "/custom-project" },
    ],
    links: [{ rel: "canonical", href: "/custom-project" }],
  }),
  component: CustomProject,
});

function CustomProject() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Custom project</p>
          <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">Got your own idea? We'll build it.</h1>
          <p className="mt-3 text-muted-foreground">
            Tell us the domain, rough idea, deadline and budget. We'll come back with a quote — always
            cheaper than any other quotation you've received, with full report, PPT and viva prep.
          </p>
          <Mascot size={220} className="mt-6 hidden md:block" />
        </div>
        <form
          className="rounded-3xl border border-border bg-card p-6 shadow-glow"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            toast.success("Got it! We'll get back to you within 24 hours.");
          }}
        >
          <Field label="Your name">
            <input required className="input" placeholder="e.g. Aditi Sharma" />
          </Field>
          <Field label="Email or WhatsApp">
            <input required className="input" placeholder="you@college.edu / +91…" />
          </Field>
          <Field label="Domain">
            <select required className="input">
              <option value="">Select a domain</option>
              <option>CSE / ISE / CSBS</option>
              <option>AIML</option>
              <option>Data Science</option>
              <option>ECE / EEE (Electronics)</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Your idea (2–3 lines)">
            <textarea required rows={4} className="input" placeholder="A short summary of your project idea" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Deadline">
              <input required type="date" className="input" />
            </Field>
            <Field label="Budget (₹)">
              <input type="number" className="input" placeholder="e.g. 8000" />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-navy py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
          >
            {submitted ? "Sent — thank you!" : "Send request"}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Prefer to chat? <Link to="/contact" className="font-semibold text-navy underline">Message us</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="text-xs font-semibold text-navy/70">{label}</span>
      <div className="mt-1">{children}</div>
      <style>{`
        .input { width: 100%; border-radius: 0.75rem; border: 1px solid var(--color-input); background: var(--color-background); padding: 0.75rem 1rem; font-size: 0.875rem; color: var(--foreground); outline: none; }
        .input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px oklch(0.8 0.16 78 / 0.35); }
      `}</style>
    </label>
  );
}