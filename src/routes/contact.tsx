import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Mascot } from "@/components/site/Mascot";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LYF SAVER — Get Your Final Year Project Quote" },
      {
        name: "description",
        content: "Reach out to LYF SAVER via email or Instagram to get a custom quote for your final year project — guaranteed lower than your current quote.",
      },
      { property: "og:title", content: "Contact LYF SAVER" },
      { property: "og:description", content: "Get your custom final year project quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Contact</p>
          <h1 className="mt-1 text-4xl font-black text-navy md:text-5xl">Let's build your project</h1>
          <p className="mt-3 text-muted-foreground">
            Send us your existing quote or your project idea — we'll come back with a lower, exact price
            within 24 hours.
          </p>
          <div className="mt-8 space-y-3">
            <a href="mailto:hello@lyfsaver.in" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-gold">
              <Mail className="text-gold" /> <div><div className="font-semibold text-navy">hello@lyfsaver.in</div><div className="text-xs text-muted-foreground">Email</div></div>
            </a>
            <a href="https://instagram.com/lyfsaver" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-gold">
              <Instagram className="text-gold" /> <div><div className="font-semibold text-navy">@lyfsaver</div><div className="text-xs text-muted-foreground">Instagram DMs</div></div>
            </a>
            <a href="https://wa.me/919999999999" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card hover:border-gold">
              <MessageCircle className="text-gold" /> <div><div className="font-semibold text-navy">WhatsApp</div><div className="text-xs text-muted-foreground">Fastest reply</div></div>
            </a>
          </div>
          <div className="mt-8 hidden md:block">
            <Mascot size={180} />
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thanks! We'll be in touch within 24 hours.");
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-glow"
        >
          <h2 className="text-lg font-bold text-navy">Get your custom quote</h2>
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-navy/70">Your name</span>
            <input required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-navy/70">Email / WhatsApp</span>
            <input required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-navy/70">Existing quote (₹) — optional</span>
            <input type="number" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40" placeholder="We'll beat it" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-semibold text-navy/70">Tell us about your project</span>
            <textarea required rows={4} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40" />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-navy py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
          >
            {sent ? "Sent — thank you!" : "Request my quote"}
          </button>
        </form>
      </div>
    </div>
  );
}