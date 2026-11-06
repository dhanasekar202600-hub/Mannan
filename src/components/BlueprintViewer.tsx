import React, { useState } from 'react';
import { Ruler, Compass, Layers, CheckCircle, ArrowRight, Download, Eye, Gift } from 'lucide-react';
import { BLUEPRINT_PLANS } from '../data/websiteData';

interface BlueprintViewerProps {
  onOpenConsultationModal: () => void;
}

export const BlueprintViewer: React.FC<BlueprintViewerProps> = ({ onOpenConsultationModal }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(BLUEPRINT_PLANS[0].id);
  const [activeTab, setActiveTab] = useState<'blueprint' | 'vaastu' | 'structural'>('blueprint');

  const selectedPlan = BLUEPRINT_PLANS.find(p => p.id === selectedPlanId) || BLUEPRINT_PLANS[0];

  return (
    <section id="blueprints" className="py-20 sm:py-28 bg-[#f5f6f8] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B09252]">
            <span className="w-6 h-[2px] bg-[#C5A869]"></span>
            <span>Architectural Drafting & Engineering Drawings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            2D Blueprints, Working Drawings & Vaastu Layouts
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Eliminate costly construction mistakes with millimeter-precise CAD drawings. Every plan crafted by Er. Sabarimannan includes structural columns, plumbing slopes, electrical conduits, and strict Vaastu alignment.
          </p>
        </div>

        {/* Blueprint Viewer Card */}
        <div className="bg-white border border-neutral-200 rounded-sm shadow-md overflow-hidden">
          {/* Plan Selection Bar */}
          <div className="p-4 sm:p-5 bg-[#0F141C] text-white flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-semibold text-neutral-400 mr-2">Sample Plans:</span>
              {BLUEPRINT_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    selectedPlanId === plan.id
                      ? 'bg-[#C5A869] text-neutral-950'
                      : 'bg-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                >
                  {plan.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenConsultationModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A869] text-neutral-950 text-xs font-bold uppercase rounded-xs hover:bg-[#d8bc7c] transition-colors cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>Get Free Blueprint For Your Plot</span>
              </button>
            </div>
          </div>

          {/* Main Inspection Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Blueprint Display Area */}
            <div className="lg:col-span-7 bg-[#171f2a] p-4 sm:p-6 flex flex-col justify-between">
              <div className="relative rounded-sm overflow-hidden border border-neutral-700 bg-neutral-900 group">
                <img
                  src={selectedPlan.blueprintImg}
                  alt={selectedPlan.title}
                  className="w-full h-80 sm:h-96 object-contain bg-[#1c2430] p-2"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Technical Overlay Tag */}
                <div className="absolute top-3 left-3 bg-[#0F141C]/90 border border-neutral-700 text-neutral-200 text-xs px-2.5 py-1 rounded-xs backdrop-blur-sm font-mono">
                  SCALE: 1:50 · CAD DRAFTING
                </div>

                {/* Vaastu / Compass overlay badge */}
                <div className="absolute top-3 right-3 bg-[#0F141C]/90 border border-[#C5A869]/50 text-[#C5A869] text-xs px-2.5 py-1 rounded-xs flex items-center gap-1.5 backdrop-blur-sm font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{selectedPlan.facing}</span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F141C]/90 border border-neutral-700 p-2.5 text-xs text-neutral-300 rounded-xs backdrop-blur-sm flex items-center justify-between">
                  <span>Plot Size: <strong className="text-white">{selectedPlan.dimensions}</strong></span>
                  <span>Built-up: <strong className="text-[#C5A869]">{selectedPlan.totalArea}</strong></span>
                </div>
              </div>

              {/* Free initial blueprint guarantee ribbon */}
              <div className="mt-4 p-3 bg-neutral-900/90 border border-neutral-700 text-neutral-300 text-xs flex items-center justify-between rounded-sm">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#C5A869]" />
                  <span>Planning to build? We will draw your custom 2D layout at no charge.</span>
                </div>
                <button
                  onClick={onOpenConsultationModal}
                  className="text-[#C5A869] hover:underline font-semibold cursor-pointer shrink-0 ml-2"
                >
                  Request Consultation →
                </button>
              </div>
            </div>

            {/* Right Detailed Engineering Breakdown */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Tabs */}
                <div className="flex border-b border-neutral-200 gap-4 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('blueprint')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'blueprint'
                        ? 'border-b-2 border-[#B09252] text-neutral-950'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Room Allocations
                  </button>
                  <button
                    onClick={() => setActiveTab('vaastu')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'vaastu'
                        ? 'border-b-2 border-[#B09252] text-neutral-950'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Vaastu Compliances
                  </button>
                  <button
                    onClick={() => setActiveTab('structural')}
                    className={`pb-2 transition-colors cursor-pointer ${
                      activeTab === 'structural'
                        ? 'border-b-2 border-[#B09252] text-neutral-950'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Structural Specs
                  </button>
                </div>

                {/* Plan Title & Specs */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-950">{selectedPlan.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600">
                    <span>Dimensions: <strong>{selectedPlan.dimensions}</strong></span>
                    <span>·</span>
                    <span>Built Area: <strong>{selectedPlan.totalArea}</strong></span>
                    <span>·</span>
                    <span>Facing: <strong>{selectedPlan.facing}</strong></span>
                  </div>
                </div>

                {/* Tab Content */}
                {activeTab === 'blueprint' && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Zoned Spatial Layout:
                    </p>
                    <div className="space-y-2">
                      {selectedPlan.rooms.map((room, idx) => (
                        <div key={idx} className="p-2.5 bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 rounded-sm">
                          {room}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'vaastu' && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Scientific Vaastu Principles Applied:
                    </p>
                    <div className="space-y-2">
                      {selectedPlan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-[#B09252] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'structural' && (
                  <div className="space-y-3 text-xs text-neutral-700 leading-relaxed">
                    <p className="font-semibold uppercase tracking-wider text-neutral-500">
                      Civil Engineering Drawings Included:
                    </p>
                    <div className="p-3 bg-neutral-50 border border-neutral-200 space-y-2 rounded-sm">
                      <p><strong>1. Foundation & Footing Layout:</strong> Isolated/combined footing sizing based on safe soil bearing capacity.</p>
                      <p><strong>2. Column & Plinth Beam Schedule:</strong> Bar bending schedule (BBS) specifying primary Fe 550D rebar and stirrup spacing.</p>
                      <p><strong>3. Electrical & Plumbing Conduits:</strong> Embedded conduit layout preventing post-casting wall hacking.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-neutral-200">
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full py-3 px-4 bg-[#0F141C] hover:bg-[#1f2837] text-white font-semibold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Submit My Plot Size For Free 2D Draft</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
