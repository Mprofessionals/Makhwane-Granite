import React, { useState } from 'react';
import { MEMORIAL_PRODUCTS, AVAILABLE_STONES } from '../data/memorials';
import { TombstoneProduct, StoneCategory, StoneFinish } from '../types';
import { Eye, ArrowRight, MessageSquare, Check, Sparkles, X, Ruler, Layers, Shield } from 'lucide-react';

interface MemorialCatalogProps {
  onSelectProductForQuote: (productId: string) => void;
}

export const MemorialCatalog: React.FC<MemorialCatalogProps> = ({
  onSelectProductForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<StoneCategory>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<TombstoneProduct | null>(null);
  const [modalStoneFinish, setModalStoneFinish] = useState<StoneFinish>('Zimbabwe Absolute Black');

  const categories: { id: StoneCategory; label: string }[] = [
    { id: 'all', label: 'All Monuments' },
    { id: 'executive-double', label: 'Executive Double' },
    { id: 'modern-sculpted', label: 'Modern & Sculpted' },
    { id: 'single-memorial', label: 'Single Memorials' },
    { id: 'traditional-ledger', label: 'Full Ledgers & Kerbs' },
    { id: 'granite-countertops', label: 'Kitchen & Slabs' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? MEMORIAL_PRODUCTS
    : MEMORIAL_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (product: TombstoneProduct) => {
    setActiveModalProduct(product);
    setModalStoneFinish(product.recommendedStone);
  };

  const handleCloseModal = () => {
    setActiveModalProduct(null);
  };

  return (
    <section id="memorial-catalog" className="py-16 sm:py-24 border-b border-neutral-800 bg-[#0e1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">
              Bespoke Memorial Catalog
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight [text-wrap:balance]">
              Granite Monuments &amp; Architectural Works
            </h2>
          </div>
          <p className="text-sm text-slate-400 mt-3 md:mt-0 max-w-md">
            Every tombstone is cut from natural first-grade quarried stone with hand-beveled edges and steel-reinforced cemetery foundation footings.
          </p>
        </div>

        {/* Interactive Filter Control (Segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'bg-neutral-900/90 text-slate-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                {/* Code Identifier */}
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-neutral-950/80 backdrop-blur-md rounded border border-neutral-700/60">
                  {product.code}
                </div>

                {/* Quick inspect button */}
                <button
                  onClick={() => handleOpenModal(product)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 rounded-lg flex items-center gap-1.5 backdrop-blur-sm transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Specs</span>
                </button>
              </div>

              {/* Product Info Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-purple-400 font-medium mb-1">
                  {product.recommendedStone}
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 flex-grow line-clamp-2">
                  {product.headline}
                </p>

                {/* Technical Dimension Summary (Unboxed text with dots) */}
                <div className="text-[11px] text-slate-400 pb-4 mb-4 border-b border-neutral-800/80 flex flex-wrap gap-x-2 gap-y-1">
                  <span>Headstone: {product.dimensions.headstone.split('x')[0]}</span>
                  <span aria-hidden="true">·</span>
                  <span>Solid Foundation</span>
                  <span aria-hidden="true">·</span>
                  <span>Free Vases</span>
                </div>

                {/* Price and Layby Breakdown */}
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                      Full Price (ZAR)
                    </span>
                    <span className="text-xl font-bold font-mono text-amber-400">
                      R {product.priceZAR.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block uppercase tracking-wider">
                      Lay-by From
                    </span>
                    <span className="text-sm font-semibold font-mono text-purple-300">
                      R {product.monthlyFrom.toLocaleString()} / mo
                    </span>
                  </div>
                </div>

                {/* Action Row */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-slate-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors text-center"
                  >
                    Details &amp; Stones
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(product.id)}
                    className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Invariant Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                Custom Architectural &amp; Unique Monument Requests
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Have an existing photo or custom sketch? Our master stonemasons fabricate bespoke family mausoleums, laser-etched portraits, custom pedestals, and granite countertops to exact millimeter specifications.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectProductForQuote('custom-design')}
            className="whitespace-nowrap px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-xl transition-colors shrink-0"
          >
            Submit Custom Sketch / Photo
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#12141a] border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-purple-400">
                  {activeModalProduct.code}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
              {/* Left Column: Image and Stone Chooser */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3] bg-neutral-950">
                  <img
                    src={activeModalProduct.image}
                    alt={activeModalProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Available Granite Options for this monument */}
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <span className="text-xs font-semibold text-slate-200 block mb-2 uppercase tracking-wider">
                    Select Granite Finish:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {AVAILABLE_STONES.map((stone) => (
                      <button
                        key={stone.name}
                        onClick={() => setModalStoneFinish(stone.name)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left text-xs transition-colors border ${
                          modalStoneFinish === stone.name
                            ? 'border-purple-500 bg-purple-950/40 text-white'
                            : 'border-neutral-800 hover:border-neutral-700 text-slate-300'
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full border border-neutral-600 shrink-0"
                          style={{ backgroundColor: stone.colorHex }}
                        />
                        <span className="truncate">{stone.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Full Specifications and Pricing */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                      Description &amp; Overview
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {activeModalProduct.description}
                    </p>
                  </div>

                  {/* Dimensions Box */}
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center gap-1.5 mb-2">
                      <Ruler className="w-3.5 h-3.5 text-purple-400" />
                      <span>Monument Dimensions</span>
                    </span>
                    <div className="text-xs text-slate-300 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Headstone:</span>
                        <span className="font-mono text-white">{activeModalProduct.dimensions.headstone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Base Pedestal:</span>
                        <span className="font-mono text-white">{activeModalProduct.dimensions.base}</span>
                      </div>
                      {activeModalProduct.dimensions.ledger && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Ledger Slab:</span>
                          <span className="font-mono text-white">{activeModalProduct.dimensions.ledger}</span>
                        </div>
                      )}
                      {activeModalProduct.dimensions.kerbing && (
                        <div className="flex justify-between">
                          <span className="text-slate-400">Kerbing:</span>
                          <span className="font-mono text-white">{activeModalProduct.dimensions.kerbing}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 block mb-2">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-1.5">
                      {activeModalProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price and Action Strip */}
                <div className="pt-4 border-t border-neutral-800">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                        Estimated Investment
                      </span>
                      <span className="text-2xl font-bold font-mono text-amber-400">
                        R {activeModalProduct.priceZAR.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-slate-400 block">
                        Lay-by deposit: R {activeModalProduct.laybyDeposit.toLocaleString()}
                      </span>
                      <span className="text-xs text-purple-300 font-mono">
                        R {activeModalProduct.monthlyFrom.toLocaleString()} / mo (12 mos)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`https://wa.me/27720000000?text=Hi%20Makhwane%20Granite%2C%20I%20am%20interested%20in%20${encodeURIComponent(activeModalProduct.name)}%20(${activeModalProduct.code})%20in%20${encodeURIComponent(modalStoneFinish)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Inquire</span>
                    </a>

                    <button
                      onClick={() => {
                        handleCloseModal();
                        onSelectProductForQuote(activeModalProduct.id);
                      }}
                      className="py-3 px-4 rounded-xl text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Proceed to Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
