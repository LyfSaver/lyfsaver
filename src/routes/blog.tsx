import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Final Year Project Guides & Ideas — LYF SAVER Blog" },
      {
        name: "description",
        content:
          "Free guides, ideas, and templates for final year projects — pricing, domain-wise ideas, report formats, and more.",
      },
      { property: "og:title", content: "LYF SAVER Blog — Final Year Project Guides & Tips" },
      { property: "og:description", content: "Free guides for final year projects." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "50+ Final Year Project Ideas for CSE Students (2026)", tag: "Ideas" },
  { title: "How Much Does a Final Year Project Cost? Full Price Guide", tag: "Pricing" },
  { title: "AIML Final Year Project Ideas with Source Code", tag: "AIML" },
  { title: "MERN vs Java: Which Stack for Your Final Year Project?", tag: "Stacks" },
  { title: "Final Year Project Report Format — Free Template", tag: "Reports" },
  { title: "Top Flutter Project Ideas for Final Year Students", tag: "Flutter" },
];

function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Resources</p>
      <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">
        Final year project resources & ideas
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Guides, templates and idea lists to help you pick, plan and ship your final year project.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
          >
            <span className="rounded-full bg-navy/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
              {p.tag}
            </span>
            <h2 className="mt-3 text-base font-bold text-navy">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Coming soon — subscribe below for launch.
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-3xl border border-border bg-card p-8 text-center shadow-card">
        <h2 className="text-2xl font-black text-navy">Want these guides first?</h2>
        <p className="mt-2 text-muted-foreground">DM us on Instagram — we'll send the beta.</p>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
