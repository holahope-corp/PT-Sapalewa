import React from 'react';
import { WORK_PROCESS, WHY_US_POINTS } from '../data/companyData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: 4-Step Process */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
            <span>Metodologi Pengerjaan</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>Alur Kerja Teruji</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Empat Langkah Menuju Solusi Branding & Digital Berkualitas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Kami menjaga efisiensi proses kerja agar setiap pesanan selesai tepat waktu,
            terkomunikasikan dengan baik, dan memenuhi ekspektasi spesifikasi teknis.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {WORK_PROCESS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold font-mono text-cyan-700/30 tabular-nums">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                <span>Terjadwal & Terkoordinasi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Keunggulan Perusahaan (Why Us) */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
              <span>Keunggulan Kompetitif</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Kelebihan Layanan</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Standar Layanan yang Menjadi Pembeda PT Sapalewa
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 mb-2">
                  <span>0{idx + 1}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="uppercase text-[11px] font-sans text-slate-500">Standar Mutu</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
