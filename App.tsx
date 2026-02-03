
import React, { useState, createContext, useContext } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { TargetAudience } from './components/TargetAudience';
import { Comparison } from './components/Comparison';
import { Portfolio } from './components/Portfolio';
import { IntermediateCTA } from './components/IntermediateCTA';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LeadFormModal } from './components/LeadFormModal';

// Contexto simples para abrir o modal de qualquer lugar
interface ModalContextType {
  openModal: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useLeadModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useLeadModal must be used within a ModalProvider');
  return context;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div className="relative antialiased selection:bg-emerald-100">
        {/* Brand Header - Simple Logo Only */}
        <header className="absolute top-0 left-0 right-0 z-50 pt-8 px-6 md:px-12 flex justify-center">
          <div className="text-2xl font-extrabold tracking-tighter text-slate-900 uppercase">
            Nexus<span className="text-emerald-600">.</span>
          </div>
        </header>

        <main>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <TargetAudience />
          <Comparison />
          <Portfolio />
          <IntermediateCTA />
          <About />
          <FinalCTA />
        </main>

        <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-lg font-bold tracking-tighter">Nexus<span className="text-emerald-600">.</span></div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Nexus Performance. Todos os direitos reservados.</p>
            <div className="text-slate-400 text-xs">Focado em Conversão e ROI</div>
          </div>
        </footer>

        {/* Floating Sticky CTA */}
        <WhatsAppButton />

        {/* Lead Capture Modal */}
        <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </ModalContext.Provider>
  );
};

export default App;
