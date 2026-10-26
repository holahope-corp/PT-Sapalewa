import React from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1: Corporate Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <img
                src="/logo-sapalewa-white.png"
                alt="PT Sapalewa"
                className="h-8 md:h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logo-sapalewa.png';
                }}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mitra kreatif dan solusi digital terpadu untuk kebutuhan desain grafis korporat,
              percetakan presisi tinggi, dan pengembangan landing page bisnis di Indonesia.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>
                <strong>Website Baru:</strong>{' '}
                <a
                  href={COMPANY_INFO.canonicalDomain}
                  className="text-cyan-400 hover:underline"
                >
                  ptsapalewa.web.id
                </a>
              </p>
              <p>
                <strong>Sumber Data Resmi:</strong>{' '}
                <a
                  href={COMPANY_INFO.sourceDomain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:underline"
                >
                  sapalewa.web.id
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a
                    href="#layanan"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-cyan-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-cyan-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cyan-400 transition-colors">
                  Layanan & Solusi
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-cyan-400 transition-colors">
                  Portofolio Klien
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-cyan-400 transition-colors">
                  Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#artikel" className="hover:text-cyan-400 transition-colors">
                  Artikel & Edukasi
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-cyan-400 transition-colors">
                  Kontak Kerja Sama
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kontak Resmi
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  WhatsApp: <strong className="text-white">{COMPANY_INFO.phoneDisplay}</strong>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors block"
                >
                  Email: <strong className="text-white">{COMPANY_INFO.email}</strong>
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                Jam Kerja: {COMPANY_INFO.workingHours}
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Facebook Sapalewa"
              >
                Facebook
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={COMPANY_INFO.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Twitter Sapalewa"
              >
                Twitter
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={COMPANY_INFO.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="YouTube Sapalewa"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang. Entitas usaha dari {COMPANY_INFO.legalGroup}.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Sitemap XML
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Robots.txt
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
