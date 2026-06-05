import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/guide", label: "Umrah Guide" },
  { to: "/virtues", label: "Fazail" },
  { to: "/gallery", label: "Pilgrims" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[oklch(0.85_0.13_85)] to-[oklch(0.55_0.14_75)] flex items-center justify-center shadow-gold animate-pulse-glow">
            <Moon className="w-4 h-4 text-[oklch(0.15_0.02_155)]" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <div className="font-display text-base tracking-[0.18em] text-gradient-gold font-bold">SAFAR-E-HARAMAIN</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground mt-0.5">UMRAH · ZIYARAT · 1447H</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/80 hover:text-gold transition-colors relative [&.active]:text-gold [&.active]:after:scale-x-100 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:bg-gold after:scale-x-0 after:transition-transform hover:after:scale-x-100"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/packages"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold text-sm shadow-gold hover:shadow-[0_25px_50px_-15px_oklch(0.78_0.14_82/0.6)] transition-shadow"
        >
          Book Umrah →
        </Link>

        <button className="lg:hidden text-gold p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-gold/20 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="py-2 text-foreground/90 hover:text-gold" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
