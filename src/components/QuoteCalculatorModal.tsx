import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, Calculator } from 'lucide-react';
import { MEMORIAL_PRODUCTS, AVAILABLE_STONES } from '../data/memorials';
import { InscriptionCustomizerState, StoneFinish } from '../types';
import { Logo } from './Logo';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
  customInscriptionConfig?: InscriptionCustomizerState | null;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialProductId,
  customInscriptionConfig,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProductId || 'makhwane-royal-double'
  );
  const [selectedStone, setSelectedStone] = useState<StoneFinish>(
    customInscriptionConfig?.stoneFinish || 'Zimbabwe Absolute Black'
  );
  const [laybyOption, setLaybyOption] = useState<boolean>(true);
  const [laybyMonths, setLaybyMonths] = useState<number>(6);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cemetery: '',
    targetDate: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
    }
  }, [initialProductId]);

  if (!isOpen) return null;

  const currentProduct = MEMORIAL_PRODUCTS.find((p) => p.id === selectedProductId) || MEMORIAL_PRODUCTS[0];
  const calculatedPrice = currentProduct.priceZAR;
  const deposit = currentProduct.laybyDeposit;
  const monthly = Math.round((calculatedPrice - deposit) / laybyMonths);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Makhwane PBH Granite & Tombstones,
I am requesting a formal quotation:
Name: ${formData.name || 'Client'}
Phone: ${formData.phone || 'N/A'}
Cemetery / Location: ${formData.cemetery || 'Not set'}
Monument: ${currentProduct.name} (${currentProduct.code})
Stone Finish: ${selectedStone}
Estimated Price: R ${calculatedPrice.toLocaleString()}
Lay-By Plan: ${laybyOption ? `${laybyMonths} Months (Deposit R ${deposit}, ~R ${monthly}/mo)` : 'Full Payment / Policy'}
Target Unveiling: ${formData.targetDate || 'TBD'}
${customInscriptionConfig ? `Custom Inscription: ${customInscriptionConfig.fullName} (${customInscriptionConfig.sunriseDate} - ${customInscriptionConfig.sunsetDate})` : ''}
Notes: ${formData.comments || 'Please confirm availability and cemetery requirements.'}`;

    window.open(`https://wa.me/27720000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#12141a] border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-800 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <Logo size="sm" variant="image-only" className="w-10 h-10" />
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                Makhwane PBH · Quote &amp; Lay-By Calculator
              </h3>
              <p className="text-[11px] text-slate-400">
                Direct Stonemason Specification &amp; Pricing
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-white mb-2">
              Quotation Successfully Logged
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your memorial specification for{' '}
              <span className="font-semibold text-white">{currentProduct.name}</span> in {selectedStone} has been queued. Our stonemason will contact you on {formData.phone}.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmit Directly to WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 text-xs font-semibold text-slate-300 bg-neutral-800 hover:bg-neutral-700 rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Selected Product Summary Card */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-purple-400">
                  {currentProduct.code}
                </span>
                <div className="font-serif text-sm font-bold text-white">
                  {currentProduct.name}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Natural Quarried Granite · Foundation Footing Included
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase block">Total ZAR</span>
                <span className="font-mono text-lg font-bold text-amber-400">
                  R {calculatedPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Custom Inscription notice if attached */}
            {customInscriptionConfig && (
              <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-800/60 text-xs text-purple-300 flex items-center justify-between">
                <span>
                  ✓ Inscription attached: <strong>{customInscriptionConfig.fullName}</strong>
                </span>
                <span className="font-mono text-[10px] uppercase">
                  {customInscriptionConfig.letteringFinish}
                </span>
              </div>
            )}

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Change Model
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                >
                  {MEMORIAL_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name} (R {prod.priceZAR.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Granite Selection
                </label>
                <select
                  value={selectedStone}
                  onChange={(e) => setSelectedStone(e.target.value as StoneFinish)}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                >
                  {AVAILABLE_STONES.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} ({s.origin})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Lay-by Toggle */}
            <div className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-200 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={laybyOption}
                    onChange={(e) => setLaybyOption(e.target.checked)}
                    className="accent-purple-600 w-4 h-4 rounded"
                  />
                  <span>Opt for 0% Interest Lay-By Instalments?</span>
                </label>
                {laybyOption && (
                  <span className="text-[11px] font-mono text-purple-400">
                    Est. R {monthly.toLocaleString()} / month
                  </span>
                )}
              </div>

              {laybyOption && (
                <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
                  <span className="text-xs text-slate-400">Duration:</span>
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setLaybyMonths(m)}
                      className={`px-2.5 py-1 text-xs rounded border ${
                        laybyMonths === m
                          ? 'bg-purple-900 border-purple-500 text-white'
                          : 'bg-neutral-900 border-neutral-700 text-slate-400'
                      }`}
                    >
                      {m} Mo
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Client Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="072 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Cemetery &amp; Town
                </label>
                <input
                  type="text"
                  placeholder="e.g. Polokwane or Pretoria"
                  value={formData.cemetery}
                  onChange={(e) => setFormData({ ...formData, cemetery: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Target Unveiling Month
                </label>
                <input
                  type="text"
                  placeholder="e.g. Easter 2026 or Dec 2026"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Quote</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
