import React from 'react';
import { TESTIMONIALS } from '../data/memorials';
import { Quote, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Family Proof &amp; Unveiling Tributes
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Trusted by Families Across Southern Africa
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Read heartfelt reflections from families who entrusted us with their loved ones' sacred memorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-purple-500/40 mb-4" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-sm font-bold text-white">
                    {item.author}
                  </span>
                  <span className="text-[10px] text-purple-400 font-mono">
                    {item.model}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
