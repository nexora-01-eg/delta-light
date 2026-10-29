'use client';
import { useState } from 'react';

const SCENES = [
  { id: 'living', name: 'Living Room — معيشة', tone: 'linear-gradient(180deg,#2a2118,#171717)', warmth: 'إضاءة دافئة 2700K' },
  { id: 'dining', name: 'Dining — سفرة', tone: 'linear-gradient(180deg,#241c14,#0e0e0e)', warmth: 'نجفة مركزية + سبوتات' },
  { id: 'bed', name: 'Bedroom — نوم', tone: 'linear-gradient(180deg,#1e1a24,#101010)', warmth: 'أباليك + إضاءة مخفية' },
  { id: 'corr', name: 'Corridor — طرقة', tone: 'linear-gradient(180deg,#1c1c1c,#080808)', warmth: 'تراك ماجنتيك' },
  { id: 'out', name: 'Outdoor — خارجي', tone: 'linear-gradient(180deg,#101820,#080808)', warmth: 'إضاءة واجهات' }
];

export default function RoomVisualizer() {
  const [active, setActive] = useState(SCENES[0]);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-24" aria-label="Room experience">
      <div className="text-xs tracking-[0.4em] text-gold">ROOM EXPERIENCE</div>
      <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">شوف الإضاءة وهي بتغيّر المكان</h2>
      <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-5">
        <div className="relative rounded-3xl overflow-hidden hairline min-h-[380px] transition-all duration-700" style={{ background: active.tone }}>
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 chandelier-rays" />
          <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
            <div>
              <div className="text-lg font-bold">{active.name}</div>
              <div className="text-sm text-champagne mt-1">{active.warmth}</div>
            </div>
            <div className="text-xs text-muted">صور فعلية للغرف تُضاف عند توفرها</div>
          </div>
        </div>
        <div className="grid gap-2">
          {SCENES.map((s) => (
            <button key={s.id} onClick={() => setActive(s)} className={`text-right rounded-2xl px-4 py-3.5 hairline transition-all ${active.id === s.id ? 'bg-gold text-ink font-bold border-gold' : 'glass hover:border-gold/50'}`}>
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
