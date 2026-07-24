import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export type CTAAction = {
  label: string;
  to?: "/contact" | "/custom-project" | "/services" | "/projects" | "/pricing";
  href?: string;
  variant?: "primary" | "outline";
};

export type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions: CTAAction[];
  tone?: "navy" | "light";
};

export function CTASection({
  eyebrow,
  title,
  description,
  actions,
  tone = "navy",
}: CTASectionProps) {
  const isNavy = tone === "navy";
  return (
    <section className={isNavy ? "bg-background py-16" : "bg-muted/40 py-16"}>
      <div className="mx-auto max-w-5xl px-4">
        <div
          className={
            isNavy
              ? "relative overflow-hidden rounded-3xl border border-white/10 bg-navy px-6 py-12 text-primary-foreground shadow-xl sm:px-12"
              : "relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 shadow-card sm:px-12"
          }
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {eyebrow}
            </p>
          )}
          <h2
            className={
              isNavy
                ? "mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-4xl"
                : "mt-2 max-w-3xl text-3xl font-black leading-tight text-navy sm:text-4xl"
            }
          >
            {title}
          </h2>
          {description && (
            <p
              className={
                isNavy
                  ? "mt-3 max-w-2xl text-sm text-primary-foreground/75 sm:text-base"
                  : "mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base"
              }
            >
              {description}
            </p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((a) => {
              const cls =
                a.variant === "outline"
                  ? isNavy
                    ? "inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                    : "inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5"
                  : "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-navy shadow-glow transition-transform hover:scale-105";
              if (a.href) {
                return (
                  <a key={a.label} href={a.href} className={cls}>
                    {a.label} <ArrowRight size={16} />
                  </a>
                );
              }
              return (
                <Link key={a.label} to={a.to ?? "/contact"} className={cls}>
                  {a.label} <ArrowRight size={16} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
