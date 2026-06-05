import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import type { Package } from "@/lib/packages";

export function PackageCard({ pkg, featured }: { pkg: Package; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden border ${
        featured ? "border-gold/60 shadow-gold scale-[1.02]" : "border-gold/15"
      } bg-card transition-all hover:border-gold/40 hover:-translate-y-1`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <span
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md"
          style={{ background: `${pkg.badgeColor}33`, color: pkg.badgeColor, border: `1px solid ${pkg.badgeColor}55` }}
        >
          {pkg.badge}
        </span>
        <div className="absolute bottom-3 right-4 font-urdu text-gold-soft text-xl">{pkg.urduTagline}</div>
      </div>

      <div className="p-7 space-y-5">
        <div>
          <h3 className="font-display text-2xl text-foreground">{pkg.title}</h3>
          <div className="text-xs text-muted-foreground mt-1 tracking-wider">
            {pkg.duration.toUpperCase()} · {pkg.hotelDistance.toUpperCase()}
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-display text-gradient-gold font-bold">
            PKR {pkg.price.toLocaleString()}
          </span>
          <span className="text-xs text-muted-foreground">/ person</span>
        </div>

        <ul className="space-y-2.5 text-sm">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-foreground/85">
              <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 pt-2">
          <Link
            to="/book/$id"
            params={{ id: pkg.id }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold text-sm shadow-gold hover:shadow-[0_25px_50px_-15px_oklch(0.78_0.14_82/0.6)] transition-all"
          >
            Book Package <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/packages"
            hash={pkg.id}
            className="px-4 py-3 rounded-full border border-gold/30 text-gold text-sm hover:bg-gold/10 transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
