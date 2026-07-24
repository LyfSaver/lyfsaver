import { createFileRoute, Link } from "@tanstack/react-router";
import { Mascot } from "@/components/site/Mascot";
import { BeatMyQuote } from "@/components/site/BeatMyQuote";
import { BusinessWebsiteSection } from "@/components/site/BusinessWebsiteSection";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";
import { categories } from "@/data/projects";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  FileText,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://lyfsaver.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://lyfsaver.lovable.app/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-navy/40 px-3 py-1 text-xs font-semibold text-gold">
              <BadgePercent size={14} /> We beat any quote — guaranteed
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
              Your Final Year Project, <span className="text-gold">Done Right — For Less.</span>
            </h1>
            <p className="mt-4 max-w-lg text-base text-primary-foreground/80 md:text-lg">
              CSE, ISE, AIML, Data Science, CSBS & Electronics. Full source code, project report,
              PPT and viva prep — always cheaper than the quote you already have.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-navy shadow-glow transition-transform hover:scale-105"
              >
                Browse project ideas <ArrowRight size={16} />
              </Link>
              <Link
                to="/custom-project"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Build a custom project
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-gold" /> Report + PPT included
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gold" /> 500+ students helped
              </div>
              <div className="flex items-center gap-2">
                <Rocket size={16} className="text-gold" /> Weekly updates
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-[3rem] bg-gold/10 blur-2xl" />
            <Mascot size={320} eager animate="float" className="relative" />
          </div>
        </div>
      </section>

      {/* BEAT MY QUOTE — its own section for consistent layout */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4">
          <BeatMyQuote />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Explore</p>
              <h2 className="mt-1 text-3xl font-black text-navy md:text-4xl">
                Final year project ideas for every domain
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-semibold text-navy underline underline-offset-4 md:inline"
            >
              See all →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.key}
                to="/projects/$category"
                params={{ category: c.key }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-navy/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                    {c.short}
                  </span>
                  <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-navy">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.domains.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-navy/70"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Services</p>
              <h2 className="mt-1 text-3xl font-black text-navy md:text-4xl">
                Projects, websites, apps & software — under one roof.
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden text-sm font-semibold text-navy underline underline-offset-4 md:inline"
            >
              See all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s) => (
              <div
                key={s.slug}
                className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <s.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/services" className="text-sm font-semibold text-navy underline underline-offset-4">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS WEBSITE SECTION */}
      <BusinessWebsiteSection />

      {/* WHAT'S INCLUDED */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                What's included
              </p>
              <h2 className="mt-1 text-3xl font-black text-navy md:text-4xl">
                Not just cheaper — a complete package.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every LYF SAVER project ships with the full stack of deliverables your college &
                guide expect.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Full working source code with setup guide",
                  "Project report as per your college format",
                  "Presentation (PPT) — designed, not templated",
                  "Demo video walkthrough",
                  "Viva Q&A prep sheet",
                  "Free revisions until submission",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-gold" size={20} />
                    <span className="text-navy">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: "Report", note: "College-format ready" },
                { icon: Rocket, label: "Source code", note: "Clean, commented" },
                { icon: MessagesSquare, label: "Viva prep", note: "Q&A sheet" },
                { icon: ShieldCheck, label: "Support", note: "Till submission" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <b.icon className="text-gold" size={22} />
                  <div className="mt-3 text-base font-bold text-navy">{b.label}</div>
                  <div className="text-xs text-muted-foreground">{b.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFERRAL */}
      <ReferralSection />

      {/* CTA BANNER */}
      <CTASection
        eyebrow="Ready to save?"
        title="Get your project or business website — for less than any quote."
        description="Share your requirement and we'll come back within a few hours with a lower, exact price."
        actions={[
          { label: "Get free quote", to: "/contact" },
          { label: "See testimonials", to: "/testimonials" as const, variant: "outline" },
        ]}
      />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}

const referralSteps = [
  {
    eyebrow: "The referral",
    title: "Share your unique link with a classmate or friend.",
    tone: "muted" as const,
  },
  {
    eyebrow: "The booking",
    title: "They book their final year project with LYF SAVER.",
    tone: "muted" as const,
  },
  {
    eyebrow: "The reward",
    title: "You both save 8% instantly.",
    tone: "reward" as const,
  },
];

function ReferralSection() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy p-6 text-primary-foreground shadow-xl sm:p-10">
          {/* Decorative gold glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />

          {/* Header */}
          <div className="relative">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
              Refer & save
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Bring a friend — <span className="italic font-serif text-gold">both get 8% off.</span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-primary-foreground/70">
              Share your referral link. When they book, we instantly discount both of your quotes.
            </p>
          </div>

          {/* Building-block steps */}
          <ol ref={ref} className="relative mt-8 flex flex-col gap-3">
            {referralSteps.map((s, i) => {
              const isReward = s.tone === "reward";
              return (
                <li
                  key={s.eyebrow}
                  className="contents"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 500ms ease ${i * 180}ms, transform 500ms ease ${i * 180}ms`,
                  }}
                >
                  <div
                    className={
                      isReward
                        ? "group relative flex items-start gap-4 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent p-5"
                        : "group relative flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
                    }
                  >
                    <div
                      className={
                        isReward || i === 0
                          ? "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold text-navy text-lg font-black shadow-lg shadow-gold/20"
                          : "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-navy text-lg font-black"
                      }
                    >
                      {i + 1}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={
                          isReward
                            ? "text-xs font-bold uppercase tracking-tight text-gold"
                            : "text-xs font-bold uppercase tracking-tight text-primary-foreground/50"
                        }
                      >
                        {s.eyebrow}
                      </span>
                      <p
                        className={
                          isReward
                            ? "mt-0.5 text-lg font-bold text-primary-foreground"
                            : "mt-0.5 text-base text-primary-foreground/90"
                        }
                      >
                        {s.title}
                      </p>
                    </div>
                  </div>
                  {i < referralSteps.length - 1 && (
                    <div
                      aria-hidden
                      className={
                        i === 0
                          ? "ml-9 h-4 w-[2px] bg-gradient-to-b from-gold to-transparent"
                          : "ml-9 h-4 w-[2px] bg-gradient-to-b from-white/30 to-transparent"
                      }
                    />
                  )}
                </li>
              );
            })}
          </ol>

          {/* CTA */}
          <Link
            to="/contact"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-navy shadow-[0_10px_20px_-5px_rgba(197,160,89,0.4)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Get my referral link
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>

          <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-primary-foreground/40">
            Terms & conditions apply
          </p>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Will LYF SAVER really be cheaper than my existing quote?",
    a: "Yes. Send us any real quote you've received and we'll price the same scope 10–20% lower — with the report, PPT and viva prep included.",
  },
  {
    q: "Which domains and stacks do you cover?",
    a: "MERN, Java (Spring Boot/JSP), Flutter, Machine Learning / AIML, Data Science, Data Analytics, and Digital Electronics / IoT.",
  },
  {
    q: "Do I get the full source code and documentation?",
    a: "Every project ships with clean source code, a college-format report, PPT, demo video and a viva Q&A sheet.",
  },
  {
    q: "How long does it take to build my project?",
    a: "Most projects ship in 2–4 weeks with weekly updates. Rush timelines are possible — mention your deadline when you request a quote.",
  },
];

function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-gold">FAQ</p>
      <h2 className="mt-1 text-center text-3xl font-black text-navy md:text-4xl">
        Questions we hear a lot
      </h2>
      <div className="mt-8 space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card p-5 shadow-card open:border-gold"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
