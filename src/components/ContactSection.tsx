import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Gift, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/websiteData';

interface ContactSectionProps {
  preFilledService?: string;
  preFilledSpecs?: { area: number; packageType: string; totalEst: number } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preFilledService,
  preFilledSpecs 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: preFilledService || 'Complete Residential House Construction',
    plotSize: preFilledSpecs ? `${preFilledSpecs.area} sq.ft (${preFilledSpecs.packageType})` : '',
    location: '',
    message: '',
    claimFreeBlueprint: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update projectType if preFilledService changes
  React.useEffect(() => {
    if (preFilledService) {
      setFormData(prev => ({ ...prev, projectType: preFilledService }));
    }
  }, [preFilledService]);

  React.useEffect(() => {
    if (preFilledSpecs) {
      setFormData(prev => ({
        ...prev,
        plotSize: `${preFilledSpecs.area} sq.ft (${preFilledSpecs.packageType})`,
        message: `I generated an estimate of ₹${(preFilledSpecs.totalEst / 100000).toFixed(2)} Lakhs for ${preFilledSpecs.area} sq.ft using your Cost Estimator. Please review and provide a free consultation.`
      }));
    }
  }, [preFilledSpecs]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const generateWhatsappRedirect = () => {
    const text = encodeURIComponent(
      `*New Project Enquiry for SMB BUILDERS*\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Project Type:* ${formData.projectType}\n` +
      `*Plot / Built Area:* ${formData.plotSize || 'Not specified'}\n` +
      `*Location:* ${formData.location || 'Not specified'}\n` +
      `*Free Blueprint Claimed:* ${formData.claimFreeBlueprint ? 'YES' : 'NO'}\n` +
      `*Requirements:* ${formData.message || 'Looking for an initial engineering consultation.'}`
    );
    return `https://wa.me/919994403060?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0F141C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A869]">
                <span className="w-6 h-[2px] bg-[#C5A869]"></span>
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Connect Directly With Chief Engineer Sabarimannan
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Whether you need a free initial 2D blueprint, structural engineering calculations, or a comprehensive turnkey quote, we are ready to guide you.
              </p>
            </div>

            {/* Contact Details Card */}
            <div className="bg-[#151c26] border border-neutral-800 p-6 sm:p-7 rounded-sm space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-[#C5A869]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Direct Phone / Call</span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="block text-lg sm:text-xl font-bold text-white hover:text-[#C5A869] transition-colors font-mono mt-0.5"
                  >
                    {COMPANY_DETAILS.phoneDisplay}
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Click to call Er. Sabarimannan directly</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Instant WhatsApp Chat</span>
                  <a
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-base font-bold text-[#25D366] hover:underline mt-0.5"
                  >
                    Chat on WhatsApp ({COMPANY_DETAILS.phone})
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Fast response for site drawings and questions</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-[#C5A869]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Email Inquiries</span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="block text-base font-bold text-white hover:text-[#C5A869] transition-colors mt-0.5"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">Send plot layout scans or municipal approval sets</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-neutral-800">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-sm text-neutral-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-neutral-400">Consultation Hours</span>
                  <p className="text-xs text-neutral-200 font-medium mt-0.5">{COMPANY_DETAILS.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Free Blueprint Reminder Badge */}
            <div className="p-4 bg-[#18202c] border border-[#C5A869]/40 rounded-sm space-y-1.5">
              <span className="text-xs font-bold uppercase text-[#C5A869] flex items-center gap-1.5">
                <Gift className="w-4 h-4" />
                <span>Zero Obligation Guarantee</span>
              </span>
              <p className="text-xs text-neutral-300">
                Your preliminary 2D blueprint consultation is completely free. We will never hound you with unsolicited telemarketing calls.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#151c26] border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Thank You, {formData.name}!</h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto">
                    Your project details have been recorded. Er. Sabarimannan, M.E., Civil will review your requirements and reach out shortly.
                  </p>
                </div>

                <div className="p-4 bg-[#0a0d12] border border-neutral-800 rounded-sm text-left max-w-md mx-auto space-y-1 text-xs text-neutral-400">
                  <p><strong className="text-white">Project:</strong> {formData.projectType}</p>
                  <p><strong className="text-white">Phone:</strong> {formData.phone}</p>
                  {formData.claimFreeBlueprint && (
                    <p className="text-[#C5A869] font-medium">✓ Free 2D blueprint & Vaastu review claimed</p>
                  )}
                </div>

                {/* Instant WhatsApp forward option */}
                <div className="pt-2">
                  <a
                    href={generateWhatsappRedirect()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Details to Sabarimannan on WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-neutral-400 hover:text-white underline cursor-pointer mt-4"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-800 pb-4">
                  <h3 className="text-lg font-bold text-white">Request A Consultation / Quotation</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Fill out the form below. For immediate assistance, call <strong className="text-white">{COMPANY_DETAILS.phone}</strong>.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2 rounded-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Your Full Name <span className="text-[#C5A869]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Phone Number <span className="text-[#C5A869]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Required Service / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white focus:outline-none focus:border-[#C5A869]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Plot Size / Area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Plot Dimensions or Built-up Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 30x40, 2400 sq.ft, 3 floors"
                      value={formData.plotSize}
                      onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Coimbatore, Erode, Tirupur, Salem"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Project Requirements / Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your plot orientation, preferred architectural style, budget expectations, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-[#0a0d12] border border-neutral-700 rounded-xs text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A869]"
                  ></textarea>
                </div>

                {/* Free Blueprint Checkbox */}
                <div className="p-3 bg-[#0a0d12] border border-[#C5A869]/30 rounded-xs flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="claimFreeBlueprint"
                    checked={formData.claimFreeBlueprint}
                    onChange={(e) => setFormData({ ...formData, claimFreeBlueprint: e.target.checked })}
                    className="mt-0.5 accent-[#C5A869] cursor-pointer"
                  />
                  <label htmlFor="claimFreeBlueprint" className="text-xs text-neutral-300 cursor-pointer">
                    <strong className="text-white">Claim FREE 2D Blueprint Consultation</strong>: Have Er. Sabarimannan prepare a preliminary floor plan and Vaastu check for your plot.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#C5A869] hover:bg-[#d8bc7c] text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
