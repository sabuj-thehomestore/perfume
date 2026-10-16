import React, { useState } from 'react';
import { Info, Sparkles } from 'lucide-react';

export default function TheNotes() {
  const [activeMovement, setActiveMovement] = useState(0);

  const movements = [
    {
      num: 'I',
      name: 'Bergamot · Saffron',
      stage: 'Top',
      duration: '0 – 45 min',
      origin: 'Calabria, Italy & Kashmir Valley',
      character: 'Radiant, luminous sunlit citrus piercing through warm, crimson-threaded saffron spice.'
    },
    {
      num: 'II',
      name: 'Amber · Orris Root',
      stage: 'Heart',
      duration: '45 min – 6 hrs',
      origin: 'Florence, Tuscany & Baltic Amber',
      character: 'Velvety, powder-fine Tuscan butter with fossilized golden amber resins radiating warmth.'
    },
    {
      num: 'III',
      name: 'Oud · Vanilla · Musk',
      stage: 'Base',
      duration: '6 – 24+ hrs',
      origin: 'Trat, Thailand & Madagascar Bourbon',
      character: 'Deep aged dark agarwood, slow-cured bourbon vanilla orchid pods, and skin-like silk musk.'
    }
  ];

  return (
    <section
      id="notes"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-28 py-24"
    >
      <div className="w-full max-w-[42rem]">
        {/* Gold Rule */}
        <div className="w-14 h-[1px] bg-[#E3A94E]/60 mb-6" />

        {/* Eyebrow */}
        <p className="text-[0.62rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-4">
          The Notes
        </p>

        {/* Display Title */}
        <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-[#F4ECDD] mb-8">
          Three <span className="italic text-[#E3A94E]">movements.</span>
        </h2>

        {/* Notes Movements Table */}
        <div className="border-t border-[#F4ECDD]/15 max-w-[36rem]">
          {movements.map((m, idx) => {
            const isSelected = activeMovement === idx;
            return (
              <div
                key={m.num}
                onClick={() => setActiveMovement(idx)}
                className={`cursor-pointer transition-all duration-300 border-b border-[#F4ECDD]/15 py-6 group ${
                  isSelected ? 'bg-[#E3A94E]/[0.03] px-3 -mx-3 rounded-lg' : 'hover:pl-2'
                }`}
              >
                <div className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4">
                  {/* Roman Numeral */}
                  <span className={`font-serif italic text-lg md:text-xl transition-colors duration-300 ${
                    isSelected ? 'text-[#F7D98C]' : 'text-[#E3A94E]'
                  }`}>
                    {m.num}
                  </span>

                  {/* Note Combination */}
                  <div>
                    <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl leading-none transition-colors duration-300 ${
                      isSelected ? 'text-[#F4ECDD]' : 'text-[#F4ECDD]/90 group-hover:text-[#F4ECDD]'
                    }`}>
                      {m.name}
                    </h3>
                  </div>

                  {/* Stage Label */}
                  <div className="text-right flex items-center gap-2">
                    <span className="text-[0.58rem] md:text-[0.62rem] tracking-[0.3em] uppercase text-[#B4A891]">
                      {m.stage}
                    </span>
                  </div>
                </div>

                {/* Expanded Details upon Selection */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-[#E3A94E]/20 pl-10 pr-2 animate-fadeIn text-sm">
                    <div className="flex flex-wrap items-center justify-between text-[0.65rem] tracking-[0.2em] uppercase text-[#E3A94E] mb-2 font-mono">
                      <span>Phase: {m.duration}</span>
                      <span>Source: {m.origin}</span>
                    </div>
                    <p className="text-[#B4A891] font-light leading-relaxed text-sm">
                      {m.character}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-[0.6rem] tracking-[0.26em] uppercase text-[#B4A891]/70 mt-6 font-mono flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#E3A94E]" />
          Click any movement to explore olfactory origins
        </p>
      </div>
    </section>
  );
}
