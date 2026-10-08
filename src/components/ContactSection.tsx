import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AVAILABLE_STONES } from '../data/memorials';
import { StoneFinish } from '../types';
import { Logo } from './Logo';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    cemetery: '',
    stoneFinish: 'Zimbabwe Absolute Black' as StoneFinish,
    memorialType: 'Executive Double Memorial',
    unveilingDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.fullName || !formState.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Makhwane PBH Granite & Tombstones,
My name is ${formState.fullName || 'Inquirer'}.
Phone: ${formState.phone || 'N/A'}
Cemetery / Location: ${formState.cemetery || 'Not specified yet'}
Interested in: ${formState.memorialType} in ${formState.stoneFinish}
Target Unveiling Date: ${formState.unveilingDate || 'To be decided'}
Notes: ${formState.message || 'Please provide a quote and catalogue.'}`;

    window.open(`https://wa.me/27720000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#0e1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Factory Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Logo size="md" showSubtitle={false} variant="image-only" className="w-16 h-16 mb-4" />
              <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
                Showroom &amp; Stone Fabrication Yard
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
                Speak Directly with Our Head Stonemason
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need advice on cemetery municipal permits, granite durability, or urgent unveiling deadlines, our compassionate memorial counselors are here to assist your family.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-200">
                    Workshop &amp; Memorial Display Yard
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Makhwane Industrial Stone Yard, Main Road, Polokwane &amp; Gauteng Distribution Center
                  </p>
                  <span className="text-[11px] text-purple-400 mt-1 block">
                    Installation coverage across all South African provinces &amp; neighboring regions.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-200">
                    Direct Telephone &amp; WhatsApp Hotline
                  </h4>
                  <p className="text-xs font-mono text-white mt-0.5">
                    +27 (0) 72 000 0000 / +27 (0) 15 291 0000
                  </p>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    Available 7 days a week for unveiling emergency consultations.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-200">
                    Visiting Hours
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Monday – Friday: 08:00 – 17:00 <br />
                    Saturday: 08:30 – 14:00 (Sunday by family appointment)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-neutral-900 border border-emerald-800/40 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wide">
                  Instant WhatsApp Assistance
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Send a photo of any design to receive a quote within 30 minutes.
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open Chat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Memorial Request Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formState.fullName}</span>. One of our senior memorial advisors will review your requirements for {formState.cemetery || 'your cemetery'} and provide a formal itemized quotation within 2 hours.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp as Well</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-300 bg-neutral-800 hover:bg-neutral-700 rounded-lg"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-800 pb-3 mb-4">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Request an Official Itemized Quotation
                  </h3>
                  <p className="text-xs text-slate-400">
                    No obligation. Free cemetery site assessment &amp; 3D rendering included.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Molele"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 072 123 4567"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Cemetery Name &amp; Town / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Polokwane Cemetery / Ga-Mphahlele"
                      value={formState.cemetery}
                      onChange={(e) => setFormState({ ...formState, cemetery: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Preferred Memorial / Work Type
                    </label>
                    <select
                      value={formState.memorialType}
                      onChange={(e) => setFormState({ ...formState, memorialType: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    >
                      <option value="Executive Double Memorial">Executive Double Memorial</option>
                      <option value="Seraphic Wings Sculpted Modern">Seraphic Wings Sculpted Modern</option>
                      <option value="Cathedral Arched Classic Headstone">Cathedral Arched Classic Headstone</option>
                      <option value="Full Granite Ledger & Kerbing">Full Granite Ledger &amp; Kerbing</option>
                      <option value="Architectural Kitchen Countertops">Architectural Kitchen Countertops</option>
                      <option value="Custom Family Design / Photo">Custom Family Design / Photo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                      Target Unveiling Date / Timeline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. December 2026 / In 6 Months"
                      value={formState.unveilingDate}
                      onChange={(e) => setFormState({ ...formState, unveilingDate: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2.5 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                    Special Inscription Details or Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any family inscription verses, photo engraving requests, or specific sizes..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Official Quote Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Send to WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
