import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight, Mail } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Projects, Websites, Apps & Software | LYF SAVER" },
      {
        name: "description",
        content:
          "Final year projects, IEEE & research projects, AI/ML, IoT, web & mobile app development, business websites, ERP, CRM and custom software — all in one place.",
      },
      { property: "og:title", content: "Services — LYF SAVER" },
      {
        property: "og:description",
        content:
          "Explore LYF SAVER's services: final year projects, AI/ML, IoT, web & mobile apps, business websites, ERP, CRM and custom software.",
      },
      { property: "og:url", content: "https://lyfsaver.lovable.app/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — LYF SAVER" },
      {
        name: "twitter:description",
        content:
          "Final year projects, AI/ML, IoT, web & mobile apps, business websites, ERP, CRM & custom software.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lyfsaver.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "LYF SAVER Services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="bg-hero py-16 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            What we do
          </p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            One team. <span className="text-gold">Every</span> project you need.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 md:text-base">
            From final year academic projects to full-scale business websites, mobile apps and
            custom ERP/CRM software — LYF SAVER delivers production-ready work at prices that
            beat any quote.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <s.icon size={22} />
                </div>
                <h2 className="mt-4 text-lg font-bold text-navy">{s.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn more <ArrowRight size={12} />
                  </Link>
                  <a
                    href="mailto:query.lyfsaver@gmail.com"
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-3 py-1.5 text-xs font-semibold text-navy hover:bg-navy/5"
                    aria-label={`Contact us about ${s.title}`}
                  >
                    <Mail size={12} /> Contact
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to start?"
        title="Let's build your final year project or business website."
        description="Tell us your requirement — we'll come back with a quote that's lower than anything you've received."
        actions={[
          { label: "Get free quote", to: "/contact" },
          { label: "Start project", to: "/custom-project", variant: "outline" },
        ]}
      />
    </div>
  );
}
