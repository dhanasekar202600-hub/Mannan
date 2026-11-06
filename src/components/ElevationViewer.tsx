import React, { useState } from 'react';
import { Sun, Moon, Eye, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface ElevationViewerProps {
  onOpenConsultationModal: () => void;
}

export const ElevationViewer: React.FC<ElevationViewerProps> = ({ onOpenConsultationModal }) => {
  const [lightingMode, setLightingMode] = useState<'day' | 'dusk'>('dusk');

  return (
    <section id="elevations" className="py-20 sm:py-28 bg-[#0F141C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Render Showcase with Interactive Lighting */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-2xl group">
              <img
                src="/src/assets/images/elevation_3d_modern_1793963645728.jpg"
                alt="3D Modern Architectural Elevation by SMB Builders"
                className={`w-full h-96 sm:h-[480px] object-cover transition-all duration-700 ${
                  lightingMode === 'day' ? 'brightness-115 contrast-95 saturate-90' : 'brightness-100 contrast-105'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for readable badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C]/80 via-transparent to-black/30 pointer-events-none"></div>

              {/* Lighting Simulation Toggle */}
              <div className="absolute top-4 left-4 bg-[#0F141C]/90 backdrop-blur-md border border-neutral-700 p-1 rounded-sm flex items-center gap-1 z-10">
                <button
                  onClick={() => setLightingMode('day')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    lightingMode === 'day' ? 'bg-[#C5A869] text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Daytime Light</span>
                </button>
                <button
                  onClick={() => setLightingMode('dusk')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                    lightingMode === 'dusk' ? 'bg-[#C5A869] text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dusk Warm Glow</span>
                </button>
              </div>

              {/* Badge for render fidelity */}
              <div className="absolute top-4 right-4 bg-neutral-900/90 border border-neutral-700 text-xs px-3 py-1 rounded-xs text-[#C5A869] font-mono backdrop-blur-md">
                3D CAD · PHOTOREALISTIC
              </div>

              {/* Bottom Feature Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F141C]/90 backdrop-blur-md border border-neutral-800 p-4 rounded-sm flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-white">Contemporary Duplex Residence Elevation</h3>
                  <p className="text-xs text-neutral-300 mt-0.5">Dry-stacked slate stone cladding · Continuous cove LED · Floor-to-ceiling structural glazing</p>
                </div>
                <span className="text-xs font-semibold text-[#C5A869] bg-[#C5A869]/10 px-2.5 py-1 rounded-xs border border-[#C5A869]/30">
                  Built to 3D Specs
                </span>
              </div>
            </div>

            {/* Quick architectural notes */}
            <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
              <span>Interactive Elevation Simulator</span>
              <span>Rendered before brickwork starts to prevent on-site rework</span>
            </div>
          </div>

          {/* Right Column: Explanatory Content & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
                <span className="w-6 h-[2px] bg-[#C5A869]"></span>
                <span>Visualizing Before Pouring Concrete</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Photorealistic 3D Exterior Elevations & Walkthroughs
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Most homeowners find it difficult to imagine a finished building purely from flat 2D lines. At SMB BUILDERS, we build complete 3D digital twins of your house first.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-neutral-900/90 border border-neutral-800 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#C5A869]" />
                  <span>Exact Material & Texture Selection</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Compare natural teak wood louvers, Italian stone cladding, porcelain exterior tiles, and glass railing styles before ordering materials.
                </p>
              </div>

              <div className="p-4 bg-neutral-900/90 border border-neutral-800 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A869]" />
                  <span>Day & Night Architectural Lighting Cues</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Plan your facade lighting points, wall grazers, and step lights directly into the structural casting stage to avoid unsightly exterior conduit pipes.
                </p>
              </div>

              <div className="p-4 bg-neutral-900/90 border border-neutral-800 rounded-sm space-y-1.5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A869]" />
                  <span>3D Walkthrough Video Walkdowns</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Walk through entry foyers, double-height living halls, and open terrace gardens with your family prior to site clearance.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full py-3.5 px-5 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                <span>Request 3D Elevation Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
