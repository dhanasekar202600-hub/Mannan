import React, { useState } from 'react';
import { X, Gift, Compass, CheckCircle2, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

interface FreeBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeBlueprintModal: React.FC<FreeBlueprintModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plotDimensions, setPlotDimensions] = useState('30 x 40 ft');
  const [facing, setFacing] = useState('North Facing');
  const [floorsPlanned, setFloorsPlanned] = useState('G+1 (Duplex)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const generateWhatsappUrl = () => {
    const text = encodeURIComponent(
      `*FREE BLUEPRINT REQUEST - SMB BUILDERS*\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Plot Dimensions:* ${plotDimensions}\n` +
      `*Plot Facing:* ${facing}\n` +
      `*Floors Planned:* ${floorsPlanned}\n` +
      `*Additional Notes:* ${notes || 'Looking for an initial 2D floor plan and Vaastu guidance.'}\n\n` +
      `Er. Sabarimannan, please review my plot details for the free initial design consultation.`
    );
    return `https://wa.me/919994403060?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#151c26] border border-neutral-700 rounded-sm max-w-lg w-full p-6 text-white shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-white">Free Blueprint Request Received!</h3>
              <p className="text-xs text-neutral-300">
                Thank you, <strong>{name}</strong>. Chief Engineer Sabarimannan, M.E., Civil will review your {plotDimensions} ({facing}) plot orientation.
              </p>
            </div>

            <div className="p-3 bg-[#0a0d12] border border-neutral-800 rounded-xs text-xs text-neutral-300 text-left space-y-1">
              <p>✓ Preliminary 2D floor plan zoning</p>
              <p>✓ Vaastu compliance check</p>
              <p>✓ Approximate material & budget breakdown</p>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Plot Details Direct to Sabarimannan on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Modal Header */}
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#C5A869]">
                <Gift className="w-3.5 h-3.5" />
                <span>Complimentary Engineering Service</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Claim Your Free 2D Blueprint Consultation
              </h3>
              <p className="text-xs text-neutral-400">
                Tell us your plot size and facing. Er. Sabarimannan will personally prepare an initial conceptual floor plan at zero cost.
              </p>
            </div>

            {error && (
              <div className="p-2.5 bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2 rounded-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Plot Dimensions</label>
                <input
                  type="text"
                  placeholder="e.g. 30x40, 40x60, 2400 sq.ft"
                  value={plotDimensions}
                  onChange={(e) => setPlotDimensions(e.target.value)}
                  className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-300">Plot Facing</label>
                <select
                  value={facing}
                  onChange={(e) => setFacing(e.target.value)}
                  className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white focus:outline-none focus:border-[#C5A869]"
                >
                  <option value="North Facing">North Facing</option>
                  <option value="East Facing">East Facing</option>
                  <option value="South Facing">South Facing</option>
                  <option value="West Facing">West Facing</option>
                  <option value="Corner Plot (North-East)">Corner Plot (North-East)</option>
                  <option value="Corner Plot (Other)">Corner Plot (Other)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Floors Planned</label>
              <select
                value={floorsPlanned}
                onChange={(e) => setFloorsPlanned(e.target.value)}
                className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white focus:outline-none focus:border-[#C5A869]"
              >
                <option value="Ground Floor Only">Ground Floor Only (Independent House)</option>
                <option value="G+1 (Duplex Villa)">G+1 (Duplex Villa)</option>
                <option value="G+2 (Multi-Storey Villa / Rental Units)">G+2 (Multi-Storey Villa / Rental Units)</option>
                <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-neutral-300">Specific Preferences (Optional)</label>
              <textarea
                rows={2}
                placeholder="Number of bedrooms, car parking requirements, pooja room placement..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 bg-[#0a0d12] border border-neutral-700 rounded-xs text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                <span>Request Free 2D Blueprint Draft</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 text-center">
              Direct consultation with Sabarimannan, M.E., Civil · Call <strong>{COMPANY_DETAILS.phone}</strong> anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
