import React from 'react';
import { STONE_ASSETS } from '../data/memorials';
import { Layers, CheckCircle2, Ruler, Shield, Flame, Droplets, Sparkles, ArrowRight } from 'lucide-react';

interface GraniteCountertopsProps {
  onOpenQuoteModal: () => void;
}

export const GraniteCountertops: React.FC<GraniteCountertopsProps> = ({
  onOpenQuoteModal,
}) => {
  const edgeProfiles = [
    { name: 'Double Bevel', desc: 'Sleek 45° chamfered top and bottom edge for contemporary kitchens.' },
    { name: 'Full Bullnose', desc: 'Seamless, smooth half-circle profile that prevents chipping.' },
    { name: 'Pencil Round', desc: 'Minimalist 3mm subtle radius, crisp and modern.' },
    { name: 'Waterfall Mitred', desc: 'Dramatic 90° monolithic slab cascading down to the floor.' },
  ];

  return (
    <section id="granite-countertops" className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0e1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900 aspect-[4/3] group">
              <img
                src={STONE_ASSETS.kitchenCountertops}
                alt="Luxury modern kitchen with polished Zimbabwe black granite countertops and waterfall island by Makhwane Granite"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating feature note */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-purple-400">
                    Architectural Division
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white">
                    Custom Kitchen &amp; Island Fabrication
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-amber-400 font-mono font-bold">
                    From R 3,200 / linear meter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Content */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
              Architectural &amp; Home Granite
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
              Precision Granite Countertops, Islands &amp; Vanity Slabs
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Beyond memorials, Makhwane PBH is a full-service stone fabricator. We custom-template, laser-cut, and install premium natural granite slabs for luxury kitchens, outdoor braai counters, executive boardroom tables, and bathroom vanity tops.
            </p>

            {/* Inherent Stone Advantages */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Flame className="w-4 h-4 text-amber-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white mb-0.5">Heat Proof</h5>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Resists hot cookware and high cooking temperatures without scorching.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Shield className="w-4 h-4 text-purple-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white mb-0.5">Scratch Proof</h5>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Mohs hardness of 7 resists cutlery, knives, and heavy daily usage.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Droplets className="w-4 h-4 text-blue-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white mb-0.5">Sealed Density</h5>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Industrial nano-penetrating seal protects against red wine, oils &amp; acids.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Sparkles className="w-4 h-4 text-emerald-400 mb-1.5" />
                <h5 className="text-xs font-bold text-white mb-0.5">Natural Veining</h5>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Each slab is a one-of-a-kind natural geological masterpiece.
                </p>
              </div>
            </div>

            {/* Edge Profiles List */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                Available Edge Profiles:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {edgeProfiles.map((edge) => (
                  <div
                    key={edge.name}
                    className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center"
                  >
                    <span className="text-xs font-semibold text-slate-200 block truncate">
                      {edge.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <span>Request Countertop Measuring &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
