import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Home } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface InteriorsSectionProps {
  onOpenConsultationModal: () => void;
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

export const InteriorsSection: React.FC<InteriorsSectionProps> = ({ 
  onOpenConsultationModal,
  onSelectServiceForEnquiry 
}) => {
  const [activeTab, setActiveTab] = useState<'living' | 'kitchen' | 'wardrobe' | 'ceiling'>('living');

  const interiorSpecs = {
    living: {
      title: 'Luxury Living & Dining Spaces',
      desc: 'Seamless open-concept layouts combining warmth and architectural grandeur. Fluted wooden wall panelling, bespoke TV backdrops, and Italian marble flooring with brass inlays.',
      materials: [
        'Natural fluted American walnut / teak panels',
        'Concealed 3000K warm LED profile lights',
        'Bespoke TV console with hidden wire management',
        'Italian Botticino / Large-format vitrified slabs'
      ]
    },
    kitchen: {
      title: 'Ergonomic Modular Kitchens',
      desc: 'Engineered for high durability and effortless cooking ergonomics. Termite-proof BWP marine ply, quartz worktops, and soft-closing hardware.',
      materials: [
        'Boiling Water Resistant (BWR/BWP 710) plywood',
        'German Hettich / Hafele tandem drawers & soft-close hinges',
        'Stain-resistant engineered quartz / granite countertops',
        'Dedicated pantry pull-outs and under-sink organizers'
      ]
    },
    wardrobe: {
      title: 'Floor-to-Ceiling Built-In Wardrobes',
      desc: 'Custom-crafted storage solutions maximizing vertical height. Seamless sliding or hinged doors with integrated LED sensor lighting.',
      materials: [
        'Full height floor-to-ceiling carcass construction',
        'Lacquered glass / PU matte / premium laminate finishes',
        'Integrated internal drawer organizers & jewellery trays',
        'Automatic warm LED wardrobe rail illumination'
      ]
    },
    ceiling: {
      title: 'Architectural False Ceilings',
      desc: 'Geometric gypsum ceiling treatments engineered with balanced cove illumination. Conceals AC ducts and electrical conduits without lowering room clearances unnecessarily.',
      materials: [
        'Saint-Gobain Gyproc moisture-resistant boards',
        'GI framework anchored directly to RCC slab',
        'Indirect warm cove lighting creating zero-glare ambiance',
        'Acoustically treated media room ceiling provisions'
      ]
    }
  };

  const current = interiorSpecs[activeTab];

  return (
    <section id="interiors" className="py-20 sm:py-28 bg-[#f8f9fa] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-neutral-200 shadow-xl group">
              <img
                src="/src/assets/images/luxury_interior_living_1793963647023.jpg"
                alt="Luxury Interior Execution by SMB BUILDERS"
                className="w-full h-96 sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C]/80 via-transparent to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-neutral-200 px-3 py-1 text-xs font-bold text-neutral-900 rounded-xs uppercase tracking-wider">
                Full Turnkey Interior Execution
              </div>

              {/* Bottom Details Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F141C]/90 backdrop-blur-md border border-neutral-800 p-4 rounded-sm text-white">
                <p className="text-xs uppercase font-semibold text-[#C5A869]">Integrated Civil + Interior Approach</p>
                <h3 className="text-base font-bold text-white mt-0.5">Bespoke Living Room & Open Dining Architecture</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Because we construct the building ourselves, internal walls, plumbing lines, and electrical conduits are pre-aligned perfectly with the interior woodwork layout.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white border border-neutral-200 rounded-sm">
                <span className="block text-xs font-bold text-neutral-900 uppercase">Marine Grade Plywood</span>
                <span className="text-[11px] text-neutral-500">IS 710 Certified</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-sm">
                <span className="block text-xs font-bold text-neutral-900 uppercase">German Hardware</span>
                <span className="text-[11px] text-neutral-500">Hettich & Hafele</span>
              </div>
              <div className="p-3 bg-white border border-neutral-200 rounded-sm">
                <span className="block text-xs font-bold text-neutral-900 uppercase">Turnkey Warranty</span>
                <span className="text-[11px] text-neutral-500">10-Year Craftsmanship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Room Exploration */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B09252]">
                <span className="w-6 h-[2px] bg-[#C5A869]"></span>
                <span>Craftsmanship & Interior Woodwork</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight">
                Interior Design & Complete Interior Execution
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Eliminate the headache of coordinating separate carpenters, electricians, and painters. SMB BUILDERS delivers integrated turnkey interiors with precision factory-finished joinery.
              </p>
            </div>

            {/* Room Tabs */}
            <div className="flex flex-wrap gap-2 p-1 bg-neutral-100 border border-neutral-200 rounded-sm">
              <button
                onClick={() => setActiveTab('living')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'living' ? 'bg-[#0F141C] text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Living & Dining
              </button>
              <button
                onClick={() => setActiveTab('kitchen')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'kitchen' ? 'bg-[#0F141C] text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Modular Kitchen
              </button>
              <button
                onClick={() => setActiveTab('wardrobe')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'wardrobe' ? 'bg-[#0F141C] text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                Bedrooms & Wardrobes
              </button>
              <button
                onClick={() => setActiveTab('ceiling')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                  activeTab === 'ceiling' ? 'bg-[#0F141C] text-white' : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                False Ceilings
              </button>
            </div>

            {/* Active Room Detail Box */}
            <div className="p-5 bg-white border border-neutral-200 rounded-sm space-y-4 shadow-sm">
              <div>
                <h3 className="text-base font-bold text-neutral-950">{current.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">{current.desc}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Material Standard:</p>
                <ul className="space-y-1.5 text-xs text-neutral-800">
                  {current.materials.map((mat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#B09252] shrink-0 mt-0.5" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => onSelectServiceForEnquiry('Interior Design & Complete Interior Execution')}
                className="flex-1 py-3 px-4 bg-[#0F141C] hover:bg-[#1f2837] text-white font-semibold text-xs uppercase tracking-wider rounded-sm text-center transition-colors cursor-pointer"
              >
                Inquire For Interiors
              </button>
              <button
                onClick={onOpenConsultationModal}
                className="py-3 px-4 bg-white hover:bg-neutral-50 text-[#B09252] border border-[#C5A869] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Free 3D Moodboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
