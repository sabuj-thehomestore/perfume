import React from 'react';
import { Droplet, Sparkles, Clock, Feather } from 'lucide-react';

export default function TheAccord() {
  return (
    <section
      id="accord"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-24"
    >
      <div className="w-full max-w-[38rem]">
        {/* Gold Accent Line */}
        <div className="w-14 h-[1px] bg-[#E3A94E]/60 mb-6" />

        {/* Eyebrow */}
        <p className="text-[0.62rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-4">
          The Accord
        </p>

        {/* Display Title */}
        <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-[#F4ECDD] mb-7">
          One accord.{' '}
          <span className="italic text-[#E3A94E] block md:inline font-normal">
            Nothing else.
          </span>
        </h2>

        {/* Body Text */}
        <p className="text-[#B4A891] text-base md:text-lg font-light leading-relaxed max-w-[32rem] mb-12">
          Amber oud at the base. Saffron and bergamot above. Eighteen hours on skin, and never the same on two people.
        </p>

        {/* Sensory Spec Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#F4ECDD]/10">
          <div>
            <div className="flex items-center gap-2 text-[#E3A94E] mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B4A891]">Longevity</span>
            </div>
            <p className="font-serif text-lg text-[#F4ECDD]">18+ Hours</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#E3A94E] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B4A891]">Concentration</span>
            </div>
            <p className="font-serif text-lg text-[#F4ECDD]">38% Pure Extrait</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-[#E3A94E] mb-1">
              <Feather className="w-3.5 h-3.5" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#B4A891]">Distillation</span>
            </div>
            <p className="font-serif text-lg text-[#F4ECDD]">Micro-Batch Paris</p>
          </div>
        </div>
      </div>
    </section>
  );
}
