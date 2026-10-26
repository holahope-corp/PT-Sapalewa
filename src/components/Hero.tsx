import React from 'react';
import { COMPANY_INFO, CLIENT_PARTNERS } from '../data/companyData';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed clean metadata kicker (anti-pill) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-4">
              <span>{COMPANY_INFO.name}</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>{COMPANY_INFO.legalGroup}</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Mitra Kreatif & Digital Indonesia</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance mb-6">
              Partner Kreatif & Solusi Digital Terpadu untuk Kemajuan Bisnis Anda
            </h1>

            {/* Subheadline based on verified services */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Kami membantu UMKM, institusi, dan korporasi memperkuat daya saing brand melalui
              tiga pilar terintegrasi: <strong className="text-slate-900 font-semibold">desain grafis profesional</strong>,{' '}
              <strong className="text-slate-900 font-semibold">percetakan & digital printing presisi tinggi</strong>, serta{' '}
              <strong className="text-slate-900 font-semibold">pembuatan website & landing page berkonversi tinggi</strong>.
            </p>

            {/* CTA decision block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-cyan-700 rounded-lg transition-colors shadow-xs whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>Pelajari Layanan Kami</span>
              </a>
            </div>

            {/* Key trust indicators as clean unboxed typography */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">4 Pilar</p>
                <p className="text-xs text-slate-500">Layanan Bisnis Terintegrasi</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">1 - 3 Hari</p>
                <p className="text-xs text-slate-500">Opsi Pengerjaan Express</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">100% Asli</p>
                <p className="text-xs text-slate-500">File Master & Garansi Cetak</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dominant visual carrier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group">
              <img
                src="/src/assets/images/hero_agency_studio_1792989255259.jpg"
                alt="Studio Kreatif dan Ruang Kerja Tim Desain PT Sapalewa"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold tracking-wider uppercase text-cyan-300 mb-1">
                  Studio Desain & Teknologi
                </p>
                <p className="text-sm font-medium text-slate-100 leading-snug">
                  Mendukung pertumbuhan bisnis di seluruh Indonesia dengan eksekusi visual berkualitas tinggi.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-300 pt-3 border-t border-white/15">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Bebas Konsultasi
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Transparansi Biaya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Client Trust Strip */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider text-center mb-6">
            Dipercaya Oleh Institusi Pendidikan, Lembaga Negara & Berbagai Pelaku Usaha
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {CLIENT_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${partner.name} - ${partner.category}`}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white border border-slate-200/70 hover:border-cyan-300 hover:shadow-xs transition-all group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 sm:h-10 w-auto max-w-[130px] object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text label if logo cannot load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-[11px] font-medium text-slate-700 text-center mt-2 line-clamp-1 group-hover:text-cyan-800 transition-colors">
                  {partner.name.split('(')[0]}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
