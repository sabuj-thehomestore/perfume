import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import ScrollFilm from './components/ScrollFilm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheAccord from './components/TheAccord';
import TheNotes from './components/TheNotes';
import TheCollection, { PERFUMES } from './components/TheCollection';
import TheMaison from './components/TheMaison';
import Acquire from './components/Acquire';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import ConsultationModal from './components/ConsultationModal';
import Preloader from './components/Preloader';

export default function App() {
  const [lenisInstance, setLenisInstance] = useState(null);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const [isPreloadDone, setIsPreloadDone] = useState(false);
  const hairlineRef = useRef(null);

  // Cart & Modal states
  const [cartItems, setCartItems] = useState([
    {
      ...PERFUMES[0],
      quantity: 1,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      infinite: false,
    });

    setLenisInstance(lenis);

    // Update hairline bar directly via DOM to keep React tree completely unburdened
    lenis.on('scroll', (e) => {
      if (hairlineRef.current) {
        hairlineRef.current.style.transform = `scaleX(${e.progress.toFixed(4)})`;
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Minimum display time for preloader veil
    const timer = setTimeout(() => {
      setIsPreloadDone(true);
    }, 1200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  // Cart handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert(
      `Thank you for your reservation! Your private allocation of Ascenta Extrait de Parfum has been recorded. Our concierge will contact you with your sealed flacon batch verification.`
    );
    setCartItems([]);
    setIsCartOpen(false);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-[#0A0706] text-[#F4ECDD] font-sans">
      {/* Opening Veil Preloader */}
      <Preloader
        progress={preloadProgress}
        isFinished={isPreloadDone}
      />

      {/* Top Hairline Progress Bar (Zero React re-render overhead) */}
      <div
        ref={hairlineRef}
        className="fixed top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#B0702A] via-[#E3A94E] to-[#F7D98C] origin-left z-50 pointer-events-none transform-gpu"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Dynamic Background Scroll-Scrub Film */}
      <ScrollFilm
        lenisInstance={lenisInstance}
        onLoaded={(pct) => setPreloadProgress(pct)}
      />

      {/* Floating Glassmorphism Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        <Hero
          onReserveClick={() => {
            const el = document.getElementById('acquire');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <TheAccord />

        <TheNotes />

        <TheCollection
          onAddToCart={handleAddToCart}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        <TheMaison />

        <Acquire
          onAddToCart={handleAddToCart}
          onBookConsultation={() => setIsConsultationOpen(true)}
        />
      </main>

      {/* Maison Footer */}
      <Footer
        onBookConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Slide-out Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Product Quick-View Flacon Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Private Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
