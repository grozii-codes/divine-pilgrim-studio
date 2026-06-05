import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import k1 from "@/assets/kaaba-1.jpg";
import k2 from "@/assets/kaaba-2.jpg";
import k3 from "@/assets/kaaba-3.jpg";
import k4 from "@/assets/kaaba-4.jpg";
import m1 from "@/assets/madina-1.jpg";
import m2 from "@/assets/madina-2.jpg";
import m3 from "@/assets/madina-3.jpg";
import s from "@/assets/safa-marwa.jpg";

const slides = [
  { img: k1, ar: "بَيْتُ ٱللَّٰهِ", title: "Bait-Ullah", sub: "Where every heart finds its qibla" },
  { img: m1, ar: "ٱلْمَدِينَةُ ٱلْمُنَوَّرَة", title: "Madinah Munawwarah", sub: "The luminous city of the Beloved ﷺ" },
  { img: k3, ar: "طَوَافٌ", title: "Tawaf of the Soul", sub: "Circling the House — a rhythm of belonging" },
  { img: m2, ar: "ٱلرَّوْضَةُ ٱلشَّرِيفَة", title: "Roza-e-Rasool ﷺ", sub: "A garden from the gardens of Paradise" },
  { img: s, ar: "ٱلصَّفَا وَٱلْمَرْوَة", title: "Safa & Marwa", sub: "Footsteps of Hajira (AS) — patience made eternal" },
  { img: k2, ar: "لَبَّيْكَ ٱللَّٰهُمَّ", title: "Labbayk Allahumma", sub: "Here I am, O Allah — at Your service" },
  { img: m3, ar: "گُنبَدِ خَضْرَىٰ", title: "Gumbad-e-Khizra", sub: "Beneath the Green Dome, peace descends" },
  { img: k4, ar: "ٱلْحَرَمُ ٱلشَّرِيف", title: "Masjid al-Haram", sub: "The Sacred Mosque — heart of the ummah" },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const cur = slides[i];
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={cur.img} alt={cur.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-24 left-0 right-0 px-6 lg:px-16 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="font-arabic text-3xl md:text-5xl text-gold mb-3">{cur.ar}</div>
            <h3 className="font-display text-3xl md:text-5xl text-foreground">{cur.title}</h3>
            <p className="text-foreground/70 text-sm md:text-base mt-2 max-w-md">{cur.sub}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-6 lg:left-16 right-6 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className="h-0.5 flex-1 rounded-full bg-foreground/15 overflow-hidden"
            aria-label={`Slide ${idx + 1}`}
          >
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: idx === i ? "100%" : idx < i ? "100%" : "0%" }}
              transition={{ duration: idx === i ? 5 : 0.3, ease: "linear" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
