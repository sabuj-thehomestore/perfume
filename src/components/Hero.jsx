import React from 'react';

export default function Hero({ onReserveClick }) {
  const scrollToNotes = (e) => {
    e.preventDefault();
    const el = document.getElementById('notes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="top"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-16 lg:px-28"
    >
      <div className="w-full max-w-[42rem] pt-24 md:pt-16">
        {/* Eyebrow */}
        <p className="text-[0.62rem] md:text-[0.68rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-5 md:mb-7">
          Ascenta — Extrait de Parfum
        </p>

        {/* Display Title */}
        <h1 className="font-serif font-light text-[3.8rem] sm:text-[5.5rem] md:text-[7.2rem] lg:text-[8.4rem] leading-[0.92] tracking-[0.01em] mb-7 select-none">
          <span className="block gold-text-gradient">Worn like</span>
          <span className="block gold-text-gradient italic">light.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#F4ECDD] font-light max-w-[26rem] leading-relaxed mb-10">
          One accord. Faceted crystal. Sealed by hand.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <button
            onClick={onReserveClick}
            className="btn-gold"
          >
            Reserve
          </button>
          <a
            href="#notes"
            onClick={scrollToNotes}
            className="tlink-gold"
          >
            The notes
          </a>
        </div>
      </div>

      {/* Hero Bottom Meta - Bottom Left */}
      <div className="absolute left-6 md:left-16 lg:left-28 bottom-8 md:bottom-12 text-[0.6rem] tracking-[0.32em] uppercase text-[#B4A891]/80 font-mono">
        100 ml · Extrait
      </div>

      {/* Hero Scroll Hint - Bottom Right */}
      <div className="absolute right-6 md:right-16 lg:right-28 bottom-8 md:bottom-12 flex items-center gap-3 text-[0.58rem] tracking-[0.34em] uppercase text-[#B4A891]/80 select-none">
        <span>Scroll</span>
        <span className="block w-[1px] h-8 bg-gradient-to-b from-[#E3A94E] to-transparent animate-drop-hairline" />
      </div>
    </header>
  );
}
