import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, Check, ShieldCheck, Info } from 'lucide-react';
import { PACKAGES, COMPANY_DETAILS } from '../data/websiteData';

interface CostEstimatorProps {
  onPreFillEnquiry: (details: { area: number; packageType: string; totalEst: number }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onPreFillEnquiry }) => {
  const [builtUpArea, setBuiltUpArea] = useState<number>(2000);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [floors, setFloors] = useState<number>(2);

  const selectedPackage = PACKAGES.find(p => p.id === selectedPackageId) || PACKAGES[1];

  // Calculation
  const totalCost = builtUpArea * selectedPackage.ratePerSqFt;
  const civilCost = Math.round(totalCost * 0.50);
  const finishCost = Math.round(totalCost * 0.22);
  const mepCost = Math.round(totalCost * 0.14);
  const woodworkCost = Math.round(totalCost * 0.14);

  const formatLakhs = (val: number) => {
    const inLakhs = val / 100000;
    if (inLakhs >= 100) {
      return `₹${(inLakhs / 100).toFixed(2)} Crores`;
    }
    return `₹${inLakhs.toFixed(2)} Lakhs`;
  };

  const generateWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Hello Er. Sabarimannan, I used the SMB BUILDERS Cost Calculator:\n- Built-up Area: ${builtUpArea} sq.ft\n- Package: ${selectedPackage.name} (₹${selectedPackage.ratePerSqFt}/sq.ft)\n- Floors: ${floors > 1 ? `G+${floors - 1}` : 'Ground Floor'}\n- Estimated Budget: ${formatLakhs(totalCost)}\nCould you please review and share the free blueprint consultation?`
    );
    return `https://wa.me/919994403060?text=${text}`;
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-[#f8f9fa] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B09252]">
            <span className="w-6 h-[2px] bg-[#C5A869]"></span>
            <span>Transparent Budgeting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Interactive Construction Cost Estimator
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Get an instant, transparent ballpark budget based on verified Tamil Nadu civil construction rates and premium material specifications.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-6 sm:p-8 rounded-sm shadow-sm space-y-8">
            {/* Step 1: Area Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                  1. Built-Up Area (sq.ft)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    value={builtUpArea}
                    min={600}
                    max={12000}
                    step={50}
                    onChange={(e) => setBuiltUpArea(Number(e.target.value) || 600)}
                    className="w-28 text-right p-1.5 border border-neutral-300 rounded-xs font-mono font-bold text-neutral-950 text-sm"
                  />
                  <span className="text-xs text-neutral-500 font-medium">sq.ft</span>
                </div>
              </div>

              <input
                type="range"
                min={600}
                max={8000}
                step={50}
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                className="w-full accent-[#B09252] cursor-pointer"
              />

              <div className="flex justify-between text-xs text-neutral-400 font-mono">
                <span>600 sq.ft (Compact)</span>
                <span>2,000 sq.ft (Standard Villa)</span>
                <span>8,000+ sq.ft (Grand Estate)</span>
              </div>
            </div>

            {/* Step 2: Number of Floors */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                2. Number of Floors
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFloors(f)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xs border transition-colors cursor-pointer ${
                      floors === f
                        ? 'bg-[#0F141C] text-white border-[#0F141C]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {f === 1 ? 'Ground' : f === 2 ? 'G + 1' : f === 3 ? 'G + 2' : 'G + 3+'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Package Tier Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                3. Construction Package & Specification Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-sm border cursor-pointer transition-all ${
                      selectedPackageId === pkg.id
                        ? 'border-[#B09252] bg-[#fbf8f2] shadow-sm ring-1 ring-[#B09252]'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-900">{pkg.name}</span>
                      {pkg.popular && (
                        <span className="text-[10px] font-bold text-[#B09252] uppercase">Popular</span>
                      )}
                    </div>
                    <div className="mt-2 text-lg font-extrabold text-neutral-950 font-mono">
                      ₹{pkg.ratePerSqFt}
                      <span className="text-xs font-normal text-neutral-500">/sq.ft</span>
                    </div>
                    <p className="mt-1 text-[11px] text-neutral-500 line-clamp-2">{pkg.idealFor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Package Material Specs */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-sm space-y-2 text-xs">
              <span className="font-bold text-neutral-900 uppercase tracking-wider block">
                {selectedPackage.name} Specifications:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-700">
                <div><strong>Steel:</strong> {selectedPackage.steel}</div>
                <div><strong>Cement:</strong> {selectedPackage.cement}</div>
                <div><strong>Flooring:</strong> {selectedPackage.flooring}</div>
                <div><strong>Plumbing:</strong> {selectedPackage.plumbing}</div>
              </div>
            </div>
          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F141C] text-white p-6 sm:p-8 rounded-sm shadow-xl border border-neutral-800 space-y-6">
            <div className="border-b border-neutral-800 pb-4">
              <span className="text-xs uppercase font-semibold text-[#C5A869] tracking-wider">
                Estimated Project Cost
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mt-1">
                {formatLakhs(totalCost)}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Based on {builtUpArea.toLocaleString()} sq.ft @ ₹{selectedPackage.ratePerSqFt}/sq.ft ({selectedPackage.name})
              </p>
            </div>

            {/* Estimated Milestone Breakdown */}
            <div className="space-y-3">
              <p className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Stage-Wise Milestone Allocation:
              </p>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                  <span className="text-neutral-300">1. Civil Structure & RCC Frame (50%)</span>
                  <span className="font-mono font-medium text-white">{formatLakhs(civilCost)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                  <span className="text-neutral-300">2. Finishes, Plaster & Flooring (22%)</span>
                  <span className="font-mono font-medium text-white">{formatLakhs(finishCost)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                  <span className="text-neutral-300">3. Electrical & Plumbing Lines (14%)</span>
                  <span className="font-mono font-medium text-white">{formatLakhs(mepCost)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                  <span className="text-neutral-300">4. Doors, Windows & Railings (14%)</span>
                  <span className="font-mono font-medium text-white">{formatLakhs(woodworkCost)}</span>
                </div>
              </div>
            </div>

            {/* Free Blueprint offer reminder */}
            <div className="p-3 bg-neutral-900 border border-[#C5A869]/40 rounded-sm text-xs text-neutral-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
              <span>
                Includes <strong>10-Year Structural Stability Warranty</strong> and a <strong>Free 2D Blueprint & Vaastu Analysis</strong> by Er. Sabarimannan.
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate To Er. Sabarimannan on WhatsApp</span>
              </a>

              <button
                onClick={() => onPreFillEnquiry({ area: builtUpArea, packageType: selectedPackage.name, totalEst: totalCost })}
                className="w-full py-3 px-4 bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Formal Site Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
