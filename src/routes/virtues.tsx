import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import kaaba from "@/assets/kaaba-2.jpg";
import madina from "@/assets/madina-1.jpg";

export const Route = createFileRoute("/virtues")({
  head: () => ({ meta: [{ title: "Fazail-e-Umrah · Virtues of Umrah · Safar-e-Haramain" }, { name: "description", content: "Authentic hadith and rewards of performing Umrah — from Sahih al-Bukhari and Muslim." }] }),
  component: VirtuesPage,
});

const virtues = [
  { ar: "ٱلْعُمْرَةُ إِلَى ٱلْعُمْرَةِ كَفَّارَةٌ لِّمَا بَيْنَهُمَا", en: "Umrah to Umrah is an expiation for what is between them.", src: "Sahih al-Bukhari 1773", ur: "ایک عمرہ سے دوسرے عمرہ تک، جو گناہ سرزد ہوں، ان کا کفارہ ہے۔" },
  { ar: "ٱلْحَجُّ ٱلْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا ٱلْجَنَّةُ", en: "And the accepted Hajj — its reward is nothing less than Paradise.", src: "Sahih al-Bukhari 1773", ur: "اور حجِ مبرور کا بدلہ جنت کے سوا کچھ نہیں۔" },
  { ar: "تَابِعُوا بَيْنَ ٱلْحَجِّ وَٱلْعُمْرَةِ، فَإِنَّهُمَا يَنْفِيَانِ ٱلْفَقْرَ وَٱلذُّنُوبَ", en: "Follow up Hajj and Umrah, for they remove poverty and sins as bellows removes impurities from iron.", src: "Sunan al-Tirmidhi 810", ur: "حج اور عمرہ پے در پے کرو، یہ غربت اور گناہوں کو ایسے دور کرتے ہیں جیسے بھٹی لوہے کا میل۔" },
  { ar: "ٱلْغَازِي فِي سَبِيلِ ٱللَّٰهِ، وَٱلْحَاجُّ، وَٱلْمُعْتَمِرُ، وَفْدُ ٱللَّٰهِ", en: "The warrior in the path of Allah, the pilgrim (Hajji), and the Umrah-performer — they are the delegation of Allah.", src: "Sunan an-Nasa'i 2625", ur: "اللہ کے راستے کا مجاہد، حاجی اور عمرہ کرنے والا — یہ اللہ کا وفد ہیں۔" },
  { ar: "صَلَاةٌ فِي مَسْجِدِي هَٰذَا خَيْرٌ مِّنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ", en: "One prayer in my mosque (Masjid an-Nabawi) is better than a thousand prayers elsewhere.", src: "Sahih al-Bukhari 1190", ur: "میری اس مسجد میں ایک نماز، دوسری جگہوں کی ہزار نمازوں سے بہتر ہے۔" },
  { ar: "صَلَاةٌ فِي ٱلْمَسْجِدِ ٱلْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ", en: "A prayer in Masjid al-Haram is better than one hundred thousand prayers elsewhere.", src: "Sunan Ibn Majah 1406", ur: "مسجدِ حرام میں ایک نماز، دوسری جگہوں کی ایک لاکھ نمازوں سے افضل ہے۔" },
];

function VirtuesPage() {
  return (
    <div className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="ornament-divider mb-4"><Sparkles className="w-4 h-4" /></div>
        <h1 className="font-display text-5xl md:text-6xl">Fazail-e-<span className="text-gradient-gold">Umrah</span></h1>
        <p className="font-urdu text-xl text-gold-soft mt-3">”قرآن اور فرمانِ مصطفیٰ ﷺ کی روشنی میں“</p>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          The journey to Bait-Ullah is among the most beloved acts to Allah. Below are authentic
          ahadith on the reward and merit of Umrah.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {virtues.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
            className="relative rounded-2xl border border-gold/20 bg-card p-7 overflow-hidden group hover:border-gold/50 transition-colors"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-radial from-gold/20 to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />
            <div className="relative">
              <p className="font-arabic text-2xl md:text-3xl text-gold leading-loose text-right" dir="rtl">{v.ar}</p>
              <p className="mt-5 text-foreground/90 leading-relaxed italic">"{v.en}"</p>
              <p className="font-urdu text-lg text-gold-soft mt-3 leading-loose text-right" dir="rtl">{v.ur}</p>
              <p className="mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">— {v.src}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden h-72 border border-gold/30">
          <img src={kaaba} alt="Makkah" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-7">
            <div>
              <div className="font-arabic text-2xl text-gold">ٱلْحَرَمُ ٱلْمَكِّيُّ</div>
              <p className="text-sm text-foreground/80 mt-2">Every footstep in Haram is recorded — a sea of reward.</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-72 border border-gold/30">
          <img src={madina} alt="Madinah" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-7">
            <div>
              <div className="font-arabic text-2xl text-gold">ٱلرَّوْضَةُ ٱلشَّرِيفَة</div>
              <p className="text-sm text-foreground/80 mt-2">A garden from the gardens of Paradise — between the minbar and the house of the Prophet ﷺ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
