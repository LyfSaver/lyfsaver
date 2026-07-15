import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export function BeatMyQuote() {
  const [q, setQ] = useState<string>("10000");
  const quote = parseInt(q || "0", 10) || 0;
  const low = Math.round(quote * 0.8);
  const high = Math.round(quote * 0.9);
  const savings = quote - high;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-glow md:p-8">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
        <Sparkles size={14} /> Beat My Quote
      </div>
      <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">
        Got a quote? We'll beat it.
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter the price you were quoted elsewhere. We'll ship the same project (or better) for less.
      </p>

      <div className="mt-5">
        <label className="text-xs font-semibold text-navy/70">Your existing quote (₹)</label>
        <input
          type="number"
          inputMode="numeric"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-lg font-semibold text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
          placeholder="e.g. 10000"
        />
      </div>

      <div className="mt-5 rounded-2xl bg-gradient-to-br from-[oklch(0.97_0.02_90)] to-[oklch(0.94_0.06_82)] p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-navy/60">
          Your LYF SAVER estimate
        </div>
        {quote > 0 ? (
          <>
            <div className="mt-1 text-3xl font-black text-navy">
              {formatINR(low)} – {formatINR(high)}
            </div>
            <div className="mt-1 text-sm font-semibold text-navy/80">
              You save up to <span className="text-gold">{formatINR(savings)}</span> — with report, PPT & viva prep included.
            </div>
          </>
        ) : (
          <div className="mt-1 text-sm text-muted-foreground">Enter a quote above to see your price.</div>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          to="/contact"
          className="flex-1 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
        >
          Get exact quote
        </Link>
        <Link
          to="/projects"
          className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-muted"
        >
          Browse ideas
        </Link>
      </div>
    </div>
  );
}