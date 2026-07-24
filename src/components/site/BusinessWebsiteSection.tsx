import { Link } from "@tanstack/react-router";
import {
  Building2,
  UtensilsCrossed,
  HeartPulse,
  School,
  Stethoscope,
  Store,
  Rocket,
  ShieldCheck,
  Search,
  Smartphone,
} from "lucide-react";

const audiences = [
  { icon: Store, label: "Startups" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: HeartPulse, label: "Hospitals" },
  { icon: Stethoscope, label: "Clinics" },
  { icon: School, label: "Schools & Colleges" },
  { icon: Building2, label: "Enterprises" },
];

const features = [
  { icon: Smartphone, label: "Fully responsive" },
  { icon: Search, label: "SEO-optimized" },
  { icon: ShieldCheck, label: "Secure & fast" },
  { icon: Rocket, label: "Conversion-ready" },
];

export function BusinessWebsiteSection() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              For businesses
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-navy md:text-4xl">
              Need a Professional Website for Your Business?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              We design and develop modern, secure, responsive and SEO-optimized websites for
              startups, restaurants, hospitals, schools, colleges, clinics, agencies, retail
              businesses and enterprises. We also build custom software solutions that automate
              your business operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-navy shadow-glow transition-transform hover:scale-105"
              >
                Get free quote
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
              >
                Book consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-3 text-sm font-semibold text-navy hover:bg-navy/5"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-navy"
                >
                  <f.icon size={16} className="text-gold" />
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-background p-4 shadow-card transition-transform hover:-translate-y-1 hover:border-gold"
              >
                <a.icon className="text-gold" size={22} />
                <div className="text-sm font-bold text-navy">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
