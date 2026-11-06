import React from 'react';
import { Star, Quote, MapPin, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/websiteData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#f5f6f8] text-neutral-900 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B09252]">
            <span className="w-6 h-[2px] bg-[#C5A869]"></span>
            <span>Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Trusted by Discerning Homeowners & Commercial Developers
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Read what our clients say about Er. Sabarimannan's engineering oversight, transparent milestone billing, and meticulous quality control.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-sm shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#C5A869]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A869]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-neutral-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm bg-neutral-900 text-[#C5A869] font-bold flex items-center justify-center text-sm shrink-0">
                  {t.name.slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-950">{t.name}</h4>
                  <p className="text-[11px] text-neutral-500">{t.role}</p>
                  <p className="text-[11px] text-[#B09252] font-medium flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3" />
                    <span>{t.project} · {t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
