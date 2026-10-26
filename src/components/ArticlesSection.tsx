import React, { useState } from 'react';
import { ARTICLES_DATA, ArticleItem } from '../data/companyData';
import { ArticleModal } from './ArticleModal';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="artikel" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-2">
              <span>Wawasan & Edukasi Bisnis</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Artikel Resmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Panduan Praktis Branding, Cetak, dan Ekosistem Web
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kumpulan artikel edukatif dari tim profesional kami untuk membantu Anda membuat keputusan cerdas
              dalam alokasi promosi dan penguatan identitas usaha.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-400 hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata (anti-pill) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-cyan-800 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-cyan-800 group-hover:text-cyan-950 transition-colors">
                  <span>Baca Artikel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reading Modal */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    </section>
  );
};
