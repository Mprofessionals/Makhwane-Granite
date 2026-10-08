import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MemorialCatalog } from './components/MemorialCatalog';
import { InscriptionStudio } from './components/InscriptionStudio';
import { GraniteCountertops } from './components/GraniteCountertops';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { PricingLayby } from './components/PricingLayby';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { InscriptionCustomizerState } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductIdForQuote, setSelectedProductIdForQuote] = useState<string | undefined>(undefined);
  const [customInscriptionForQuote, setCustomInscriptionForQuote] = useState<InscriptionCustomizerState | null>(null);

  const handleOpenQuoteModal = (productId?: string) => {
    setSelectedProductIdForQuote(productId);
    setQuoteModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInscriptionSendToQuote = (customConfig: InscriptionCustomizerState) => {
    setCustomInscriptionForQuote(customConfig);
    setSelectedProductIdForQuote('makhwane-cathedral-arch');
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0e1015] text-slate-100 flex flex-col font-sans selection:bg-purple-700 selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onExploreCatalog={() => handleNavigateSection('memorial-catalog')}
        />

        {/* Full Monument Catalog */}
        <MemorialCatalog
          onSelectProductForQuote={(id) => handleOpenQuoteModal(id)}
        />

        {/* Live Interactive Inscription Studio */}
        <InscriptionStudio
          onSendToQuote={handleInscriptionSendToQuote}
        />

        {/* Architectural Granite Countertops */}
        <GraniteCountertops
          onOpenQuoteModal={() => handleOpenQuoteModal('makhwane-architectural-kitchen')}
        />

        {/* Stonemasonry Method & Craftsmanship */}
        <CraftsmanshipSection />

        {/* Transparent Lay-By & Funeral Policy Terms */}
        <PricingLayby
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Family Testimonials & Tributes */}
        <Testimonials />

        {/* Direct Consultation & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote Calculator & Order Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductId={selectedProductIdForQuote}
        customInscriptionConfig={customInscriptionForQuote}
      />
    </div>
  );
}
