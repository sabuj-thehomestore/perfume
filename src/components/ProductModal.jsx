import React from 'react';
import { X, ShoppingBag, Sparkles, Shield, Clock, Compass } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0A0706]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#0D0907] border border-[#E3A94E]/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0A0706]/60 text-[#B4A891] hover:text-[#F4ECDD] hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Flacon Column */}
        <div className="md:w-1/2 p-8 flex items-center justify-center bg-gradient-to-b from-[#140F0B] to-[#0A0706] relative">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(circle at center, rgba(227, 169, 78, 0.25) 0%, transparent 70%)'
            }}
          />
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[320px] w-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-[#E3A94E] text-[0.62rem] tracking-[0.32em] uppercase font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Extrait de Parfum</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4ECDD] mb-1">
              Ascenta {product.name}
            </h2>
            <p className="text-[#E3A94E] text-xs font-serif italic mb-4">
              {product.subtitle}
            </p>

            <div className="font-serif text-3xl text-[#F7D98C] mb-6">
              ${product.price}
            </div>

            <p className="text-[#B4A891] text-xs sm:text-sm leading-relaxed font-light mb-6">
              {product.description}
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#F4ECDD]/10 text-xs mb-6">
              <div>
                <span className="text-[#B4A891] block text-[0.6rem] uppercase tracking-wider">Accord Notes</span>
                <span className="text-[#F4ECDD] font-medium">{product.note}</span>
              </div>
              <div>
                <span className="text-[#B4A891] block text-[0.6rem] uppercase tracking-wider">Concentration</span>
                <span className="text-[#F4ECDD] font-medium">{product.concentration}</span>
              </div>
              <div>
                <span className="text-[#B4A891] block text-[0.6rem] uppercase tracking-wider">Flacon Volume</span>
                <span className="text-[#F4ECDD] font-medium">{product.volume}</span>
              </div>
              <div>
                <span className="text-[#B4A891] block text-[0.6rem] uppercase tracking-wider">Atelier Origin</span>
                <span className="text-[#F4ECDD] font-medium">{product.origin}</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="space-y-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full btn-gold gap-2 justify-center"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Bag — ${product.price}</span>
            </button>
            <p className="text-center text-[0.58rem] tracking-[0.2em] uppercase text-[#B4A891] font-mono">
              Individual crystal serial number assigned at pour
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
