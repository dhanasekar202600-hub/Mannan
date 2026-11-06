import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  FileText, 
  Gift, 
  Eye, 
  Wrench, 
  KeyRound, 
  Check, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
  onOpenConsultationModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForEnquiry,
  onOpenConsultationModal 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = ['All', 'Construction', 'Design & Planning', 'Interiors & Renovation'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Gift': return <Gift className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0F141C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
              <span className="w-6 h-[2px] bg-[#C5A869]"></span>
              <span>Complete End-to-End Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Construction & Architectural Services
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              From soil testing and free blueprint drafting to 3D elevation renders and luxury turnkey delivery—all overseen by Er. Sabarimannan, M.E., Civil.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero pill discipline - clean segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#C5A869] text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const isFreeOffer = service.id === 'free-blueprint-offer';
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-sm transition-all border ${
                  isFreeOffer
                    ? 'bg-[#18202b] border-[#C5A869] shadow-lg shadow-[#C5A869]/10'
                    : 'bg-[#151c26] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80">
                    <span className="text-xs font-mono font-semibold text-[#C5A869]">
                      SERVICE {service.number}
                    </span>
                    <div className={`p-2 rounded-sm ${isFreeOffer ? 'bg-[#C5A869] text-neutral-950' : 'bg-neutral-800/90 text-[#C5A869]'}`}>
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Free blueprint highlight badge/banner */}
                  {isFreeOffer && (
                    <div className="mb-4 p-3 bg-[#C5A869]/15 border border-[#C5A869]/40 rounded-sm">
                      <p className="text-xs text-[#E5C378] font-semibold flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5" />
                        <span>Zero cost · Direct consultation with Er. Sabarimannan</span>
                      </p>
                    </div>
                  )}

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {service.deliverables.slice(0, isExpanded ? service.deliverables.length : 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {service.deliverables.length > 3 && (
                      <button
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="text-xs text-[#C5A869] hover:underline mt-1 cursor-pointer font-medium"
                      >
                        {isExpanded ? 'Show less' : `+${service.deliverables.length - 3} more deliverables`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  {isFreeOffer ? (
                    <button
                      onClick={onOpenConsultationModal}
                      className="w-full py-2.5 px-4 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Claim Free Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectServiceForEnquiry(service.title)}
                      className="w-full py-2 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 rounded-sm text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>Enquire For This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A869]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
