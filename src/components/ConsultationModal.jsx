import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    atelier: 'paris',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after showing confirmation
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0A0706]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0E0A08] border border-[#E3A94E]/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#0A0706]/60 text-[#B4A891] hover:text-[#F4ECDD] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E3A94E]/10 border border-[#E3A94E]/40 flex items-center justify-center mx-auto text-[#E3A94E]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#F4ECDD]">
              Private Consultation Requested
            </h3>
            <p className="text-xs text-[#B4A891] max-w-sm mx-auto leading-relaxed font-light">
              Our Master Parfumeur concierge will contact you within 12 hours with your private appointment confirmation and invitation.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 btn-gold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-[#E3A94E] text-[0.62rem] tracking-[0.34em] uppercase font-mono mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Private Olfactory Appointment</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4ECDD] mb-2">
              Book a Consultation
            </h2>
            <p className="text-xs text-[#B4A891] font-light leading-relaxed mb-6">
              Experience the six pure extraits in person with an Ascenta master nose. Formulated privately to your skin chemistry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#B4A891] mb-1 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#140F0C] border border-[#F4ECDD]/15 rounded-lg px-4 py-2.5 text-sm text-[#F4ECDD] focus:border-[#E3A94E] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#B4A891] mb-1 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#140F0C] border border-[#F4ECDD]/15 rounded-lg px-4 py-2.5 text-sm text-[#F4ECDD] focus:border-[#E3A94E] focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#B4A891] mb-1 font-mono">
                    Atelier Location
                  </label>
                  <select
                    value={formData.atelier}
                    onChange={(e) => setFormData({ ...formData, atelier: e.target.value })}
                    className="w-full bg-[#140F0C] border border-[#F4ECDD]/15 rounded-lg px-3 py-2.5 text-xs text-[#F4ECDD] focus:border-[#E3A94E] focus:outline-none transition-colors"
                  >
                    <option value="paris">Paris · 8 Rue Saint-Honoré</option>
                    <option value="miami">Miami · Design District</option>
                    <option value="virtual">Virtual Concierge (Video)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#B4A891] mb-1 font-mono">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#140F0C] border border-[#F4ECDD]/15 rounded-lg px-3 py-2 text-xs text-[#F4ECDD] focus:border-[#E3A94E] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-[#B4A891] mb-1 font-mono">
                  Olfactory Preferences or Requests
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Particular affinity for rare oud, amber resins, or custom monogram engraving..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#140F0C] border border-[#F4ECDD]/15 rounded-lg px-4 py-2 text-xs text-[#F4ECDD] focus:border-[#E3A94E] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold justify-center mt-2"
              >
                Request Private Invitation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
