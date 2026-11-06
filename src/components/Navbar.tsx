import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface NavbarProps {
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F141C]/95 backdrop-blur-md border-b border-neutral-800/80 text-white transition-all">
      {/* Top subtle utility strip with direct engineer contact */}
      <div className="border-b border-neutral-800/60 bg-[#0a0d12] text-xs text-neutral-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[#C5A869] font-medium tracking-wide">
              Chief Engineer: {COMPANY_DETAILS.chiefEngineer}
            </span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span className="hidden sm:inline text-neutral-400">Licensed Civil & Structural Consultants</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
              title="Click to call direct"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
              title="Send direct email"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single clean text element) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2.5 h-6 bg-[#C5A869] inline-block transition-transform group-hover:scale-y-110"></span>
          <span>SMB BUILDERS</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#services" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#projects" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#blueprints" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            2D Blueprints
          </a>
          <a href="#elevations" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            3D Designs
          </a>
          <a href="#interiors" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            Interiors
          </a>
          <a href="#estimator" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            Cost Estimator
          </a>
          <a href="#contact" className="hover:text-[#C5A869] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultationModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-neutral-900 bg-[#C5A869] hover:bg-[#d8bc7c] transition-colors rounded-sm shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Free Blueprint Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-[#0F141C] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              About Chief Engineer
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              Our 11 Services
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              Completed Projects
            </a>
            <a
              href="#blueprints"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              2D Blueprints & Drawings
            </a>
            <a
              href="#elevations"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              3D Elevations & Visuals
            </a>
            <a
              href="#interiors"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              Interior Designs
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              Construction Cost Calculator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5A869] py-1 border-b border-neutral-800/40"
            >
              Contact & Enquiries
            </a>
          </nav>

          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-neutral-900 bg-[#C5A869] rounded-sm"
            >
              <span>Claim Free Blueprint Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex-1 text-center py-2.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-sm"
              >
                Call: {COMPANY_DETAILS.phone}
              </a>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 text-xs font-semibold bg-[#25D366] text-neutral-950 rounded-sm font-bold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
