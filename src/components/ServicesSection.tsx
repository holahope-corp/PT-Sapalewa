import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/companyData';
import { ServiceModal } from './ServiceModal';
import { ArrowRight, Clock, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForCalculator?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForCalculator,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'print' | 'web' | 'invitation'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const categories = [
    { key: 'all', label: 'Semua Layanan (4)' },
    { key: 'design', label: 'Desain Grafis' },
    { key: 'print', label: 'Percetakan & Printing' },
    { key: 'web', label: 'Website & Landing Page' },
    { key: 'invitation', label: 'Undangan Digital' },
  ] as const;

  return (
    <section id="layanan" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
              <span>Bidang Usaha & Layanan</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Spesifikasi Aktual</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Empat Pilar Solusi Kreatif & Digital dari PT Sapalewa
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Seluruh layanan diselenggarakan oleh tim terspesialisasi dengan standar pengerjaan terukur,
              mulai dari identitas visual, produksi cetak, hingga platform web berkinerja tinggi.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveCategory(c.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === c.key
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-cyan-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Index Banner */}
                <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.src = service.illustration;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  
                  {/* Clean unboxed index and category */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono font-medium text-white/90 bg-slate-900/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <span>0{index + 1}</span>
                    <span aria-hidden="true" className="text-white/40">·</span>
                    <span className="uppercase tracking-wider text-[11px] font-sans">
                      {service.category === 'design' && 'Desain Grafis'}
                      {service.category === 'print' && 'Percetakan'}
                      {service.category === 'web' && 'Website'}
                      {service.category === 'invitation' && 'Undangan Digital'}
                    </span>
                  </div>

                  {/* Turnaround badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-cyan-300" />
                      {service.turnaround.split('·')[0]}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      File Master Lengkap
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="mt-5 pt-5 border-t border-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Cakupan Pengerjaan:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                      {service.deliverables.length > 3 && (
                        <li className="text-[11px] text-slate-500 italic pl-3.5">
                          + {service.deliverables.length - 3} item spesifikasi lainnya...
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1 group/btn"
                >
                  <span>Lihat Spesifikasi Lengkap</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectServiceForCalculator) {
                      onSelectServiceForCalculator(service.id);
                    }
                    const el = document.getElementById('kalkulator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Kalkulasi Biaya
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Modal */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForQuote={onSelectServiceForCalculator}
        />
      </div>
    </section>
  );
};
