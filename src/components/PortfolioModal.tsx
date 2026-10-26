import React from 'react';
import { PortfolioItem } from '../data/companyData';
import { X, ExternalLink, Calendar, CheckCircle2, Building, Tag } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Tutup detail portofolio"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Client & Category Metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
          <span>Portofolio Klien</span>
          <span aria-hidden="true" className="text-slate-300">/</span>
          <span>{item.category}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {item.title}
        </h3>

        {/* Client Identity Bar */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {item.logoImg && (
              <img
                src={item.logoImg}
                alt={item.client}
                className="h-9 w-auto max-w-[120px] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            <div>
              <p className="text-xs text-slate-500 font-medium">Klien / Institusi:</p>
              <p className="text-sm font-bold text-slate-900">{item.client}</p>
            </div>
          </div>
          <div className="text-right text-xs text-slate-500 font-mono">
            <span>Tahun Proyek</span>
            <p className="font-bold text-slate-800">{item.year}</p>
          </div>
        </div>

        {/* Summary & Scope */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Ringkasan Kebutuhan
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Detail Eksekusi & Solusi
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.details}
            </p>
          </div>

          {item.results && (
            <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs sm:text-sm text-cyan-950">
              <span className="font-bold block mb-1">Dampak & Hasil:</span>
              <p>{item.results}</p>
            </div>
          )}
        </div>

        {/* Action button */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-800 hover:text-cyan-950"
            >
              <span>Kunjungi Situs Terkait ({new URL(item.url).hostname})</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-slate-400">Proyek internal dan materi cetak berlisensi klien.</span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
