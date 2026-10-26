import React, { useState } from 'react';
import { PORTFOLIO_DATA, PortfolioItem } from '../data/companyData';
import { PortfolioModal } from './PortfolioModal';
import { ArrowUpRight, ExternalLink, Filter } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [filterKey, setFilterKey] = useState<'all' | 'web' | 'design' | 'branding'>('all');

  const filteredProjects = filterKey === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.categoryKey === filterKey);

  const filterTabs = [
    { key: 'all', label: 'Semua Proyek' },
    { key: 'web', label: 'Website & Landing Page' },
    { key: 'design', label: 'Desain Grafis' },
    { key: 'branding', label: 'Branding & Kemasan' },
  ] as const;

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
              <span>Portofolio & Rekam Jejak</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Karya Terverifikasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Karya Riil untuk Mitra Bisnis & Institusi di Indonesia
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami menyajikan hasil pekerjaan nyata yang telah dirasakan manfaatnya oleh institusi negara,
              perguruan tinggi, penyedia jasa logistik, hingga pelaku industri digital.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilterKey(tab.key)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  filterKey === tab.key
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-400 hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Client Logo & Category Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="h-10 w-28 bg-white rounded-lg border border-slate-200/80 p-1.5 flex items-center justify-center">
                    {project.logoImg ? (
                      <img
                        src={project.logoImg}
                        alt={project.client}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-slate-700 truncate">
                        {project.client}
                      </span>
                    )}
                  </div>
                  
                  {/* Clean unboxed category label */}
                  <span className="text-xs text-slate-500 font-medium">
                    {project.year}
                  </span>
                </div>

                <div className="text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-1">
                  {project.category}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Card Bottom: Client & Click affordance */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700 truncate max-w-[180px]">
                  {project.client}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-cyan-800 group-hover:text-cyan-950 transition-colors shrink-0">
                  <span>Lihat Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <PortfolioModal
          item={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
