import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/websiteData';

interface FooterProps {
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultationModal }) => {
  return (
    <footer className="bg-[#0a0d12] text-white border-t border-neutral-800">
      {/* Upper Footer: Engineering Brand & Core Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand & Leadership (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#C5A869] inline-block"></span>
              <span className="text-2xl font-bold tracking-tight text-white">SMB BUILDERS</span>
            </div>

            <div className="p-4 bg-[#151c26] border border-neutral-800 rounded-sm space-y-1 text-xs">
              <span className="text-neutral-400 uppercase font-semibold">Chief Structural Engineer:</span>
              <p className="text-sm font-bold text-[#C5A869]">{COMPANY_DETAILS.chiefEngineer}</p>
              <p className="text-neutral-400">Master of Engineering (Civil) · Structural Designer & Consultant</p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Premier construction company specializing in turnkey residential house construction, commercial buildings, architectural planning, 2D blueprints, photorealistic 3D elevations, and bespoke interior execution.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                <span>Free Blueprint Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A869]">Navigation</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Chief Engineer</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our 11 Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#blueprints" className="hover:text-white transition-colors">2D CAD Blueprints</a></li>
              <li><a href="#elevations" className="hover:text-white transition-colors">3D Elevations</a></li>
              <li><a href="#interiors" className="hover:text-white transition-colors">Interior Designs</a></li>
              <li><a href="#estimator" className="hover:text-white transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Enquiries</a></li>
            </ul>
          </div>

          {/* Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A869]">Key Services</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Residential Villa Construction</li>
              <li>Commercial Complexes & Plazas</li>
              <li>Architectural Master Planning</li>
              <li>Structural Civil Engineering</li>
              <li>Turnkey Interior Woodwork & Lighting</li>
              <li>3D Facade & Walkthrough Models</li>
              <li>Renovation & Floor Extensions</li>
              <li>Complimentary Initial Blueprints</li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A869]">Direct Contact</h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-neutral-500 block">Phone / Mobile:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="text-sm font-bold text-white hover:text-[#C5A869] transition-colors font-mono"
                >
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-neutral-500 block">WhatsApp:</span>
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:underline"
                >
                  +91 {COMPANY_DETAILS.phone} (Instant Chat)
                </a>
              </div>

              <div>
                <span className="text-neutral-500 block">Email Address:</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-xs font-medium text-white hover:text-[#C5A869] transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div>
                <span className="text-neutral-500 block">Consultation Hours:</span>
                <span className="text-neutral-300">{COMPANY_DETAILS.officeHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-[#06080b] py-6 px-4 sm:px-8 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SMB BUILDERS. All rights reserved.</p>
          <p>
            Industry: Construction, Architecture, Building Design, and Interior Design.
          </p>
          <p className="text-neutral-400">
            Engineered by <strong className="text-neutral-300">Er. Sabarimannan, M.E., Civil</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
