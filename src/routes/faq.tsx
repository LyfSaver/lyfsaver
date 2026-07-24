import { createFileRoute } from "@tanstack/react-router";
import { faqGroups } from "@/data/site-faqs";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Final Year Projects, Websites, Apps & Software | LYF SAVER" },
      {
        name: "description",
        content:
          "Answers to common questions about final year projects, website development, mobile apps, AI/ML, research projects, business software and careers.",
      },
      { property: "og:title", content: "FAQ — LYF SAVER" },
      {
        property: "og:description",
        content:
          "Common questions about final year projects, websites, apps, AI/ML, business software and careers — answered.",
      },
      { property: "og:url", content: "https://lyfsaver.lovable.app/faq" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ — LYF SAVER" },
      {
        name: "twitter:description",
        content: "Answers to common questions about projects, websites, apps and software.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lyfsaver.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((g) =>
            g.items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div>
      <section className="bg-hero py-14 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Everything you might want to <span className="text-gold">ask</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 md:text-base">
            Answers on final year projects, websites, apps, AI/ML, research projects, business
            software and careers.
          </p>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl space-y-10 px-4">
          {faqGroups.map((g) => (
            <div key={g.topic}>
              <h2 className="text-xl font-black text-navy">{g.topic}</h2>
              <div className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <details
                    key={it.q}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-card open:border-gold"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
                      {it.q}
                      <span className="text-gold transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Still have questions?"
        title="Talk to us — we reply within a few hours."
        actions={[
          { label: "Contact us", to: "/contact" },
          { label: "See services", to: "/services", variant: "outline" },
        ]}
      />
    </div>
  );
}
