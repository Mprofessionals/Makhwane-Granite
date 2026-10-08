import React from 'react';
import { ArrowRight, ShieldCheck, Hammer, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { STONE_ASSETS } from '../data/memorials';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onExploreCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onExploreCatalog,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-neutral-800">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Identity Badge showcasing the authentic PBH Leopard Seal */}
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <Logo size="lg" showSubtitle={true} className="mb-3" />
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Action */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Clean unboxed category kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
              <span>Master Stonemasons</span>
              <span aria-hidden="true">·</span>
              <span>Direct Quarry Granite</span>
              <span aria-hidden="true">·</span>
              <span>Southern Africa</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 [text-wrap:balance]">
              Honoring Legacies in Everlasting, Handcrafted Granite.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              From majestic executive double memorials to sculpted angel wings and custom architectural granite surfaces, Makhwane PBH crafts monuments with reverent precision, permanent concrete foundations, and mirror-grade polish that endures across generations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 border border-purple-400/50 rounded-xl shadow-[0_4px_24px_rgba(147,51,234,0.3)] transition-all flex items-center gap-2"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all hover:text-white"
              >
                View Memorial Catalog
              </button>
            </div>

            {/* Quality Invariants (Editorial bullet points, no candy pills) */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">100% Solid Granite</span>
                  <span className="text-slate-400">Zero composite fillers</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Free Cemetery Setup</span>
                  <span className="text-slate-400">Reinforced level base</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">12-Month Lay-By</span>
                  <span className="text-slate-400">0% Interest payment plan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Fidelity Focal Carrier */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src={STONE_ASSETS.hero}
                alt="Makhwane Granite mirror-polished black granite memorial tombstone with beveled edges and gold inscriptions in a serene memorial park"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Overlaid Hallmark Plate */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-purple-300 font-medium">
                    Craftsmanship Highlight
                  </div>
                  <div className="text-sm font-semibold text-white font-serif">
                    Zimbabwe Black Cathedral Memorial
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    12-Stage Diamond Wet Polish · 24k Gold Sandblasting
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <span className="text-xs text-slate-400 block">Complete with kerbs</span>
                  <span className="text-sm sm:text-base font-bold text-amber-400 font-mono">
                    From R 14,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adjoining Trust Proof Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              1,850+
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Memorials Installed Across Southern Africa
            </div>
          </div>

          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Natural Zimbabwe &amp; Rustenburg Granite
            </div>
          </div>

          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              0% Interest
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Flexible 3 to 12 Month Lay-By Terms
            </div>
          </div>

          <div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Lifetime
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Stone Structural Invariant Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
