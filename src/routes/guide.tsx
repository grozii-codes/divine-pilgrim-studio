import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/guide")({
  head: () => ({ meta: [{ title: "Umrah Guide · Tareeqa-e-Umrah · Safar-e-Haramain" }, { name: "description", content: "Complete step-by-step Umrah method (Tareeqa) from Quran and Hadith — in English and Urdu." }] }),
  component: GuidePage,
});

const steps = [
  {
    en: { title: "Niyyah & Ihram", body: "Enter the state of Ihram at the Miqat. Make the intention for Umrah and recite Talbiyah: 'Labbayk Allahumma Labbayk…'. Men wear two white unstitched sheets; women wear modest clothing." },
    ur: { title: "نیت اور احرام", body: "میقات پر احرام باندھیں اور دل سے عمرہ کی نیت کریں۔ تلبیہ پڑھیں: ”لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ“۔ مرد دو سفید چادریں پہنیں، خواتین باپردہ لباس میں رہیں۔" },
  },
  {
    en: { title: "Entering Masjid al-Haram", body: "Enter with the right foot, recite the masnoon dua. As your eyes meet the Kaaba — make heartfelt dua, for it is among the moments of accepted supplication." },
    ur: { title: "مسجد الحرام میں داخلہ", body: "دایاں قدم پہلے رکھیں، مسنون دعا پڑھیں۔ جب نظر کعبہ پر پڑے تو دل سے دعا مانگیں — یہ قبولیت کا لمحہ ہے۔" },
  },
  {
    en: { title: "Tawaf — Seven Circuits", body: "Begin at the Black Stone (Hajr-e-Aswad). Make seven anti-clockwise circuits around the Kaaba. Men do Idtiba (right shoulder uncovered) and Ramal in the first three circuits. Pray two Rakat behind Maqam-e-Ibrahim." },
    ur: { title: "طواف — سات چکر", body: "حجرِ اسود سے آغاز کریں۔ کعبہ کے گرد سات چکر لگائیں۔ مردوں کے لیے پہلے تین چکروں میں اضطباع اور رمل سنت ہے۔ طواف کے بعد مقامِ ابراہیم کے پیچھے دو رکعت نماز پڑھیں۔" },
  },
  {
    en: { title: "Drink Zamzam", body: "Drink Zamzam water in three breaths, facing the Kaaba. Make dua — for the Prophet ﷺ said: 'The water of Zamzam is for whatever it is drunk for.'" },
    ur: { title: "آبِ زمزم", body: "تین سانس میں زمزم پئیں، کعبہ کی طرف رخ کر کے۔ دعا مانگیں — حضور ﷺ نے فرمایا: ”زمزم جس نیت سے پیا جائے، وہی فائدہ دیتا ہے۔“" },
  },
  {
    en: { title: "Sa'i — Between Safa & Marwa", body: "Walk seven times between the hills of Safa and Marwa, in remembrance of Hajira (AS) seeking water for Isma'il (AS). Begin at Safa, end at Marwa. Men jog between the green markers." },
    ur: { title: "سعی — صفا و مروہ کے درمیان", body: "صفا و مروہ کے درمیان سات چکر لگائیں — حضرت ہاجرہ (ع) کی یاد میں۔ صفا سے شروع، مروہ پر ختم۔ سبز نشانوں کے درمیان مرد دوڑیں۔" },
  },
  {
    en: { title: "Halq or Taqsir", body: "Men shave (Halq) or trim (Taqsir) the hair — shaving is more rewarding. Women cut a fingertip length from their hair. With this, the rites of Umrah are complete and you exit Ihram." },
    ur: { title: "حلق یا قصر", body: "مرد بال منڈوائیں (حلق افضل ہے) یا کترائیں۔ خواتین انگلی کے پور برابر بال کاٹیں۔ اسی کے ساتھ عمرہ مکمل اور احرام سے فراغت۔" },
  },
];

export function GuidePage() {
  const [lang, setLang] = useState<"en" | "ur">("en");
  return (
    <div className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Tareeqa-e-Umrah</div>
        <h1 className="font-display text-5xl md:text-6xl">The Umrah <span className="text-gradient-gold">Guide</span></h1>
        <p className="font-urdu text-xl text-gold-soft mt-4">”قرآن و حدیث کی روشنی میں“</p>

        <div className="mt-8 inline-flex rounded-full border border-gold/30 p-1 bg-card">
          {(["en", "ur"] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)}
              className={`px-6 py-2 text-sm rounded-full transition ${lang === l ? "bg-gold text-[oklch(0.15_0.02_155)] font-semibold" : "text-foreground/70 hover:text-gold"}`}>
              {l === "en" ? "English" : "اردو"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <div className="space-y-10">
          {steps.map((s, i) => {
            const c = lang === "en" ? s.en : s.ur;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className={`pl-20 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.85_0.13_85)] to-[oklch(0.55_0.14_75)] flex items-center justify-center font-display text-2xl text-[oklch(0.15_0.02_155)] font-bold shadow-gold z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className={lang === "ur" ? "font-urdu" : ""} dir={lang === "ur" ? "rtl" : "ltr"}>
                    <h3 className={`font-display text-2xl md:text-3xl ${lang === "ur" ? "font-urdu" : ""}`}>{c.title}</h3>
                    <p className={`mt-3 text-foreground/80 leading-relaxed ${lang === "ur" ? "text-lg leading-loose" : ""}`}>{c.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
