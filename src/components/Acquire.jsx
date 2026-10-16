import React, { useState } from 'react';
import { ShoppingBag, Calendar, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PERFUMES } from './TheCollection';

export default function Acquire({ onAddToCart, onBookConsultation }) {
  const [selectedPerfume, setSelectedPerfume] = useState(PERFUMES[0]);

  return (
    <section
      id="acquire"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-24"
    >
      <div className="w-full max-w-[42rem]">
        {/* Gold Accent Line */}
        <div className="w-14 h-[1px] bg-[#E3A94E]/60 mb-6" />

        {/* Eyebrow */}
        <p className="text-[0.62rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-4">
          Acquire
        </p>

        {/* Title */}
        <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#F4ECDD] mb-5">
          Claim your <span className="italic text-[#E3A94E]">number.</span>
        </h2>

        {/* Description */}
        <p className="text-[#B4A891] text-base md:text-lg font-light leading-relaxed max-w-[32rem] mb-8">
          A numbered flacon of the current pour, nestled in a handmade piano-lacquered case sealed with certified gold leaf and accompanied by an archival certificate of extraction.
        </p>

        {/* Flacon Selection Tabs */}
        <div className="mb-8">
          <p className="text-[0.62rem] tracking-[0.25em] uppercase text-[#B4A891] mb-3">
            Select Your Accord:
          </p>
          <div className="flex flex-wrap gap-2">
            {PERFUMES.map((p) => {
              const isSelected = selectedPerfume.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPerfume(p)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#E3A94E] text-[#0A0706] font-medium shadow-[0_0_15px_rgba(227,169,78,0.35)]'
                      : 'border border-[#F4ECDD]/20 text-[#F4ECDD]/80 hover:border-[#E3A94E]/60 hover:text-[#E3A94E]'
                  }`}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Guarantee */}
        <div className="mb-10">
          <div className="font-serif font-light text-5xl sm:text-6xl md:text-7xl text-[#F7D98C] leading-none">
            ${selectedPerfume.price}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-[#B4A891] mt-4 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E3A94E]" /> Free Private Consultation
            </span>
            <span className="text-[#E3A94E] hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E3A94E]" /> Complimentary Express Delivery
            </span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() => onAddToCart(selectedPerfume)}
            className="btn-gold gap-3"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to bag
          </button>
          <button
            onClick={onBookConsultation}
            className="tlink-gold gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E3A94E]" />
            Book a consultation
          </button>
        </div>
      </div>
    </section>
  );
}
