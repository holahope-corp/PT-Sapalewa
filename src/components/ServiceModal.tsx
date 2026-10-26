import React from 'react';
import { ServiceItem, COMPANY_INFO } from '../data/companyData';
import { X, CheckCircle2, Clock, MessageSquare, ArrowRight, Layers } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote?: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  const consultationWhatsappUrl = `https://wa.me/6285602520987?text=${encodeURIComponent(
    `Halo PT Sapalewa, saya ingin konsultasi detail mengenai: ${service.name}. Mohon info estimasi biaya dan jadwal pengerjaan.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Tutup detail layanan"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
          <span>Layanan Resmi PT Sapalewa</span>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span>Spesifikasi Lengkap</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {service.name}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-xs font-medium text-slate-500">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Estimasi Waktu Pengerjaan:</span>
          <strong className="text-slate-800 font-semibold">{service.turnaround}</strong>
        </div>

        {/* Media Preview */}
        <div className="mt-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 h-52 sm:h-64 relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback to illustration
              e.currentTarget.src = service.illustration;
            }}
          />
        </div>

        {/* Description */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Deskripsi Layanan
          </h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Grid: Deliverables & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-100">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-700" />
              Item Pekerjaan (Deliverables)
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-700" />
              Jaminan & Keunggulan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {service.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Butuh penyesuaian khusus atau volume besar? Diskusikan langsung via WhatsApp.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onSelectForQuote) onSelectForQuote(service.id);
                const el = document.getElementById('kalkulator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              Hitung Estimasi
            </button>
            <a
              href={consultationWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat WhatsApp</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
