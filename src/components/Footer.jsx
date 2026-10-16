import React from 'react';

export default function Footer({ onBookConsultation }) {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="end"
      className="relative z-10 pt-32 pb-12 px-6 md:px-16 lg:px-28"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(6,4,4,0.72) 16%, rgba(6,4,4,0.96) 38%, #06040A 62%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-[#F4ECDD]/15">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#top" onClick={(e) => scrollTo(e, 'top')} className="block">
              <img
                src="/logo.png"
                alt="Ascenta Logo"
                className="h-10 w-auto filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
              />
            </a>
            <p className="text-[#B4A891] text-xs leading-relaxed font-light max-w-sm">
              One accord. Faceted crystal. Sealed by hand. A single Extrait de Parfum, numbered and poured to order between Paris and Miami.
            </p>
            <div className="flex flex-wrap gap-5 pt-2">
              <a
                href="#instagram"
                className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B4A891] hover:text-[#E3A94E] transition-colors border-b border-transparent hover:border-[#E3A94E]"
              >
                Instagram
              </a>
              <a
                href="#pinterest"
                className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B4A891] hover:text-[#E3A94E] transition-colors border-b border-transparent hover:border-[#E3A94E]"
              >
                Pinterest
              </a>
              <a
                href="#journal"
                className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B4A891] hover:text-[#E3A94E] transition-colors border-b border-transparent hover:border-[#E3A94E]"
              >
                The Journal
              </a>
            </div>
          </div>

          {/* The Maison */}
          <div className="space-y-4">
            <h4 className="text-[0.62rem] tracking-[0.34em] uppercase text-[#E3A94E] font-medium font-sans">
              The Maison
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4ECDD]/80 font-light">
              <li>
                <a href="#accord" onClick={(e) => scrollTo(e, 'accord')} className="hover:text-[#E3A94E] transition-colors">
                  The Accord
                </a>
              </li>
              <li>
                <a href="#notes" onClick={(e) => scrollTo(e, 'notes')} className="hover:text-[#E3A94E] transition-colors">
                  The Notes
                </a>
              </li>
              <li>
                <a href="#maison" onClick={(e) => scrollTo(e, 'maison')} className="hover:text-[#E3A94E] transition-colors">
                  Our Refusal
                </a>
              </li>
              <li>
                <a href="#acquire" onClick={(e) => scrollTo(e, 'acquire')} className="hover:text-[#E3A94E] transition-colors">
                  Acquire Flacon
                </a>
              </li>
            </ul>
          </div>

          {/* Client Care */}
          <div className="space-y-4">
            <h4 className="text-[0.62rem] tracking-[0.34em] uppercase text-[#E3A94E] font-medium font-sans">
              Client Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4ECDD]/80 font-light">
              <li>
                <button onClick={onBookConsultation} className="hover:text-[#E3A94E] transition-colors text-left">
                  Book a Consultation
                </button>
              </li>
              <li>
                <a href="#shipping" className="hover:text-[#E3A94E] transition-colors">
                  Shipping &amp; Worldwide Delivery
                </a>
              </li>
              <li>
                <a href="#engraving" className="hover:text-[#E3A94E] transition-colors">
                  Crystal Engraving &amp; Refills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E3A94E] transition-colors">
                  Contact the Maison
                </a>
              </li>
            </ul>
          </div>

          {/* Ateliers */}
          <div className="space-y-4">
            <h4 className="text-[0.62rem] tracking-[0.34em] uppercase text-[#E3A94E] font-medium font-sans">
              Ateliers
            </h4>
            <div className="text-xs text-[#B4A891] space-y-3 font-light leading-relaxed">
              <p>
                <strong className="text-[#F4ECDD] font-normal block">Paris</strong>
                8 Rue Saint-Honoré, 75001 Paris
              </p>
              <p>
                <strong className="text-[#F4ECDD] font-normal block">Miami</strong>
                Miami Design District, NE 39th St
              </p>
              <p className="text-[0.68rem] tracking-wider uppercase text-[#E3A94E] font-mono pt-1">
                Mon–Sat · By Private Appointment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.62rem] tracking-[0.18em] uppercase text-[#B4A891] font-mono">
          <p>© MMXXV Ascenta Parfums · All rights reserved</p>
          <div className="flex flex-wrap gap-6">
            <a href="#terms" className="hover:text-[#F4ECDD] transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#privacy" className="hover:text-[#F4ECDD] transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:text-[#F4ECDD] transition-colors">
              Cookie Preferences
            </a>
            <a href="#accessibility" className="hover:text-[#F4ECDD] transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
