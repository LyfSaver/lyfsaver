import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, projectsByCategory, type CategoryKey } from "@/data/projects";

export const Route = createFileRoute("/projects/$category/")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found — LYF SAVER" }, { name: "robots", content: "noindex" }],
      };
    }
    const { cat } = loaderData;
    return {
      meta: [
        { title: cat.seoTitle },
        { name: "description", content: cat.seoDescription },
        { property: "og:title", content: cat.seoTitle },
        { property: "og:description", content: cat.seoDescription },
        { property: "og:url", content: `/projects/${cat.key}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${cat.key}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const cat = getCategory(category)!;
  const list = projectsByCategory(category as CategoryKey);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <nav className="text-xs text-muted-foreground">
        <Link to="/">Home</Link> <span className="mx-1">/</span>{" "}
        <Link to="/projects">Projects</Link> <span className="mx-1">/</span>{" "}
        <span className="text-navy">{cat.short}</span>
      </nav>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">{cat.short}</p>
      <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">{cat.name}</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{cat.tagline}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$category/$slug"
            params={{ category: p.category, slug: p.slug }}
            className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
          >
            <h2 className="text-base font-bold text-navy">{p.title}</h2>
            <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
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
            <div className="mt-4 text-xs font-semibold text-gold">Get quote →</div>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card p-8 text-center shadow-card">
        <h2 className="text-2xl font-black text-navy">Don't see your exact {cat.short} idea?</h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          We build 100% custom final year projects — send us the idea, we'll beat any quote.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/custom-project"
            className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Build custom project
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-navy"
          >
            Beat my quote
          </Link>
        </div>
      </div>
    </div>
  );
}
