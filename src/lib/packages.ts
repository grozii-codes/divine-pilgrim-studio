import hotel from "@/assets/hotel.jpg";
import kaaba2 from "@/assets/kaaba-2.jpg";
import madina2 from "@/assets/madina-2.jpg";

export type Package = {
  id: string;
  title: string;
  urduTagline: string;
  price: number;
  duration: string;
  hotelDistance: string;
  badge: string;
  badgeColor: string;
  image: string;
  highlights: string[];
  includes: string[];
};

export const packages: Package[] = [
  {
    id: "noor",
    title: "Noor Package",
    urduTagline: "آغازِ سفر",
    price: 70000,
    duration: "10 Days",
    hotelDistance: "Walking distance to Haram",
    badge: "Essential",
    badgeColor: "oklch(0.6 0.1 158)",
    image: kaaba2,
    highlights: [
      "Flights + Visa included",
      "5L Zamzam + Ihram bag",
      "Daily Buffet (Halal)",
      "Ziyarat in Makkah & Madinah",
    ],
    includes: [
      "Return airfare from Karachi/Lahore/Islamabad",
      "Umrah visa & insurance",
      "Hotel — within walking distance of Haram",
      "Hotel in Madinah near Masjid an-Nabawi",
      "Three Halal buffet meals daily",
      "Air-conditioned transport (Jeddah → Makkah → Madinah → Jeddah)",
      "Guided Ziyarat — Jabal-e-Noor, Hira, Uhud, Quba, Qiblatain",
      "5 litres Zamzam water + Ihram + premium travel bag",
      "Experienced moallim (group leader)",
    ],
  },
  {
    id: "rehmat",
    title: "Rehmat Package",
    urduTagline: "اِفضل تجربہ",
    price: 100000,
    duration: "20 Days",
    hotelDistance: "Closest to Bait-Ullah",
    badge: "Most Loved",
    badgeColor: "oklch(0.78 0.14 82)",
    image: hotel,
    highlights: [
      "20 full days of Ibadat",
      "Hotel facing Haram view",
      "Private VIP Ziyarat tours",
      "Madinah hotel adjacent to Masjid Nabawi",
    ],
    includes: [
      "Direct return airfare with seat selection",
      "Premium 4★ hotel — closest possible to Haram (Kaaba view)",
      "5★ Madinah hotel — facing Bab-as-Salam",
      "20 days extended stay for full month of worship",
      "Three-time signature meals (continental + desi)",
      "Private VIP Ziyarat vehicles",
      "Madinah Ziyarat — Masjid Quba, Uhud, Saba Masajid, Khandaq",
      "Zamzam 5L + Ihram + Tasbeeh kit + Adhkar handbook",
      "Bilingual Aalim escort throughout the journey",
    ],
  },
  {
    id: "khusoosi",
    title: "Khusoosi Package",
    urduTagline: "VVIP خصوصی",
    price: 120000,
    duration: "21 Days · Luxury",
    hotelDistance: "Clock Tower / Pullman Zam Zam",
    badge: "VVIP",
    badgeColor: "oklch(0.85 0.13 85)",
    image: madina2,
    highlights: [
      "5★ Clock Tower / Anjum hotels",
      "Private chauffeured ziyarat",
      "Inside Kaaba prayer opportunity arranged",
      "All meals — premium plated dining",
    ],
    includes: [
      "Premium airline business / preferred economy",
      "5★ Clock Tower / Anjum / Pullman Zamzam (Haram facing suite)",
      "5★ Dar-al-Taqwa / Madinah Hilton (Roza facing rooms)",
      "Private SUV transfers throughout journey",
      "Plated multi-course meals (Arabic, Pakistani, Continental)",
      "Personal moallim + female attendant for ladies",
      "Inside-Kaaba prayer arrangement (subject to grant)",
      "Premium Ihram set + Ajwa dates + Oud Itr gift box",
      "Private Ziyarat tour of Taif (optional)",
      "WhatsApp concierge available 24/7",
    ],
  },
];
