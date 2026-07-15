import { createFileRoute, Link } from "@tanstack/react-router";
import { Mascot } from "@/components/site/Mascot";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About LYF SAVER — Final Year Project Experts" },
      {
        name: "description",
        content: "Meet the team behind LYF SAVER, a final year project development service trusted by engineering students across CSE, AIML, Data Science & more.",
      },
      { property: "og:title", content: "About LYF SAVER" },
      { property: "og:description", content: "A student-run team building final year projects — done right, for less." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">About us</p>
      <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">Why students choose LYF SAVER</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-4 text-muted-foreground">
          <p>
            LYF SAVER started because we've been there. Final year comes with placement stress, backlogs,
            fests, family — and a project deadline that just won't move. Every vendor quotes too high,
            every "senior" is too busy, and college guides expect a report that could double as a book.
          </p>
          <p>
            We're a small team of engineers and designers who've shipped 500+ final year projects across
            CSE, ISE, AIML, Data Science, CSBS and Electronics. We build clean, working projects — with
            reports and PPTs your guide will actually approve — and we price them lower than whatever
            quote you've been given elsewhere.
          </p>
          <p>
            No agencies. No AI-slop reports. Just real developers, calm timelines, and one promise:
            <strong className="text-navy"> Your Project. Our Promise.</strong>
          </p>
        </div>
        <Mascot size={200} />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          { k: "500+", v: "Projects delivered" },
          { k: "7", v: "Domains covered" },
          { k: "10–20%", v: "Cheaper than any quote" },
        ].map((s) => (
          <div key={s.v} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
            <div className="text-3xl font-black text-navy">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/contact" className="inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card">
          Work with us
        </Link>
      </div>
    </div>
  );
}