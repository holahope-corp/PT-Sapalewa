import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Quick popup */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-slate-900">Admin PT Sapalewa</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Tutup popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Halo! Ada yang bisa kami bantu seputar kebutuhan desain grafis, percetakan, atau pembuatan website usaha Anda?
          </p>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Mulai Obrolan WhatsApp</span>
          </a>
        </div>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Buka WhatsApp PT Sapalewa"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp Konsultasi</span>
      </button>
    </div>
  );
};
