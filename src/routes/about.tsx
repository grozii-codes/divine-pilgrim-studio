import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Award, Users, Clock } from "lucide-react";
import mecca from "@/assets/kaaba-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · Safar-e-Haramain" }, { name: "description", content: "Crafted Umrah journeys from Pakistan. Trusted, experienced, with deep respect for the rites." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-gold text-xs tracking-[0.4em] uppercase mb-3">About Us</div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight">Crafted with <span className="text-gradient-gold">Adab.</span></h1>
          <p className="font-urdu text-xl text-gold-soft mt-4 leading-loose">”ادب پہلا قرینہ ہے محبت کے قرینوں میں“</p>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Safar-e-Haramain is a Pakistan-based premium Umrah travel house. For over a decade
            we have served thousands of pilgrims with hand-picked hotels, smooth visa processing,
            experienced moallims and a service standard rooted in respect for the rites.
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Every booking is handled personally. No agents in the middle. Just you, your family,
            and the journey of a lifetime.
          </p>
          <Link to="/packages" className="mt-7 inline-flex px-7 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold shadow-gold">View Packages</Link>
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/30 shadow-deep">
          <img src={mecca} alt="Makkah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
        </div>
      </div>

      <div className="mt-24 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { i: Award, n: "12+", l: "Years of Service" },
          { i: Users, n: "8,400+", l: "Happy Pilgrims" },
          { i: Shield, n: "100%", l: "Visa Success" },
          { i: Clock, n: "24/7", l: "WhatsApp Support" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl border border-gold/20 bg-card p-7 text-center">
            <s.i className="w-7 h-7 text-gold mx-auto" />
            <div className="font-display text-3xl mt-3 text-gradient-gold">{s.n}</div>
            <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
