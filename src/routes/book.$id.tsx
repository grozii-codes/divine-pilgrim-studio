import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { packages } from "@/lib/packages";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/book/$id")({
  head: () => ({ meta: [{ title: "Book Umrah · Safar-e-Haramain" }] }),
  component: BookPage,
  loader: ({ params }) => {
    const pkg = packages.find((p) => p.id === params.id);
    if (!pkg) throw notFound();
    return { pkg };
  },
});

function BookPage() {
  const { pkg } = Route.useLoaderData();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(2);
  const [notes, setNotes] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `*Umrah Booking Request*%0A%0A` +
      `*Package:* ${pkg.title} (PKR ${pkg.price.toLocaleString()})%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*People:* ${people}%0A` +
      `*Estimated Total:* PKR ${(pkg.price * people).toLocaleString()}%0A` +
      `*Notes:* ${notes || "—"}`;
    window.open(`https://wa.me/923001234567?text=${msg}`, "_blank");
  }

  return (
    <div className="py-20 px-6 lg:px-16 max-w-5xl mx-auto">
      <Link to="/packages" className="text-sm text-gold/80 hover:text-gold">← Back to packages</Link>

      <div className="mt-6 grid md:grid-cols-[1fr_1.1fr] gap-10">
        <div className="rounded-2xl overflow-hidden border border-gold/20 self-start">
          <img src={pkg.image} alt={pkg.title} className="w-full h-72 object-cover" />
          <div className="p-7 bg-card">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{pkg.duration}</div>
            <h2 className="font-display text-3xl mt-1">{pkg.title}</h2>
            <div className="mt-3 text-3xl font-display text-gradient-gold font-bold">PKR {pkg.price.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">per person</div>
            <div className="mt-5 font-urdu text-lg text-gold-soft">{pkg.urduTagline}</div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-gold/30 bg-card p-8 space-y-5 shadow-gold">
          <div>
            <div className="text-gold text-xs tracking-[0.3em] uppercase">Request Booking</div>
            <h1 className="font-display text-3xl mt-1">Complete Your Details</h1>
            <p className="font-urdu text-base text-gold-soft mt-1">”تفصیلات بھریں، ہم آپ سے رابطہ کریں گے“</p>
          </div>

          <Field label="Full Name" required value={name} onChange={setName} placeholder="As on passport" />
          <Field label="WhatsApp Number" required value={phone} onChange={setPhone} placeholder="+92 300 0000000" type="tel" />

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Number of People</label>
            <input type="number" min={1} max={30} value={people} onChange={(e) => setPeople(+e.target.value)}
              className="w-full bg-background/60 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Package</label>
            <div className="px-4 py-3 rounded-lg bg-background/60 border border-gold/20 text-sm">{pkg.title} · PKR {pkg.price.toLocaleString()} × {people} = <span className="text-gold font-semibold">PKR {(pkg.price * people).toLocaleString()}</span></div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Notes (Optional)</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Preferred dates, special requirements…"
              className="w-full bg-background/60 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none transition resize-none" />
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_145)] to-[oklch(0.45_0.18_145)] text-white font-semibold shadow-gold">
            <MessageCircle className="w-5 h-5" /> Send to WhatsApp <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">Your request will open WhatsApp with details pre-filled. Our team replies within minutes.</p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, required, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}{required && <span className="text-gold ml-1">*</span>}</label>
      <input required={required} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-background/60 border border-gold/20 rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none transition" />
    </div>
  );
}
