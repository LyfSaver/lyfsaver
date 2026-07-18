import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { BeatMyQuote } from "@/components/site/BeatMyQuote";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Final Year Project Pricing — We Beat Any Quote | LYF SAVER" },
      {
        name: "description",
        content:
          "See what's included in every LYF SAVER final year project package, and use our Beat My Quote calculator to see how much you'll save.",
      },
      { property: "og:title", content: "Final Year Project Pricing — LYF SAVER" },
      {
        property: "og:description",
        content: "Every package includes source code, report, PPT & viva prep.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const included = [
  "Full working source code",
  "College-format project report",
  "PPT slide deck",
  "Demo video walkthrough",
  "Viva Q&A prep sheet",
  "Free revisions till submission",
  "Weekly progress updates",
  "Setup / installation guide",
];

function Pricing() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Pricing</p>
      <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">
        Affordable final year projects — full support included.
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        We don't do fixed price tags — every project is priced against your quote and scope, and we
        beat it by 10–20%. Here's exactly what's included in every project, whatever the price.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-xl font-bold text-navy">What's always included</h2>
          <ul className="mt-4 space-y-3">
            {included.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 text-gold" size={18} />
                <span className="text-navy">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-muted p-4 text-sm text-muted-foreground">
            No hidden add-ons. If your college needs a specific format, we adapt at no extra cost.
          </div>
        </div>
        <BeatMyQuote />
      </div>

      <div className="mt-12 rounded-3xl bg-hero p-8 text-primary-foreground shadow-glow">
        <h2 className="text-2xl font-black">
          Refer a friend — <span className="text-gold">both save 8%</span>
        </h2>
        <p className="mt-2 max-w-xl text-primary-foreground/80">
          Book together with a friend and we discount both projects by 8%. Ask us for your referral
          code.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy"
        >
          Claim referral discount
        </Link>
      </div>
    </div>
  );
}
