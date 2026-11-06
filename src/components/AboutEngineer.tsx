import React from 'react';
import { Award, CheckCircle2, Phone, Mail, FileCheck, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface AboutEngineerProps {
  onOpenConsultationModal: () => void;
}

export const AboutEngineer: React.FC<AboutEngineerProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8f9fa] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Engineer Profile & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B09252]">
                <span className="w-6 h-[2px] bg-[#C5A869]"></span>
                <span>Leadership & Engineering Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Architectural Vision Grounded in Civil Engineering Precision.
              </h2>
            </div>

            <div className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-sm shadow-sm">
              <div className="flex flex-wrap items-baseline gap-3 pb-4 border-b border-neutral-100">
                <span className="text-xl sm:text-2xl font-bold text-neutral-950">
                  Er. Sabarimannan
                </span>
                <span className="text-sm font-semibold text-[#B09252] tracking-wide">
                  M.E., Civil (Master of Engineering)
                </span>
                <span className="text-xs text-neutral-500">· Chief Structural & Civil Consultant</span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                Building a dream home or a multi-storey commercial venture is often the largest financial commitment
                a client ever makes. At <strong className="text-neutral-950">SMB BUILDERS</strong>, every project is
                governed personally by Chief Engineer Sabarimannan, whose advanced Master's degree in Civil Engineering
                guarantees that aesthetic grandeur is matched with uncompromising structural safety.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B09252] shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">Seismic-resistant structural frame modeling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B09252] shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">On-site concrete cube strength verification</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B09252] shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">Vaastu-aligned functional architectural zoning</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B09252] shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-medium">Direct engineer accessibility with zero middlemen</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Callout Box */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-[#0F141C] text-white rounded-sm">
              <div>
                <p className="text-xs text-[#C5A869] uppercase font-semibold tracking-wider">Direct Engineer Consultation</p>
                <p className="text-sm font-medium text-neutral-200">Have questions about your plot or structural design?</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 text-xs font-bold uppercase rounded-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold rounded-sm transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Technical Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-neutral-300 shadow-lg group">
              <img
                src="/src/assets/images/blueprint_architectural_cad_1793963646572.jpg"
                alt="Architectural Blueprint and CAD Drawings by SMB Builders"
                className="w-full h-80 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C] via-[#0F141C]/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-[#C5A869] uppercase font-bold tracking-wider">Engineering Rigor</span>
                <p className="text-base font-bold text-white">Precision 2D Blueprint & Structural CAD Schedule</p>
                <p className="text-xs text-neutral-300 mt-1">
                  Every beam, column, and conduit calculated to IS 456 & IS 1893 structural standards.
                </p>
              </div>
            </div>

            {/* Credibility highlights cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-neutral-200 rounded-sm">
                <div className="text-2xl font-bold text-neutral-950 font-mono">100%</div>
                <div className="text-xs text-neutral-600 mt-1 font-medium">Licensed Engineer Supervised Sites</div>
              </div>
              <div className="p-4 bg-white border border-neutral-200 rounded-sm">
                <div className="text-2xl font-bold text-[#B09252] font-mono">FREE</div>
                <div className="text-xs text-neutral-600 mt-1 font-medium">Preliminary 2D Floor Plan Consultation</div>
              </div>
            </div>

            <button
              onClick={onOpenConsultationModal}
              className="w-full py-3.5 px-4 bg-white hover:bg-neutral-50 text-neutral-950 font-semibold text-sm border border-neutral-300 rounded-sm flex items-center justify-between group transition-colors cursor-pointer"
            >
              <span>Schedule Free Site & Blueprint Discussion</span>
              <ArrowRight className="w-4 h-4 text-[#B09252] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
