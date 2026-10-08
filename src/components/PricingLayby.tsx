import React, { useState } from 'react';
import { ShieldCheck, Calendar, Clock, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

interface PricingLaybyProps {
  onOpenQuoteModal: () => void;
}

export const PricingLayby: React.FC<PricingLaybyProps> = ({
  onOpenQuoteModal,
}) => {
  const [totalCost, setTotalCost] = useState<number>(24500);
  const [months, setMonths] = useState<number>(6);
  const [depositPercent, setDepositPercent] = useState<number>(20);

  const depositAmount = Math.round((totalCost * depositPercent) / 100);
  const remainingBalance = totalCost - depositAmount;
  const monthlyInstalment = Math.round(remainingBalance / months);

  return (
    <section id="layby-pricing" className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0e1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
            Compassionate &amp; Transparent Terms
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
            0% Interest Lay-By Plans &amp; Funeral Policy Support
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            We honor your family’s dignity and budget. Lock in current granite prices with a modest deposit and pay comfortably over 3 to 12 months ahead of your unveiling ceremony.
          </p>
        </div>

        {/* Lay-By Calculator & Policy Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-serif text-lg font-bold text-white mb-6 flex items-center justify-between">
              <span>Lay-By Payment Estimator</span>
              <span className="text-xs font-mono text-purple-400 font-semibold px-2.5 py-1 bg-purple-950/60 rounded border border-purple-800/60">
                0% Interest · No Hidden Admin Fees
              </span>
            </h3>

            {/* Price Presets & Slider */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Memorial Package Amount:
                  </label>
                  <span className="font-mono text-lg font-bold text-amber-400">
                    R {totalCost.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="8500"
                  max="60000"
                  step="500"
                  value={totalCost}
                  onChange={(e) => setTotalCost(Number(e.target.value))}
                  className="w-full accent-purple-600 bg-neutral-950 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>R 8,500 (Single)</span>
                  <span>R 24,500 (Full Ledger)</span>
                  <span>R 60,000 (Mausoleum)</span>
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Repayment Duration:
                  </label>
                  <span className="font-mono text-base font-bold text-purple-400">
                    {months} Months
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                        months === m
                          ? 'border-purple-500 bg-purple-950 text-white shadow-sm'
                          : 'border-neutral-800 bg-neutral-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Deposit Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Initial Deposit:
                  </label>
                  <span className="font-mono text-sm font-bold text-slate-200">
                    {depositPercent}% (R {depositAmount.toLocaleString()})
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 20, 30].map((p) => (
                    <button
                      key={p}
                      onClick={() => setDepositPercent(p)}
                      className={`py-1.5 text-xs font-medium rounded-lg border transition-all ${
                        depositPercent === p
                          ? 'border-purple-500 bg-purple-950/60 text-white'
                          : 'border-neutral-800 bg-neutral-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}% Deposit
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculation Outcome Box */}
              <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="border-b sm:border-b-0 sm:border-r border-neutral-800 pb-3 sm:pb-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                    Initial Deposit
                  </span>
                  <span className="font-mono text-lg font-bold text-white">
                    R {depositAmount.toLocaleString()}
                  </span>
                </div>

                <div className="border-b sm:border-b-0 sm:border-r border-neutral-800 pb-3 sm:pb-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                    Monthly Instalment
                  </span>
                  <span className="font-mono text-xl font-extrabold text-amber-400">
                    R {monthlyInstalment.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-500 block">for {months} months</span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">
                    Total Interest
                  </span>
                  <span className="font-mono text-lg font-bold text-emerald-400">
                    R 0.00 (Free)
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Lock in This Lay-By Plan for Unveiling</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Funeral Claims & Invariants (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Policy Assistance Box */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <CreditCard className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Funeral Policy Tombstone Claims
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                We provide official registered tax invoices, cemetery permits, and compliance certificates for direct claims from major funeral policies:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ AVBOB Funeral</div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ Old Mutual</div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ Sanlam Sky</div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ Metropolitan Life</div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ 1Life Funeral</div>
                <div className="p-2 bg-neutral-950 rounded border border-neutral-800">✓ Society Schemes</div>
              </div>
            </div>

            {/* Cemetery Guarantees */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
              <ShieldCheck className="w-6 h-6 text-purple-400 mb-3" />
              <h4 className="font-serif text-base font-bold text-white mb-2">
                All-Inclusive Guarantee
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Free safe storage in our secured yard until your unveiling date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>Cemetery permit assistance and municipal regulations check.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>100% money-back structural invariant stone guarantee.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
