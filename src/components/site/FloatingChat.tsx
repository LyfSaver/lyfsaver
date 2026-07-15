import { useState } from "react";
import mascotImg from "@/assets/mascot.png";
import { X } from "lucide-react";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-72 animate-pop rounded-2xl border border-border bg-card p-4 shadow-glow">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted"
            aria-label="Close chat"
          >
            <X size={14} />
          </button>
          <p className="text-sm font-semibold text-navy">Need help picking a project? 👋</p>
          <p className="mt-1 text-xs text-muted-foreground">
            DM us on Instagram or WhatsApp — we usually reply in minutes.
          </p>
          <div className="mt-3 flex gap-2">
            <a
              href="https://instagram.com/lyfsaver"
              className="flex-1 rounded-full bg-gold-gradient px-3 py-2 text-center text-xs font-semibold text-navy"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919999999999"
              className="flex-1 rounded-full bg-navy px-3 py-2 text-center text-xs font-semibold text-primary-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-navy py-2 pl-2 pr-4 text-primary-foreground shadow-glow transition-transform hover:scale-105"
        aria-label="Open help chat"
      >
        <img src={mascotImg} alt="Mascot" width={36} height={36} className="h-9 w-9 animate-float" />
        <span className="text-sm font-semibold">Ask the bot</span>
      </button>
    </div>
  );
}