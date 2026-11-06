import React from 'react';
import { GraduationCap, Gift, CheckCircle2, CreditCard, Box, Shield, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_DETAILS } from '../data/websiteData';

interface WhyChooseUsProps {
  onOpenConsultationModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultationModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#C5A869]" />;
      case 'Gift': return <Gift className="w-5 h-5 text-[#C5A869]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#C5A869]" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-[#C5A869]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#C5A869]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#C5A869]" />;
      default: return <Shield className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0F141C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
            <span className="w-6 h-[2px] bg-[#C5A869]"></span>
            <span>The SMB BUILDERS Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Homeowners & Commercial Clients Trust Er. Sabarimannan
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Civil construction should never be a game of chance. We bring rigorous scientific standards, transparent contracts, and an engineer's integrity to every foundation we cast.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-[#151c26] border border-neutral-800 rounded-sm hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800/60 text-xs text-neutral-500 font-mono">
                PILLAR 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Banner for Free Blueprint Offer */}
        <div className="mt-12 bg-gradient-to-r from-[#17202c] via-[#1a2432] to-[#17202c] border border-[#C5A869]/50 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A869]">
              Special Offer For Prospective Homebuilders
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Get Your Free Initial 2D Blueprint & Design Consultation
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Talk directly with Chief Engineer Sabarimannan, M.E., Civil. No obligation, no sales pressure — just honest engineering guidance for your dream project.
            </p>
          </div>

          <button
            onClick={onOpenConsultationModal}
            className="py-3 px-6 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center gap-2 shrink-0 transition-colors cursor-pointer shadow-lg"
          >
            <span>Claim Free Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
