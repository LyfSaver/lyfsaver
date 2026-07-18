import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Final Year Project Ideas 2026 — CSE, AIML, Data Science, Web & App | LYF SAVER" },
      {
        name: "description",
        content:
          "Browse 150+ final year project ideas across CSE, AIML, Data Science, MERN, Java, Flutter & Digital Electronics — with source code, report & PPT.",
      },
      { property: "og:title", content: "Final Year Project Ideas — LYF SAVER" },
      {
        property: "og:description",
        content: "150+ project ideas across CSE, AIML, DS, MERN, Java, Flutter & IoT.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <nav className="text-xs text-muted-foreground">
        <Link to="/">Home</Link> <span className="mx-1">/</span> Projects
      </nav>
      <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">
        Final year project ideas for every domain
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        150+ ideas across CSE, ISE, AIML, Data Science, CSBS and ECE. Pick one — or send us your own
        — and we'll build it for less than any quote you've received.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <a
            key={c.key}
            href={`#${c.key}`}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-navy hover:border-gold"
          >
            {c.short}
          </a>
        ))}
      </div>

      {categories.map((c) => {
        const list = projects.filter((p) => p.category === c.key);
        return (
          <section key={c.key} id={c.key} className="mt-16 scroll-mt-24">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {c.short}
                </p>
                <h2 className="mt-1 text-2xl font-black text-navy md:text-3xl">{c.name}</h2>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{c.tagline}</p>
              </div>
              <Link
                to="/projects/$category"
                params={{ category: c.key }}
                className="hidden text-sm font-semibold text-navy underline underline-offset-4 md:inline"
              >
                View all →
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.slice(0, 6).map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$category/$slug"
                  params={{ category: p.category, slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
                >
                  <h3 className="text-base font-bold text-navy group-hover:text-navy">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-navy/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to="/projects/$category"
                params={{ category: c.key }}
                className="inline-block text-sm font-semibold text-navy underline underline-offset-4"
              >
                See all {list.length} {c.short} ideas →
              </Link>
            </div>
          </section>
        );
      })}

      <div className="mt-16 rounded-3xl bg-navy p-8 text-center text-primary-foreground">
        <h2 className="text-2xl font-black">Don't see your exact idea?</h2>
        <p className="mx-auto mt-2 max-w-xl text-primary-foreground/75">
          We build 100% custom final year projects too — tell us the idea, deadline and budget.
        </p>
        <Link
          to="/custom-project"
          className="mt-5 inline-block rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-glow"
        >
          Build a custom project
        </Link>
      </div>
    </div>
  );
}
