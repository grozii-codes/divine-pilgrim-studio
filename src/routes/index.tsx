import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/HeroSlider";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/lib/packages";
import { Sparkles, MapPin, Plane, Hotel, Heart, BookOpen, Quote, ArrowRight } from "lucide-react";
import kaaba3 from "@/assets/kaaba-3.jpg";
import madinaInt from "@/assets/madina-interior.jpg";
import safa from "@/assets/safa-marwa.jpg";
import zamzam from "@/assets/zamzam.jpg";
import baqi from "@/assets/baqi.jpg";
import hajar from "@/assets/hajar-aswad.jpg";
import travel from "@/assets/travel.jpg";
import pil1 from "@/assets/pilgrim-1.jpg";
import pil2 from "@/assets/pilgrim-2.jpg";
import pil3 from "@/assets/pilgrim-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safar-e-Haramain · Premium Umrah Packages from PKR 70,000" },
      { name: "description", content: "Hand-crafted Umrah journeys with flights, visa, hotels near Bait-Ullah & Roza-e-Rasool ﷺ. Three packages from PKR 70,000 to 120,000." },
    ],
  }),
  component: Index,
});

const galleryStrip = [
  { img: kaaba3, label: "Tawaf al-Bayt" },
  { img: madinaInt, label: "Bab as-Salam" },
  { img: safa, label: "Sa'i" },
  { img: zamzam, label: "Aab-e-Zamzam" },
  { img: baqi, label: "Jannat al-Baqi" },
  { img: hajar, label: "Hajr-e-Aswad" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100vh] -mt-16 pt-16">
        <HeroSlider />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Umrah 1447H · Now Booking</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-4xl">
              <span className="block text-foreground">A Journey Written</span>
              <span className="block shimmer-text">In the Heart.</span>
            </h1>
            <p className="font-urdu text-2xl md:text-3xl text-gold-soft mt-6 max-w-2xl leading-loose">
              ”جلدی کریں، سفرِ عمرہ کی تیاری کریں“
            </p>
            <p className="text-foreground/75 mt-4 max-w-xl text-base md:text-lg">
              From the threshold of Bait-Ullah to the radiance of the Roza-e-Rasool ﷺ —
              we craft Umrah experiences that pilgrims remember for a lifetime.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/packages" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold shadow-gold">
                View Packages <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/guide" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10">
                Umrah Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-gold/15 bg-card/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/15">
          {[
            { icon: Plane, label: "Return Flights", sub: "Visa Included" },
            { icon: Hotel, label: "Hotels Near Haram", sub: "Walking Distance" },
            { icon: MapPin, label: "Full Ziyarat", sub: "Makkah · Madinah" },
            { icon: Heart, label: "Halal Buffets", sub: "Daily Three Meals" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-3 py-6 px-5">
              <f.icon className="w-6 h-6 text-gold shrink-0" />
              <div>
                <div className="text-sm font-semibold">{f.label}</div>
                <div className="text-xs text-muted-foreground">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="ornament-divider mb-5"><Sparkles className="w-4 h-4" /></div>
          <h2 className="font-display text-4xl md:text-5xl">
            Three Journeys. <span className="text-gradient-gold">One Destination.</span>
          </h2>
          <p className="font-urdu text-xl text-gold-soft mt-4">”اپنی نیت کے مطابق پیکیج چنیں“</p>
          <p className="text-muted-foreground mt-3">
            Every package is fully inclusive — flights, visa, hotels, transport, ziyarat and Zamzam.
            Choose what fits your heart and your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {packages.map((p, i) => <PackageCard key={p.id} pkg={p} featured={i === 1} />)}
        </div>
      </section>

      {/* AUTO-SCROLLING GALLERY STRIP */}
      <section className="py-20 overflow-hidden border-y border-gold/10 bg-card/30">
        <div className="text-center mb-10 px-6">
          <h2 className="font-display text-3xl md:text-4xl">Glimpses of the <span className="text-gradient-gold">Sacred</span></h2>
          <p className="font-urdu text-lg text-gold-soft mt-2">”ہر منظر، ایک یاد“</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...galleryStrip, ...galleryStrip].map((g, i) => (
              <div key={i} className="relative shrink-0 w-[340px] h-[240px] rounded-xl overflow-hidden border border-gold/20">
                <img src={g.img} alt={g.label} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-gold text-xs tracking-[0.3em] uppercase">{g.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAKKAH ↔ MADINAH JOURNEY */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="ornament-divider mb-4"><Plane className="w-4 h-4" /></div>
          <h2 className="font-display text-4xl md:text-5xl">From Makkah to <span className="text-gradient-gold">Madinah</span></h2>
          <p className="font-urdu text-xl text-gold-soft mt-3">”دو شہر، ایک خواب“</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="relative rounded-2xl overflow-hidden h-[420px] group border border-gold/20">
            <img src={kaaba3} alt="Makkah" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <div className="font-arabic text-3xl text-gold">مَكَّةُ الْمُكَرَّمَة</div>
              <div className="font-display text-3xl mt-1">Makkah</div>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                The city of Ibrahim (AS), the cradle of Tawheed. Here stands the Kaaba — the
                qibla of millions, the first house built for the worship of Allah.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[420px] group border border-gold/40 shadow-gold">
            <img src={travel} alt="Journey" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-7">
              <Plane className="w-10 h-10 text-gold mb-4 animate-float" />
              <div className="font-display text-2xl">450 km</div>
              <div className="text-xs text-muted-foreground tracking-[0.3em] uppercase mt-1">Air-conditioned Coach</div>
              <div className="font-urdu text-lg text-gold-soft mt-4">”دلوں کا سفر“</div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[420px] group border border-gold/20">
            <img src={madinaInt} alt="Madinah" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <div className="font-arabic text-3xl text-gold">ٱلْمَدِينَة</div>
              <div className="font-display text-3xl mt-1">Madinah</div>
              <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                The city of light. Beneath the green dome rests the Beloved ﷺ. Streets that
                heard his footsteps now carry the longing of every believer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILGRIM STORIES */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="ornament-divider mb-4"><Quote className="w-4 h-4" /></div>
          <h2 className="font-display text-4xl md:text-5xl">Pilgrim <span className="text-gradient-gold">Stories</span></h2>
          <p className="font-urdu text-lg text-gold-soft mt-3">”جنہوں نے سفر کیا، ان کی زبانی“</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: pil1, name: "Rashid & Family", text: "Allah ka shukar — har cheez waqt par hui. Hotel Haram ke bilkul saamne tha, bachon ke liye buffet, har namaz Kaaba ke saamne. Yeh safar zindagi bhar yaad rahega.", rating: 5 },
            { img: pil2, name: "Haji Iqbal Sahib", text: "Bahut adab aur muhabbat ke saath khidmat ki gayi. Moallim sahab har lamha humare saath the. Roza-e-Rasool ﷺ ke saamne khada hua to lagaa sab kuch mil gaya.", rating: 5 },
            { img: pil3, name: "Group of 14", text: "Khusoosi package liya — Clock Tower mein qayam, view Kaaba ka. Private transport, plated meals. Itni professional service Pakistan se Umrah par kabhi nahi mili.", rating: 5 },
          ].map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden border border-gold/15 bg-card group hover:border-gold/40 transition-colors"
            >
              <div className="h-64 overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-gold text-sm">★★★★★</div>
                <p className="text-sm text-foreground/85 mt-3 leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">— {t.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ISLAMIC KNOWLEDGE TEASER */}
      <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-gold/20">
            <img src={hajar} alt="Hajr-e-Aswad" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="font-arabic text-3xl text-gold">حَجَرُ ٱلْأَسْوَد</div>
              <div className="font-display text-xl mt-1">The Black Stone</div>
            </div>
          </div>
          <div>
            <div className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Fazail-e-Umrah</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              "Umrah to Umrah is an <span className="text-gradient-gold">expiation</span> for what is between them."
            </h2>
            <p className="font-arabic text-xl text-gold-soft mt-5 leading-loose">
              ٱلْعُمْرَةُ إِلَى ٱلْعُمْرَةِ كَفَّارَةٌ لِّمَا بَيْنَهُمَا
            </p>
            <p className="text-muted-foreground text-sm mt-2">— Sahih al-Bukhari 1773</p>
            <Link to="/virtues" className="mt-7 inline-flex items-center gap-2 text-gold border-b border-gold/40 pb-1 hover:gap-3 transition-all">
              <BookOpen className="w-4 h-4" /> Read all virtues
            </Link>
          </div>
        </div>
      </section>

      {/* NAAT PANEL */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="ornament-divider mb-6"><Heart className="w-4 h-4" /></div>
          <p className="font-urdu text-3xl md:text-4xl text-gold-soft leading-[2.2]">
            ”مدینے کی گلیوں میں اے کاش گزروں<br />
            رسولِ خدا کا میں جلوہ ہی دیکھوں“
          </p>
          <p className="text-muted-foreground text-sm mt-6 tracking-wider">— Ashaar fi muhabbat-e-Madinah</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 border border-gold/30 shadow-deep">
          <div className="absolute inset-0">
            <img src={kaaba3} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          </div>
          <div className="relative max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              The Invitation is <span className="text-gradient-gold">Yours.</span>
            </h2>
            <p className="font-urdu text-2xl text-gold-soft mt-4">”اللہ کا گھر آپ کو بلا رہا ہے“</p>
            <p className="text-foreground/80 mt-4">
              Speak with our team on WhatsApp. We will guide you through every step — visa, flight,
              hotel, and the rituals — with care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/packages" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.85_0.13_85)] to-[oklch(0.65_0.15_75)] text-[oklch(0.15_0.02_155)] font-semibold shadow-gold">
                Start Booking
              </Link>
              <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold/10">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
