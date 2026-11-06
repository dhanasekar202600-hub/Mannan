import React from 'react';
import { ArrowRight, Phone, Gift, ShieldCheck, Ruler, Building, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0F141C] text-white overflow-hidden">
      {/* Background Hero Image with measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_modern_villa_1793963645933.jpg"
          alt="Modern luxury villa constructed by SMB BUILDERS"
          className="w-full h-full object-cover object-center opacity-45 scale-102 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered architectural scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#0a0d12] via-[#0F141C]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0F141C]/40 to-[#0a0d12]/95"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Engineering Credential Kicker (clean unboxed typographic styling, no pills) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm tracking-wider uppercase font-semibold text-[#C5A869]">
            <span className="w-8 h-[2px] bg-[#C5A869]"></span>
            <span>SMB BUILDERS</span>
            <span className="text-neutral-500">·</span>
            <span>Chief Engineer: {COMPANY_DETAILS.chiefEngineer}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
            Where Precision Civil Engineering Meets Architectural Mastery.
          </h1>

          {/* Subtitle Value Proposition */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Complete residential villas, commercial landmarks, photorealistic 3D elevations, 
            and turnkey interior execution. Personally planned, calculated, and supervised by{' '}
            <strong className="text-white font-medium">Er. Sabarimannan, M.E., Civil</strong> for guaranteed 
            structural longevity.
          </p>

          {/* Highlighted Free Blueprint Offer Callout */}
          <div className="bg-[#171F2A]/90 border border-[#C5A869]/40 p-4 sm:p-5 rounded-sm backdrop-blur-sm max-w-2xl shadow-xl">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-[#C5A869]/15 text-[#C5A869] rounded-sm shrink-0 mt-0.5">
                <Gift className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#C5A869]">
                    Exclusive Customer Offer
                  </span>
                  <span className="text-xs text-neutral-400">· 100% Free Consultation</span>
                </div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Complimentary 2D Architectural Blueprint & Vaastu Analysis
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Share your plot dimensions and Er. Sabarimannan will draft a preliminary 2D floor plan 
                  with structural recommendations at zero cost.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-neutral-950 bg-[#C5A869] hover:bg-[#d8bc7c] transition-all rounded-sm shadow-lg hover:shadow-[#C5A869]/20 cursor-pointer"
            >
              <span>Claim Free Blueprint Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 transition-all rounded-sm backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#C5A869]" />
              <span>Call Direct: {COMPANY_DETAILS.phone}</span>
            </a>

            <a
              href="#estimator"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-neutral-300 hover:text-white transition-colors underline decoration-neutral-600 hover:decoration-[#C5A869] underline-offset-4"
            >
              <span>Calculate Construction Cost</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Proof Strip / 4-Column Engineering Trust Indicators below hero */}
      <div className="relative z-10 border-t border-neutral-800 bg-[#0a0d12]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C5A869] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Licensed Civil Master</p>
                <p className="text-sm font-semibold text-white">Sabarimannan, M.E.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 text-[#C5A869] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Free Offer</p>
                <p className="text-sm font-semibold text-white">Initial 2D Blueprint</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Ruler className="w-6 h-6 text-[#C5A869] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Structural Testing</p>
                <p className="text-sm font-semibold text-white">Certified 550D Steel & Cement</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-[#C5A869] shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Delivery Guarantee</p>
                <p className="text-sm font-semibold text-white">Milestone Payment Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
