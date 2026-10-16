import React from 'react';
import { Award, ShieldCheck, Flame } from 'lucide-react';

export default function TheMaison() {
  return (
    <section
      id="maison"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-24"
    >
      <div className="w-full max-w-[42rem]">
        {/* Gold Accent Line */}
        <div className="w-14 h-[1px] bg-[#E3A94E]/60 mb-6" />

        {/* Eyebrow */}
        <p className="text-[0.62rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-5">
          The Maison
        </p>

        {/* Display Pull Quote */}
        <div className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] text-[#F4ECDD] max-w-[34rem] mb-6">
          <p>One obsession.</p>
          <p className="italic text-[#E3A94E]">
            Six ways to <span className="underline decoration-[#E3A94E]/40 underline-offset-8">wear the dark.</span>
          </p>
        </div>

        {/* Maison Subhead */}
        <p className="text-[0.64rem] md:text-[0.7rem] tracking-[0.32em] uppercase text-[#B4A891] mb-12 font-mono">
          Numbered · Sealed by hand · Poured to order
        </p>

        {/* Craftsmanship Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#F4ECDD]/15">
          <div className="space-y-2">
            <span className="text-[#E3A94E] font-mono text-xs tracking-widest block">01 / CRYSTAL</span>
            <h4 className="font-serif text-lg text-[#F4ECDD]">Heavy Faceted Flacon</h4>
            <p className="text-[#B4A891] text-xs font-light leading-relaxed">
              Molded from lead-free optical crystal, weighing 480 grams empty, cut with architectural precision.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#E3A94E] font-mono text-xs tracking-widest block">02 / SEAL</span>
            <h4 className="font-serif text-lg text-[#F4ECDD]">24K Gold Leaf Seal</h4>
            <p className="text-[#B4A891] text-xs font-light leading-relaxed">
              Each flacon neck is bound in gold thread and individually stamped with the Ascenta signet in heated wax.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#E3A94E] font-mono text-xs tracking-widest block">03 / PROVENANCE</span>
            <h4 className="font-serif text-lg text-[#F4ECDD]">Hand-Poured Batches</h4>
            <p className="text-[#B4A891] text-xs font-light leading-relaxed">
              Never warehoused in bulk. Extracted and aged in darkness until the day of dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
