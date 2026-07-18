import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardCheck,
  Handshake,
  Hammer,
  MessagesSquare,
  Presentation,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How LYF SAVER Final Year Project Help Works" },
      {
        name: "description",
        content:
          "From idea to viva — see exactly how LYF SAVER builds your final year project with full support, reports, and PPT included.",
      },
      { property: "og:title", content: "How LYF SAVER Works" },
      {
        property: "og:description",
        content: "5 steps from your idea to a submission-ready final year project.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: ClipboardCheck,
    title: "Pick or suggest a project",
    body: "Browse our 150+ ideas or send us your own. Any domain, any stack.",
  },
  {
    icon: Handshake,
    title: "Get a quote we beat",
    body: "Send your existing quote — we'll price the same scope 10–20% lower.",
  },
  {
    icon: Hammer,
    title: "We build with weekly updates",
    body: "You get progress calls, demos and Git access every week.",
  },
  {
    icon: Presentation,
    title: "Report, PPT & demo video",
    body: "College-format report, a real PPT deck and a walkthrough video.",
  },
  {
    icon: MessagesSquare,
    title: "Viva prep session",
    body: "A Q&A sheet plus a mock viva so you walk in confident.",
  },
  {
    icon: Truck,
    title: "Delivery + free revisions",
    body: "Everything handed over. Free tweaks till your submission day.",
  },
];

function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Process</p>
      <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">How it works</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        A calm, predictable process built around your college deadlines — no surprises, no
        last-minute panic.
      </p>
      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-sm font-black text-navy">
                {i + 1}
              </span>
              <s.icon className="text-navy" size={22} />
            </div>
            <h2 className="mt-3 text-lg font-bold text-navy">{s.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 rounded-3xl bg-navy p-8 text-center text-primary-foreground">
        <h2 className="text-2xl font-black">Send us your quote — we'll beat it.</h2>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-glow"
        >
          Get my price
        </Link>
      </div>
    </div>
  );
}
