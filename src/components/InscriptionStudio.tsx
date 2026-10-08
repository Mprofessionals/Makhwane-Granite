import React, { useState } from 'react';
import { AVAILABLE_STONES } from '../data/memorials';
import { InscriptionCustomizerState, StoneFinish } from '../types';
import { Sparkles, Download, Check, RefreshCw, Send, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/images/makhwane_pbh_logo_1791491153140.jpg';

interface InscriptionStudioProps {
  onSendToQuote: (customConfig: InscriptionCustomizerState) => void;
}

export const InscriptionStudio: React.FC<InscriptionStudioProps> = ({
  onSendToQuote,
}) => {
  const [config, setConfig] = useState<InscriptionCustomizerState>({
    stoneFinish: 'Zimbabwe Absolute Black',
    shape: 'arched',
    letteringFinish: '24k-gold',
    headerText: 'IN LOVING MEMORY OF',
    fullName: 'KGOSI THABO MAKHWANE',
    sunriseDate: '14 MAY 1948',
    sunsetDate: '28 OCT 2024',
    tributeMessage: 'ROBALA KA KHOTSO MOKONE, TATA WA RONA',
    familyWords: 'Forever cherished by children, grandchildren and the Makhwane family.',
    emblem: 'cross',
  });

  const [copiedNotification, setCopiedNotification] = useState(false);

  const letteringColorStyles: Record<string, { textClass: string; hex: string; shadow: string }> = {
    '24k-gold': {
      textClass: 'text-[#f5d061]',
      hex: '#d4af37',
      shadow: '0 1px 2px rgba(0,0,0,0.9), 0 0 10px rgba(212,175,55,0.3)',
    },
    'silver': {
      textClass: 'text-slate-200',
      hex: '#e2e8f0',
      shadow: '0 1px 2px rgba(0,0,0,0.9), 0 0 8px rgba(226,232,240,0.25)',
    },
    'pure-white': {
      textClass: 'text-white',
      hex: '#ffffff',
      shadow: '0 1px 3px rgba(0,0,0,0.95)',
    },
    'natural-carved': {
      textClass: 'text-stone-300',
      hex: '#a8a29e',
      shadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
    },
  };

  const currentStone = AVAILABLE_STONES.find((s) => s.name === config.stoneFinish) || AVAILABLE_STONES[0];

  const handleCopySummary = () => {
    const text = `Makhwane Tombstone Inscription Preview:
Stone: ${config.stoneFinish}
Shape: ${config.shape}
Lettering: ${config.letteringFinish}
Header: ${config.headerText}
Name: ${config.fullName}
Sunrise: ${config.sunriseDate} · Sunset: ${config.sunsetDate}
Message: ${config.tributeMessage}
Family: ${config.familyWords}
Emblem: ${config.emblem}`;

    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const getHeadstoneShapeStyle = () => {
    switch (config.shape) {
      case 'arched':
        return 'rounded-t-[80px] sm:rounded-t-[120px]';
      case 'winged':
        return 'rounded-tl-[100px] rounded-tr-[30px]';
      case 'cathedral':
        return 'rounded-t-[60px] clip-path-cathedral';
      case 'double-arch':
        return 'rounded-t-[50px]';
      case 'book':
        return 'rounded-t-3xl';
      default:
        return 'rounded-t-[80px]';
    }
  };

  return (
    <section id="inscription-studio" className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Interactive Epitaph Designer
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            Visualize Your Memorial Inscription Live
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Personalize sacred names, dates, African praise proverbs, sacred emblems, and 24k gold leaf finishes on real quarried granite before production begins.
          </p>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Panel (6 cols) */}
          <div className="lg:col-span-6 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            {/* 1. Stone Selection */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2.5">
                1. Select Natural Granite Stone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {AVAILABLE_STONES.map((stone) => (
                  <button
                    key={stone.name}
                    onClick={() => setConfig({ ...config, stoneFinish: stone.name })}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left transition-all ${
                      config.stoneFinish === stone.name
                        ? 'border-purple-500 bg-purple-950/40 text-white'
                        : 'border-neutral-800 hover:border-neutral-700 bg-neutral-950/50 text-slate-300'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-neutral-600 shrink-0"
                      style={{ backgroundColor: stone.colorHex }}
                    />
                    <span className="text-xs font-medium truncate">{stone.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Silhouette & Lettering Finish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                  2. Headstone Silhouette
                </label>
                <select
                  value={config.shape}
                  onChange={(e) => setConfig({ ...config, shape: e.target.value as any })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                >
                  <option value="arched">Classic Curved Arch</option>
                  <option value="winged">Seraphic Wing Shape</option>
                  <option value="cathedral">Cathedral Apex</option>
                  <option value="double-arch">Double Curved Crown</option>
                  <option value="book">Open Sacred Scripture</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                  3. Inscription Finish
                </label>
                <select
                  value={config.letteringFinish}
                  onChange={(e) => setConfig({ ...config, letteringFinish: e.target.value as any })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                >
                  <option value="24k-gold">24k Deep Gold Leaf Sandblast</option>
                  <option value="silver">Reflective Silver Foil Inlay</option>
                  <option value="pure-white">Pure Mineral White Sandblast</option>
                  <option value="natural-carved">Deep Natural Chiseled Granite</option>
                </select>
              </div>
            </div>

            {/* 3. Inscription Text Fields */}
            <div className="space-y-4 pt-2 border-t border-neutral-800">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1.5">
                  Header Kicker
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {[
                    'IN LOVING MEMORY OF',
                    'ROBALA KA KHOTSO',
                    'LALA NGOXOLO',
                    'REST IN EVERLASTING PEACE',
                  ].map((phrase) => (
                    <button
                      key={phrase}
                      type="button"
                      onClick={() => setConfig({ ...config, headerText: phrase })}
                      className="text-[10px] px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-slate-300 transition-colors"
                    >
                      {phrase}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={config.headerText}
                  onChange={(e) => setConfig({ ...config, headerText: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white uppercase focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Full Name of the Departed
                </label>
                <input
                  type="text"
                  value={config.fullName}
                  onChange={(e) => setConfig({ ...config, fullName: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs font-bold text-white uppercase focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                    Sunrise (Born)
                  </label>
                  <input
                    type="text"
                    value={config.sunriseDate}
                    onChange={(e) => setConfig({ ...config, sunriseDate: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white uppercase focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                    Sunset (Passed)
                  </label>
                  <input
                    type="text"
                    value={config.sunsetDate}
                    onChange={(e) => setConfig({ ...config, sunsetDate: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white uppercase focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Sacred Tribute Verse / Clan Praises
                </label>
                <input
                  type="text"
                  value={config.tributeMessage}
                  onChange={(e) => setConfig({ ...config, tributeMessage: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-1">
                  Family Dedication &amp; Farewell
                </label>
                <input
                  type="text"
                  value={config.familyWords}
                  onChange={(e) => setConfig({ ...config, familyWords: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-700 rounded-lg py-2 px-3 text-xs text-white focus:ring-1 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Sacred Emblem Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block mb-2">
                  Memorial Emblem Engraving
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 text-center">
                  {[
                    { id: 'cross', label: 'Cross' },
                    { id: 'dove', label: 'Dove' },
                    { id: 'angel', label: 'Angel' },
                    { id: 'praying-hands', label: 'Praying' },
                    { id: 'leopard', label: 'PBH Leopard' },
                    { id: 'flower', label: 'Rose' },
                    { id: 'none', label: 'None' },
                  ].map((emb) => (
                    <button
                      key={emb.id}
                      type="button"
                      onClick={() => setConfig({ ...config, emblem: emb.id as any })}
                      className={`p-2 rounded-lg text-[11px] font-medium border transition-all ${
                        config.emblem === emb.id
                          ? 'border-purple-500 bg-purple-950/60 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      {emb.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-800">
              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 flex items-center justify-center gap-2 transition-colors"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Inscriptions Copied!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Copy Text Summary</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onSendToQuote(config)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Submit with Quote</span>
              </button>
            </div>
          </div>

          {/* Live Realistic Stone Mockup (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="text-xs text-slate-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Stone Reflection &amp; Sandblast Simulation</span>
            </div>

            {/* Granite Stone Slab Preview */}
            <div className="w-full max-w-md flex flex-col items-center select-none">
              {/* Headstone Slab */}
              <div
                className={`w-full aspect-[3/4] max-h-[520px] p-8 sm:p-10 flex flex-col items-center justify-between text-center relative shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-4 border-stone-800/60 overflow-hidden ${getHeadstoneShapeStyle()}`}
                style={{
                  backgroundColor: currentStone.colorHex,
                  backgroundImage: `radial-gradient(circle at 35% 20%, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)`,
                }}
              >
                {/* Stone Chamfer Highlight Rim */}
                <div className="absolute inset-2 border border-white/10 pointer-events-none rounded-[inherit]" />

                {/* Subtle natural granite speckling */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />

                {/* Top Section: Header & Emblem */}
                <div className="relative z-10 w-full pt-4 flex flex-col items-center">
                  {/* Emblem rendering */}
                  {config.emblem !== 'none' && (
                    <div
                      className="mb-3 w-10 h-10 flex items-center justify-center"
                      style={{ color: letteringColorStyles[config.letteringFinish].hex }}
                    >
                      {config.emblem === 'cross' && (
                        <svg className="w-8 h-8 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11 2h2v6h5v2h-5v12h-2v-12h-5v-2h5z" />
                        </svg>
                      )}
                      {config.emblem === 'dove' && (
                        <svg className="w-8 h-8 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8 6 4 10 4 14c0 3 2.5 5.5 5.5 5.5.9 0 1.8-.2 2.5-.7.7.5 1.6.7 2.5.7 3 0 5.5-2.5 5.5-5.5 0-4-4-8-8-12z" />
                        </svg>
                      )}
                      {config.emblem === 'angel' && (
                        <svg className="w-8 h-8 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="3" />
                          <path d="M4 14c2-5 6-6 8-4 2-2 6-1 8 4-4 0-6 3-8 8-2-5-4-8-8-8z" />
                        </svg>
                      )}
                      {config.emblem === 'praying-hands' && (
                        <svg className="w-8 h-8 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2c-.6 0-1 .4-1 1v10h2V3c0-.6-.4-1-1-1zm-4 4c-.6 0-1 .4-1 1v8h2V7c0-.6-.4-1-1-1zm8 0c-.6 0-1 .4-1 1v8h2V7c0-.6-.4-1-1-1z" />
                        </svg>
                      )}
                      {config.emblem === 'leopard' && (
                        <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-md border border-purple-500 overflow-hidden flex items-center justify-center">
                          <img
                            src={logoImg}
                            alt="Makhwane PBH Emblem"
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                      {config.emblem === 'flower' && (
                        <svg className="w-8 h-8 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3c-1.5 0-3 1.5-3 3 0 2 3 5 3 5s3-3 3-5c0-1.5-1.5-3-3-3zm-5 5c0 1.5 1.5 3 3 3 2 0 5-3 5-3s-3-3-5-3c-1.5 0-3 1.5-3 3zm10 0c-1.5 0-3 1.5-3 3 0 0 3 3 5 3 1.5 0 3-1.5 3-3 0-1.5-1.5-3-3-3z" />
                        </svg>
                      )}
                    </div>
                  )}

                  <div
                    className="font-serif tracking-[0.25em] text-[11px] sm:text-xs font-semibold uppercase"
                    style={{
                      color: letteringColorStyles[config.letteringFinish].hex,
                      textShadow: letteringColorStyles[config.letteringFinish].shadow,
                    }}
                  >
                    {config.headerText || 'IN LOVING MEMORY OF'}
                  </div>
                </div>

                {/* Center Section: Name & Dates */}
                <div className="relative z-10 w-full my-auto flex flex-col items-center">
                  <div
                    className="font-serif font-bold tracking-wider text-base sm:text-lg lg:text-xl uppercase leading-tight max-w-[90%]"
                    style={{
                      color: letteringColorStyles[config.letteringFinish].hex,
                      textShadow: letteringColorStyles[config.letteringFinish].shadow,
                    }}
                  >
                    {config.fullName || 'FULL NAME OF THE DEPARTED'}
                  </div>

                  {/* Dates */}
                  <div
                    className="text-[11px] sm:text-xs font-medium tracking-widest uppercase mt-3 flex items-center gap-2"
                    style={{
                      color: letteringColorStyles[config.letteringFinish].hex,
                      textShadow: letteringColorStyles[config.letteringFinish].shadow,
                    }}
                  >
                    <span>{config.sunriseDate}</span>
                    <span>—</span>
                    <span>{config.sunsetDate}</span>
                  </div>

                  {/* Tribute message */}
                  {config.tributeMessage && (
                    <div
                      className="font-serif italic text-xs tracking-wide uppercase mt-4 max-w-[85%] leading-relaxed"
                      style={{
                        color: letteringColorStyles[config.letteringFinish].hex,
                        textShadow: letteringColorStyles[config.letteringFinish].shadow,
                      }}
                    >
                      &ldquo;{config.tributeMessage}&rdquo;
                    </div>
                  )}
                </div>

                {/* Bottom Section: Family Dedication */}
                <div className="relative z-10 w-full pb-3 flex flex-col items-center">
                  <div
                    className="text-[10px] tracking-normal max-w-[88%] leading-normal opacity-90"
                    style={{
                      color: letteringColorStyles[config.letteringFinish].hex,
                      textShadow: letteringColorStyles[config.letteringFinish].shadow,
                    }}
                  >
                    {config.familyWords}
                  </div>
                </div>
              </div>

              {/* Pedestal Base */}
              <div
                className="w-[108%] h-12 rounded-b-lg border-t-2 border-stone-900 shadow-2xl relative flex items-center justify-center"
                style={{ backgroundColor: currentStone.colorHex }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="relative z-10 text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                  MAKHWANE PBH · STRUCTURAL GRANITE PEDESTAL
                </span>
              </div>
            </div>

            {/* Inscription Quality Tag */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Includes 120 Free Letters &amp; Computerized Laser Alignment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
