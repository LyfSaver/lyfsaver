import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { findProject, getCategory } from "@/data/projects";

export const Route = createFileRoute("/projects/$category/$slug")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    const project = findProject(params.category, params.slug);
    if (!cat || !project) throw notFound();
    return { cat, project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — LYF SAVER" }, { name: "robots", content: "noindex" }] };
    }
    const { project, cat } = loaderData;
    const title = `${project.title} — Final Year Project with Source Code | LYF SAVER`;
    const desc = `${project.title}: a ${cat.short} final year project built with ${project.stack.join(", ")}. Full source code, report, PPT & viva prep included.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${cat.key}/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${cat.key}/${project.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Projects", item: "/projects" },
              { "@type": "ListItem", position: 3, name: cat.short, item: `/projects/${cat.key}` },
              { "@type": "ListItem", position: 4, name: project.title, item: `/projects/${cat.key}/${project.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { cat, project } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <nav className="text-xs text-muted-foreground">
        <Link to="/">Home</Link> <span className="mx-1">/</span>{" "}
        <Link to="/projects">Projects</Link> <span className="mx-1">/</span>{" "}
        <Link to="/projects/$category" params={{ category: cat.key }}>
          {cat.short}
        </Link>{" "}
        <span className="mx-1">/</span> <span className="text-navy">{project.title}</span>
      </nav>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">{cat.short}</p>
      <h1 className="mt-1 text-3xl font-black text-navy md:text-4xl">{project.title}</h1>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="rounded-full bg-navy/5 px-2.5 py-1 text-xs font-semibold text-navy">
            {s}
          </span>
        ))}
      </div>

      <div className="prose prose-slate mt-8 max-w-none">
        <h2 className="text-xl font-bold text-navy">About this project</h2>
        <p className="text-muted-foreground">
          {project.title} is a complete final year {cat.short} project designed for engineering students
          who need a submission-ready build. We handle everything — architecture, coding, testing,
          documentation and viva prep — using {project.stack.join(", ")}. The scope, features and
          deliverables can be tailored to your college's rubric and your guide's expectations.
        </p>
        <p className="text-muted-foreground">
          Whether you were quoted ₹8,000 or ₹25,000 elsewhere, we'll build the same scope for less
          without cutting corners on quality. All source code is clean, commented and handed over with
          a setup guide so you can run and demo it in front of your panel with confidence.
        </p>

        <h2 className="mt-8 text-xl font-bold text-navy">What you get</h2>
        <ul className="not-prose mt-3 space-y-2">
          {[
            "Complete working source code with README",
            "Project report as per your college format",
            "PPT slide deck (designed, not templated)",
            "Demo video walkthrough",
            "Viva Q&A prep sheet",
            "Free revisions until submission",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 text-gold" size={18} />
              <span className="text-navy">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-3xl bg-hero p-8 text-primary-foreground shadow-glow">
        <h2 className="text-2xl font-black">Ready to get this built?</h2>
        <p className="mt-2 text-primary-foreground/80">
          Send us your existing quote or your college rubric — we'll come back with a lower, exact price.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-navy shadow-glow">
            Get exact quote
          </Link>
          <Link
            to="/projects/$category"
            params={{ category: cat.key }}
            className="rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            More {cat.short} ideas
          </Link>
        </div>
      </div>
    </div>
  );
}