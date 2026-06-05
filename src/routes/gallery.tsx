import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import p1 from "@/assets/pilgrim-1.jpg";
import p2 from "@/assets/pilgrim-2.jpg";
import p3 from "@/assets/pilgrim-3.jpg";
import k from "@/assets/kaaba-2.jpg";
import s from "@/assets/safa-marwa.jpg";
import m from "@/assets/madina-1.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Pilgrim Stories · Safar-e-Haramain" }, { name: "description", content: "Real stories and photos of pilgrims who performed Umrah with Safar-e-Haramain." }] }),
  component: GalleryPage,
});

const stories = [
  { img: p1, name: "Rashid Family · Lahore", date: "Rajab 1446", text: "Allah ka shukar — har cheez waqt par hui. Bachon ke saath Umrah ka tajurba hum kabhi nahi bhulenge.", rating: 5 },
  { img: p2, name: "Haji Iqbal Sahib · Karachi", date: "Shaban 1446", text: "Buzurg walidain ke saath safar. Khidmat ka andaaz ehl-e-iman jaisa tha. Khoob duaen.", rating: 5 },
  { img: p3, name: "Tariq Group · 14 People", date: "Ramadan 1446", text: "Khusoosi VVIP package liya. Clock Tower mein qayam, Kaaba ka view. Lafzon mein bayan nahi kar sakte.", rating: 5 },
  { img: k, name: "Anonymous Sister", date: "Muharram 1447", text: "Tawaf ke dauran jo sukoon mila woh aaj bhi seene mein zinda hai. Shukriya Safar-e-Haramain.", rating: 5 },
  { img: s, name: "Faisal & Wife", date: "Rabi al-Awwal 1447", text: "Safa-Marwah pe khade hue to Maa Hajira ki yaad aayi. Aap logon ka guide bohat ilm wala tha.", rating: 5 },
  { img: m, name: "Bilal Ahmed · Multan", date: "Jumada 1447", text: "Madinah ka qayam meri zindagi ka behtareen waqt tha. Roza-e-Rasool ﷺ ke saamne aansoo ruke nahi.", rating: 5 },
];

function GalleryPage() {
  return (
    <div className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h1 className="font-display text-5xl md:text-6xl">Pilgrim <span className="text-gradient-gold">Stories</span></h1>
        <p className="font-urdu text-xl text-gold-soft mt-3">”جنہوں نے سفر کیا، ان کی زبانی“</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
            className="group relative rounded-2xl overflow-hidden border border-gold/15 bg-card hover:border-gold/50 hover:-translate-y-1 transition-all"
          >
            <div className="h-72 overflow-hidden">
              <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-gold text-sm">★★★★★</div>
                <div className="text-xs text-muted-foreground tracking-wider">{s.date}</div>
              </div>
              <p className="mt-3 text-sm text-foreground/85 italic leading-relaxed">"{s.text}"</p>
              <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">— {s.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
