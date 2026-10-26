import React from 'react';
import { ArticleItem } from '../data/companyData';
import { X, Clock, Calendar, User, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

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
          aria-label="Tutup artikel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Clean unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
          <span className="font-semibold text-cyan-800 uppercase tracking-wider">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {article.title}
        </h3>

        {/* Author byline */}
        <div className="flex items-center gap-2 pb-6 border-b border-slate-100 text-xs text-slate-600">
          <User className="w-4 h-4 text-slate-400" />
          <span>Penulis: <strong>{article.author}</strong></span>
        </div>

        {/* Article Body */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Editorial Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          <p className="font-semibold text-slate-900 mb-1">
            Konsultasikan Kebutuhan Anda dengan Tim Sapalewa
          </p>
          <p>
            Memiliki pertanyaan seputar implementasi materi di atas untuk bisnis Anda?
            Hubungi kami untuk konsultasi gratis mengenai spesifikasi desain, cetak, maupun pembuatan website.
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <a
            href="#kontak"
            onClick={onClose}
            className="text-xs font-semibold text-cyan-800 hover:text-cyan-950"
          >
            Hubungi Tim Penulis / Konsultan →
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Tutup Artikel
          </button>
        </div>
      </div>
    </div>
  );
};
