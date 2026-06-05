import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { packages } from "@/lib/packages";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Umrah Packages 1447H · Safar-e-Haramain" },
      { name: "description", content: "Compare our Umrah packages — Noor (PKR 70,000), Rehmat (PKR 100,000), Khusoosi VVIP (PKR 120,000). All-inclusive." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-gold text-xs tracking-[0.4em] uppercase mb-4">All-Inclusive · 1447H</div>
        <h1 className="font-display text-5xl md:text-6xl">Umrah <span className="text-gradient-gold">Packages</span></h1>
        <p className="font-urdu text-xl text-gold-soft mt-4">”ہر بجٹ، ہر دل کے لیے“</p>
        <p className="text-muted-foreground mt-3">
          Three carefully designed journeys — every package includes flights, visa, hotels,
          all meals, transport and full ziyarat.
        </p>
      </div>

      <div className="space-y-16">
        {packages.map((p, i) => (
          <motion.div
            key={p.id}
            id={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 shadow-deep">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md"
                style={{ background: `${p.badgeColor}33`, color: p.badgeColor, border: `1px solid ${p.badgeColor}55` }}>
                {p.badge}
              </div>
              <div className="absolute bottom-5 right-5 font-urdu text-2xl text-gold-soft">{p.urduTagline}</div>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{p.duration} · {p.hotelDistance}</div>
              <h2 className="font-display text-4xl md:text-5xl mt-2">{p.title}</h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-display font-bold text-gradient-gold">PKR {p.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground">/ person</span>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {p.includes.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/book/$id"
                params={{ id: p.id }}
                className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold shadow-gold"
              >
                Book {p.title} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
