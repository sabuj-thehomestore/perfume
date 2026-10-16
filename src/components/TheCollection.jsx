import React, { useState } from 'react';
import { ShoppingBag, Eye, Sparkles } from 'lucide-react';

export const PERFUMES = [
  {
    id: 'or',
    sku: 'or',
    name: 'Or',
    subtitle: 'The Luminous Gold Accord',
    note: 'Amber · Saffron · Oud',
    price: 420,
    image: '/catalog/or.webp',
    description: 'A radiant golden alchemy where sun-drenched saffron and Sicilian bergamot open onto raw Baltic amber and 25-year aged oud. Majestic, warm, and endlessly magnetic.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (38%)',
    origin: 'Grasse & Paris',
  },
  {
    id: 'noir',
    sku: 'noir',
    name: 'Noir',
    subtitle: 'The Midnight Accord',
    note: 'Oud · Leather · Tobacco',
    price: 460,
    image: '/catalog/noir.webp',
    description: 'An uncompromising descent into nocturnal luxury. Smoky cured birch tar, Tuscan saddle leather, and dark tobacco leaves submerged in Assam wild agarwood.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (40%)',
    origin: 'Parisian Atelier',
  },
  {
    id: 'ambre',
    sku: 'ambre',
    name: 'Ambre',
    subtitle: 'The Golden Resin Accord',
    note: 'Vanilla · Benzoin · Amber',
    price: 420,
    image: '/catalog/ambre.webp',
    description: 'Crystalline fossilized resin enveloped in slow-extracted Madagascar bourbon vanilla and balsamic benzoin tears from Sumatra. Sensual, comforting, and hypnotic.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (38%)',
    origin: 'Paris & Grasse',
  },
  {
    id: 'rose',
    sku: 'rose',
    name: 'Rose',
    subtitle: 'The Velvet Thorn Accord',
    note: 'Saffron · Rose · Musk',
    price: 440,
    image: '/catalog/rose.webp',
    description: 'May Rose de Mai harvest distilled before sunrise, bruised with golden saffron and dark ambrette musk. Far removed from innocent florals; heavy, dark, and intoxicating.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (39%)',
    origin: 'Grasse Domaine',
  },
  {
    id: 'fumee',
    sku: 'fumee',
    name: 'Fumée',
    subtitle: 'The Sacred Embers Accord',
    note: 'Incense · Birch · Smoke',
    price: 480,
    image: '/catalog/fumee.webp',
    description: 'Omani silver frankincense smoldering over charred birchwood and dried cade. A ceremonial fragrance of sacred warmth, ancient temples, and crisp twilight.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (42%)',
    origin: 'Parisian Atelier',
  },
  {
    id: 'lumiere',
    sku: 'lumiere',
    name: 'Lumière',
    subtitle: 'The Prismatic Dawn Accord',
    note: 'Bergamot · Orris · Musk',
    price: 440,
    image: '/catalog/lumiere.webp',
    description: 'The brilliance of faceted crystal catching dawn. Sparkling green bergamot from Reggio Calabria suspended above precious powdery Florentine orris butter and white cashmere silk.',
    volume: '100 ml / 3.4 FL. OZ.',
    concentration: 'Extrait de Parfum (36%)',
    origin: 'Florence & Paris',
  },
];

export default function TheCollection({ onAddToCart, onSelectProduct }) {
  const [hoveredSku, setHoveredSku] = useState(null);

  return (
    <section
      id="collection"
      className="relative z-10 py-28 md:py-36 px-6 md:px-12 lg:px-20 transform-gpu"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(6,4,4,0.85) 8%, rgba(6,4,4,0.85) 92%, transparent)'
      }}
    >
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
        <p className="text-[0.62rem] md:text-[0.68rem] tracking-[0.42em] uppercase text-[#E3A94E] font-medium mb-4">
          The Collection
        </p>
        <h2 className="font-serif font-light text-4xl sm:text-5xl md:text-6xl text-[#F4ECDD] leading-tight mb-6">
          Six accords. <span className="italic text-[#E3A94E] font-normal">One obsession.</span>
        </h2>
        <p className="text-[#B4A891] font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Each Ascenta is a single Extrait built on one accord — never blended into noise. The same crystal, the same seal; six ways to wear the dark.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
        {PERFUMES.map((item) => {
          const isHovered = hoveredSku === item.sku;
          const isDimmed = hoveredSku !== null && !isHovered;

          return (
            <article
              key={item.id}
              onMouseEnter={() => setHoveredSku(item.sku)}
              onMouseLeave={() => setHoveredSku(null)}
              className={`relative flex flex-col items-center p-4 rounded-xl cursor-pointer transition-opacity duration-500 transform-gpu ${
                isDimmed ? 'opacity-40' : 'opacity-100'
              } ${isHovered ? 'z-20' : 'z-10'}`}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Card Flacon Frame */}
              <div
                onClick={() => onSelectProduct(item)}
                className={`relative w-full aspect-[1/1.18] flex items-end justify-center rounded-lg border transition-all duration-500 overflow-visible transform-gpu ${
                  isHovered
                    ? 'border-[#E3A94E]/70 shadow-[0_0_35px_rgba(227,169,78,0.22)]'
                    : 'border-[#E3A94E]/20 hover:border-[#E3A94E]/40'
                }`}
                style={{
                  background: 'radial-gradient(70% 56% at 50% 46%, rgba(227,169,78,0.08), transparent 72%), linear-gradient(rgba(6,4,4,0.55), rgba(6,4,4,0.55))'
                }}
              >
                {/* Golden ambient floor glow under bottle */}
                <div
                  className="absolute left-[14%] right-[14%] bottom-[4%] h-[12%] pointer-events-none filter blur-md transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(50% 100% at 50% 100%, rgba(227,169,78,0.35), transparent 72%)',
                    opacity: isHovered ? 1 : 0.4
                  }}
                />

                {/* Bottle Image with 3D Float Effect */}
                <img
                  src={item.image}
                  alt={`Ascenta ${item.name}`}
                  decoding="async"
                  className={`relative z-10 w-[82%] h-auto block origin-[50%_80%] transition-all duration-500 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] transform-gpu ${
                    isHovered
                      ? 'animate-bottle-float drop-shadow-[0_42px_55px_rgba(0,0,0,0.85)] drop-shadow-[0_0_35px_rgba(227,169,78,0.25)]'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                />

                {/* Quick Action Badges on Card */}
                {isHovered && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 animate-fadeIn">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                      className="p-2 rounded-full bg-[#0A0706]/80 text-[#F4ECDD] hover:text-[#E3A94E] border border-[#E3A94E]/30 backdrop-blur-sm transition-colors"
                      title="Quick View"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div
                onClick={() => onSelectProduct(item)}
                className="mt-6 text-center select-none w-full"
              >
                <h3 className="font-serif font-normal text-2xl tracking-[0.04em] text-[#F4ECDD]">
                  {item.name}
                </h3>
                <p className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B4A891] mt-2 font-sans">
                  {item.note}
                </p>
                <span className="block font-serif text-[#F7D98C] text-xl mt-2.5">
                  ${item.price}
                </span>
              </div>

              {/* Add to Bag Direct Button */}
              <div className="mt-5 w-full flex justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(item);
                  }}
                  className={`flex items-center justify-center gap-2 text-[0.62rem] tracking-[0.22em] uppercase py-2.5 px-6 rounded-full border transition-all duration-300 ${
                    isHovered
                      ? 'bg-[#E3A94E] text-[#0A0706] border-[#E3A94E] font-medium shadow-[0_0_20px_rgba(227,169,78,0.35)]'
                      : 'text-[#F4ECDD]/80 border-[#E3A94E]/30 hover:border-[#E3A94E] hover:text-[#E3A94E]'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to bag
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
