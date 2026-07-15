import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import mascotImg from "@/assets/mascot.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={mascotImg} alt="LYF SAVER logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-lg font-black">
              LYF <span className="text-gold">SAVER</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Your Project. Our Promise. Final year project help — done right, for less.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/projects">Project ideas</Link></li>
            <li><Link to="/custom-project">Custom projects</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/how-it-works">How it works</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog & resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>
              <a href="mailto:query.lyfsaver@gmail.com" className="flex items-center gap-2 hover:text-gold">
                <Mail size={16} /> query.lyfsaver@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919535419091" className="flex items-center gap-2 hover:text-gold">
                <Phone size={16} /> +91 95354 19091
              </a>
            </li>
            <li>
              <a href="https://wa.me/919535419091" className="flex items-center gap-2 hover:text-gold">
                <MessageCircle size={16} /> WhatsApp 95354 19091
              </a>
            </li>
            <li>
              <a href="https://instagram.com/lyf.saver" className="flex items-center gap-2 hover:text-gold">
                <Instagram size={16} /> @lyf.saver
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} LYF SAVER · Your Project. Our Promise.
      </div>
    </footer>
  );
}