import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenQuoteModal,
}) => {
  return (
    <footer className="border-t border-neutral-800 bg-[#090a0d] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Logo size="md" showSubtitle={true} />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-2">
              Makhwane PBH Granite &amp; Tombstones crafts eternal memorial monuments, bespoke headstones, full ledger slabs, and architectural granite countertops with uncompromising dignity, master stonemasonry, and structural stability.
            </p>
            <div className="text-[11px] text-purple-400 font-mono pt-1">
              Registered Stonemasonry &amp; Granite Fabrication
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Memorial Collections
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('memorial-catalog')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Executive Double Memorials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('memorial-catalog')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Seraphic Wings &amp; Modern Sculpted
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('memorial-catalog')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Single Cathedral Arch Monuments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('granite-countertops')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Architectural Kitchen Granite Tops
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('inscription-studio')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Interactive Epitaph Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateSection('layby-pricing')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  12-Month 0% Lay-By
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('layby-pricing')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Funeral Policy Claims
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('craftsmanship')}
                  className="hover:text-purple-300 transition-colors text-left"
                >
                  Cemetery Foundation Rules
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuoteModal}
                  className="hover:text-purple-300 transition-colors text-left text-purple-400 font-semibold"
                >
                  Get Quick Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contact Showroom
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Polokwane &amp; Gauteng Distribution Hubs, South Africa</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+27 (0) 72 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>info@makhwanegranite.co.za</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Makhwane PBH Granite &amp; Tombstones (Pty) Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Natural Quarried Granite Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Free Installation Included</span>
            <span aria-hidden="true">·</span>
            <span>Unveiling Punctuality Invariant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
