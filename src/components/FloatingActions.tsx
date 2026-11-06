import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Gift, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface FloatingActionsProps {
  onOpenConsultationModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultationModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#0F141C]/90 hover:bg-neutral-800 text-white rounded-full flex items-center justify-center border border-neutral-700 shadow-md transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-[#C5A869]" />
        </button>
      )}

      {/* Free Blueprint Floating CTA */}
      <button
        onClick={onOpenConsultationModal}
        className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-xl transition-all cursor-pointer transform hover:scale-103"
      >
        <Gift className="w-4 h-4" />
        <span>Free Blueprint Offer</span>
      </button>

      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_DETAILS.phone}`}
        className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 text-[#C5A869] rounded-full flex items-center justify-center shadow-xl border border-neutral-700 transition-transform hover:scale-108"
        title={`Call Chief Engineer Sabarimannan at ${COMPANY_DETAILS.phone}`}
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-neutral-950 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-108"
        title="Chat with Er. Sabarimannan on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <MessageSquare className="w-6 h-6 fill-neutral-950" />
      </a>
    </div>
  );
};
