import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-[oklch(0.12_0.02_155)]/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-gradient-gold tracking-wider">SAFAR-E-HARAMAIN</div>
          <p className="font-urdu text-lg text-gold-soft mt-3 leading-loose">
            ”جلدی کریں، سفرِ عمرہ کی تیاری کریں“
          </p>
          <p className="text-sm text-muted-foreground mt-4 max-w-md leading-relaxed">
            Premium Umrah experiences crafted with sincerity. From the threshold of Bait-Ullah
            to the courtyards of Roza-e-Rasool ﷺ — we carry your spiritual journey with care.
          </p>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.3em] mb-4">EXPLORE</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/packages" className="hover:text-gold">Umrah Packages</Link></li>
            <li><Link to="/guide" className="hover:text-gold">Umrah Guide</Link></li>
            <li><Link to="/virtues" className="hover:text-gold">Fazail-e-Umrah</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Pilgrim Stories</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-gold text-xs tracking-[0.3em] mb-4">CONTACT</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +92 300 1234567</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> safar@haramain.travel</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> Office 12, Liberty Plaza, Lahore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
        Made with <Heart className="w-3 h-3 text-gold fill-gold" /> for the seekers of Haramain · © 1447H
      </div>
    </footer>
  );
}
