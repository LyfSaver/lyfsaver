import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import mascotImg from "@/assets/mascot.png";

const navLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/custom-project", label: "Custom" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={mascotImg}
            alt="LYF SAVER logo — robot mascot"
            width={40}
            height={40}
            className="h-10 w-10 transition-transform group-hover:rotate-6"
          />
          <span className="text-lg font-black tracking-tight text-navy">
            LYF <span className="text-gold">SAVER</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
          >
            Get quote
          </Link>
        </nav>
        <button
          className="md:hidden rounded-md p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Get quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}