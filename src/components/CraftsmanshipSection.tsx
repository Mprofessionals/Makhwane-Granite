import React from 'react';
import { STONE_ASSETS } from '../data/memorials';
import { CheckCircle2, Shield, Award, Sparkles } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Quarry Selection & Geological Purity',
      description: 'We procure monolithic granite blocks directly from certified deposits in Zimbabwe and Rustenburg. Every slab is inspected with acoustic resonance testing to ensure zero subterranean fractures.',
    },
    {
      step: '02',
      title: 'Diamond Wet-Sawing & Multi-Stage Polishing',
      description: 'Our stonemasons employ computerized bridge saws with diamond-tipped segmented blades, followed by 7 progressive wet-polishing pads (50-grit up to 3000-grit buff) yielding a glass-like sheen.',
    },
    {
      step: '03',
      title: 'Precision Sandblasting & 24k Gold Inlay',
      description: 'Inscriptions and sacred verses are carved using high-pressure aluminum oxide blasting. Letters are coated with weather-grade memorial primer and filled with 24-karat gold leaf or indelible enamels.',
    },
    {
      step: '04',
      title: 'Engineered Cemetery Sub-Foundations',
      description: 'A tombstone must never tilt or sink into the grave soil. We cast reinforced subterranean concrete footing beams and stainless steel internal alignment dowels to ensure permanent level stability.',
    },
  ];

  return (
    <section id="craftsmanship" className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            The Stonemasonry Method
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Crafted by Master Hands to Outlive the Decades
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            In our workshop, ancient stonecraft disciplines meet modern diamond tooling. We treat every monument as an eternal sanctuary of remembrance.
          </p>
        </div>

        {/* Grid: Craftsman Image + Step by Step Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Workshop Photography */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[4/5] bg-neutral-950 relative group">
              <img
                src={STONE_ASSETS.craftsman}
                alt="Master stone mason polishing edge of deep black granite slab in Makhwane workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800">
                <div className="text-xs text-purple-400 font-medium">Workshop Master Craftsman</div>
                <div className="font-serif text-sm font-bold text-white mt-0.5">
                  Hand-Chiseled &amp; Diamond Wet Polished
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Average 32 hours of dedicated stonemasonry per executive double memorial.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-purple-500/40 transition-colors flex items-start gap-5"
              >
                <div className="font-mono text-xl sm:text-2xl font-bold text-purple-400/80 shrink-0 select-none">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
