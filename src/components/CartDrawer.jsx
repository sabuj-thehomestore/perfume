import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0A0706]/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#0D0A08] border-l border-[#E3A94E]/25 h-full z-10 flex flex-col shadow-2xl animate-slideLeft">
        {/* Header */}
        <div className="p-6 border-b border-[#F4ECDD]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#E3A94E]" />
            <h2 className="font-serif text-2xl text-[#F4ECDD] tracking-wide">
              Your Reserve
            </h2>
            <span className="text-[0.62rem] font-mono tracking-widest text-[#B4A891] uppercase px-2 py-0.5 rounded-full bg-[#E3A94E]/10 border border-[#E3A94E]/20">
              {cartItems.reduce((a, b) => a + b.quantity, 0)} Items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#B4A891] hover:text-[#F4ECDD] hover:bg-white/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Perk Banner */}
        <div className="bg-[#E3A94E]/10 px-6 py-2.5 border-b border-[#E3A94E]/20 flex items-center gap-2 text-[0.65rem] tracking-[0.18em] uppercase text-[#F7D98C] font-mono">
          <Sparkles className="w-3.5 h-3.5 flex-none" />
          <span>Complimentary White-Glove Worldwide Delivery Included</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#B4A891] space-y-4 py-16">
              <ShoppingBag className="w-12 h-12 text-[#E3A94E]/40 stroke-[1]" />
              <p className="font-serif text-xl text-[#F4ECDD]">Your flacon bag is empty</p>
              <p className="text-xs max-w-xs leading-relaxed font-light">
                Discover our six pure extrait accords and reserve a numbered flacon from the current pour.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-6 border-b border-[#F4ECDD]/10 last:border-b-0"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded bg-[#140F0B] border border-[#E3A94E]/20 flex items-center justify-center p-2 flex-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg text-[#F4ECDD]">
                        Ascenta {item.name}
                      </h3>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#B4A891]/60 hover:text-red-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-wider text-[#B4A891] font-mono mt-0.5">
                      {item.note}
                    </p>
                    <p className="text-[0.6rem] text-[#B4A891]/80 mt-1">
                      100 ml · Extrait de Parfum
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#F4ECDD]/20 rounded-full px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-[#B4A891] hover:text-[#F4ECDD]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs px-2 text-[#F4ECDD]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-[#B4A891] hover:text-[#F4ECDD]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-serif text-[#F7D98C] text-lg">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#F4ECDD]/15 bg-[#090705] space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#B4A891]">
                <span>Numbered Pour Flacons</span>
                <span className="font-mono">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#B4A891]">
                <span>Lacquered Presentation Box</span>
                <span className="text-[#E3A94E] uppercase tracking-wider font-mono">Complimentary</span>
              </div>
              <div className="flex justify-between text-[#B4A891]">
                <span>Curated Discovery Samples (2x 5ml)</span>
                <span className="text-[#E3A94E] uppercase tracking-wider font-mono">Included</span>
              </div>
              <div className="pt-2 border-t border-[#F4ECDD]/10 flex justify-between items-baseline">
                <span className="font-serif text-lg text-[#F4ECDD]">Total</span>
                <span className="font-serif text-2xl text-[#F7D98C]">${subtotal}</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full btn-gold gap-2 justify-center"
            >
              <span>Proceed to Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[0.58rem] tracking-[0.2em] uppercase text-center text-[#B4A891]/70 font-mono">
              Secure Encrypted 256-Bit Checkout · Concierge Guaranteed
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
