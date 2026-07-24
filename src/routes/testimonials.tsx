import { createFileRoute } from "@tanstack/react-router";
import { Star, User } from "lucide-react";
import { studentTestimonials, clientTestimonials, type Testimonial } from "@/data/testimonials";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Students & Businesses | LYF SAVER" },
      {
        name: "description",
        content:
          "Read reviews from students and business clients who trusted LYF SAVER for final year projects, websites, mobile apps and custom software.",
      },
      { property: "og:title", content: "Testimonials — LYF SAVER" },
      {
        property: "og:description",
        content: "Real reviews from students and business clients across India.",
      },
      { property: "og:url", content: "https://lyfsaver.lovable.app/testimonials" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Testimonials — LYF SAVER" },
      {
        name: "twitter:description",
        content: "Reviews from students and businesses who worked with LYF SAVER.",
      },
    ],
    links: [{ rel: "canonical", href: "https://lyfsaver.lovable.app/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div>
      <section className="bg-hero py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Loved by students & businesses
          </p>
          <h1 className="mt-2 text-4xl font-black md:text-5xl">
            Real people. <span className="text-gold">Real results.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/80 md:text-base">
            Reviews from students we've helped clear viva and businesses whose websites and
            software we've built end-to-end.
          </p>
        </div>
      </section>

      <TestimonialGroup
        eyebrow="Student testimonials"
        heading="Cleared viva. Impressed guides."
        list={studentTestimonials}
      />

      <div className="bg-muted/40">
        <TestimonialGroup
          eyebrow="Business client testimonials"
          heading="Websites & software that grow businesses."
          list={clientTestimonials}
        />
      </div>

      <CTASection
        eyebrow="Your story next"
        title="Join 500+ students and businesses who chose LYF SAVER."
        actions={[
          { label: "Start your project", to: "/contact" },
          { label: "See services", to: "/services", variant: "outline" },
        ]}
      />
    </div>
  );
}

function TestimonialGroup({
  eyebrow,
  heading,
  list,
}: {
  eyebrow: string;
  heading: string;
  list: Testimonial[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h2 className="mt-1 text-3xl font-black text-navy md:text-4xl">{heading}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/10 text-navy"
                  aria-hidden
                >
                  <User size={20} />
                </div>
                <div>
                  <figcaption className="text-sm font-bold text-navy">{t.name}</figcaption>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-gold text-gold" : "text-muted"}
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-navy/80">"{t.quote}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
