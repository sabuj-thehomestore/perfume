import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accord', href: '#accord' },
    { label: 'Notes', href: '#notes' },
    { label: 'Collection', href: '#collection' },
    { label: 'Maison', href: '#maison' },
    { label: 'Acquire', href: '#acquire' },
  ];

  // Spy on scroll to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'accord', 'notes', 'collection', 'maison', 'acquire'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-2rem)] transition-all duration-300">
        <div className="nav-pill flex items-center justify-between gap-4 md:gap-7 px-5 md:px-7 py-2.5 rounded-full">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="flex items-center flex-none group"
            aria-label="Ascenta — Haute Parfumerie"
          >
            <img
              src="/logo.png"
              alt="Ascenta Logo"
              className="h-7 md:h-8 w-auto block transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
            />
          </a>

          <span className="hidden md:block w-1 h-1 rounded-full bg-[#E3A94E]/50 flex-none" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-[0.62rem] tracking-[0.24em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-[#E3A94E] font-medium'
                      : 'text-[#B4A891] hover:text-[#F4ECDD]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <span className="hidden md:block w-1 h-1 rounded-full bg-[#E3A94E]/50 flex-none" />

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-1.5 text-[#B4A891] hover:text-[#E3A94E] transition-colors duration-300"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#E3A94E] text-[#0A0706] font-mono text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#B4A891] hover:text-[#F4ECDD] transition-colors ml-1"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0706]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 animate-fadeIn">
          <a
            href="#top"
            onClick={(e) => scrollTo(e, '#top')}
            className="mb-4"
          >
            <img src="/logo.png" alt="Ascenta" className="h-10 w-auto" />
          </a>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-lg uppercase tracking-[0.3em] font-serif text-[#F4ECDD] hover:text-[#E3A94E] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCart();
            }}
            className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#E3A94E] border border-[#E3A94E]/40 px-6 py-3 rounded-full"
          >
            <ShoppingBag className="w-4 h-4" />
            Shopping Bag ({cartCount})
          </button>
        </div>
      )}
    </>
  );
}
